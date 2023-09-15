import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Text,
  Burger,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));


const navbarLinks = [
  {
    label: 'Legal Help',
    link: '/#',

    // Dropdown options
    links: [
      {
        label: 'Bare Act',
        link: '/acts',
      },
      {
        label: 'Articles',
        link: '/articles',
      },
      {
        label: 'Indian Constitution',
        link: '/constitution',
      },
    ],
  },
  {
    label: 'Summarisation',
    link: '/summarisation',
  },
  {
    label: 'Document Chat',
    link: '/doc-chat',
  },
  {
    label: 'QNA',
    link: '/qna',
  },
  {
    label: 'Hire Lawyer',
    link: '/hire-lawyer',
  },
];

const LowerNavBar = () => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = navbarLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={80} pt={"sm"}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
      </Container>
    </Header>
  );
}

export default LowerNavBar;