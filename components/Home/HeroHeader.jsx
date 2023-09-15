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
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to <span className={classes.highlight + " z-0"}>LegalAI</span> Platform <br />
            </Title>
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >

              <List.Item>
                <b>Comprehensive Legal Hub</b> - Contains all laws
              </List.Item>
              <List.Item>
                <b>Digital Assistance</b> - Intelligent Chatbot for Quick Answers
              </List.Item>
              <List.Item>
                <b> Simplified Legal Information</b> - Simplication of legal documents using AI
              </List.Item>
              <List.Item>
                <b> Connect with Experienced Lawyers </b> - Lawyer marketplace for hiring lawyers
              </List.Item>
              <List.Item>
                <b> Streamline Legal Documents </b> - Providing a concise summary, highlighting important clauses, dates, and legal terms
              </List.Item>
            </List>
            <Button radius="sm" size="md" mt={30} className={classes.control} rightIcon={<IconArrowRight />}>
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