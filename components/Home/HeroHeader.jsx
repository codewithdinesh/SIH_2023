import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.md} * 1)`,
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,
  },

  content: {
    maxWidth: rem(600),
    marginRight: `calc(${theme.spacing.xl} * 1)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

const HeroHeader = () => {
  const { classes } = useStyles();
  // TODO:laws ko replace karke umbrella naam de do
  return (
    <div>
      <Container style={{ maxWidth: "72rem" }}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to <span className={classes.highlight + " z-0"}>LegalSathi</span> Platform 👋<br />
            </Title>
            {/* <Text c="dimmed" mt={40}>We provide</Text> */}
            <List
              mt={40}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >

              <List.Item>
                <b>Comprehensive Legal Hub</b>
              </List.Item>
              <List.Item>
                <b>Digital Assistance</b>
              </List.Item>
              <List.Item>
                <b> Simplified Legal Information</b>
              </List.Item>
              <List.Item>
                <b> Connect with Experienced Lawyers </b>
              </List.Item>
              <List.Item>
                <b> Streamline Legal Documents </b>
              </List.Item>
            </List>
            <Button radius="sm" size="md" mt={70} title="Get started" className={classes.control} rightIcon={<IconArrowRight />}>
              Get started
            </Button>
          </div>
          <Image src={"images/hero-img.svg"} className={classes.image} alt="Hero Header Illustration" />
        </div>
      </Container>
    </div>
  );
}

export default HeroHeader;