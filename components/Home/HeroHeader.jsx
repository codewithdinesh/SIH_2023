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
import { useTranslation } from "next-i18next";


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
    marginTop: rem(30),
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
    objectFit: 'contain',
    padding: '30px',

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
  const { t } = useTranslation("common");

  const { classes } = useStyles();
  // TODO:laws ko replace karke umbrella naam de do
  return (
    <div>
      {/* <Container style={{ maxWidth: "100%", display:"flex",justifyContent:"space-around" }}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to <span className={classes.highlight + " z-0"}>LegalSathi</span> Platform 👋<br />
            </Title>
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
      </Container> */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10%',
        gap: '40px',
      }}>
        <div>

          <Title className={classes.title}>
            {t("Welcome to LegalSathi Platform")}👋
            <br />
          </Title>
          <List
            mt={40}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={rem(15)} stroke={1.5} />
              </ThemeIcon>
            }
          >

            <List.Item>
              <Text fz={"lg"}>
                <b>{t("Comprehensive Legal Hub")}</b>
              </Text>
            </List.Item>
            <List.Item>
              <Text fz={"lg"}>
                <b>{t("Digital Assistance")}</b>
              </Text>
            </List.Item>
            <List.Item>
              <Text fz={"lg"}>
                <b> {t("Simplified Legal Information")}</b>
              </Text>
            </List.Item>
            <List.Item>
              <Text fz={"lg"}>
                <b> {t("Connect with Experienced Lawyers")} </b>
              </Text>
            </List.Item>
            <List.Item>
              <Text fz={"lg"}>
                <b> {t("Streamline Legal Documents")} </b>
              </Text>
            </List.Item>
          </List>
          <Button radius="sm" size="lg" mt={50} className={classes.control} rightIcon={<IconArrowRight />}>
            {t("Get Started")}
          </Button>
        </div>
        <div>
          <Image src={"images/hero-img.svg"} className={classes.image} alt="Hero Header Illustration" height={'400px'} />
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;