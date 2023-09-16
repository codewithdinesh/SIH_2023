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
import Link from "next/link";
import { useTranslation } from "next-i18next";


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
    fontSize: theme.fontSizes.md,
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
      }
    ],
  },
  {
    label: 'Summarization',
    link: '/ai/summarize',
  },
  {
    label: 'Document Chat',
    link: '/ai/chat/doc',
  },
  {
    label: 'Chatbot',
    link: '/ai/chat',
  },
];

const LowerNavBar = () => {
  const { t } = useTranslation("common");
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = navbarLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}><Link href={item.link}>{item.label}</Link></Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
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