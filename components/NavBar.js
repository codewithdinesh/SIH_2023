import {
  createStyles,
  Group,
  rem,
  Image,
  Menu,
  Button,
  Text,
  Center,

} from "@mantine/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconChevronDown, IconSitemap, IconTextSize, IconUserCircle, IconAdjustments } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "next-i18next";




const useStyles = createStyles((theme) => ({
  div: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    height: "56px",
    [theme.fn.smallerThan("xl")]: {
      height: rem(100),
    },
    [theme.fn.smallerThan("md")]: {
      height: rem(200),
    },
  },

  Image: {
    [theme.fn.smallerThan("lg")]: {
      width: "50px",
      height: "20px",
      border: "1px solid red",
      marginLeft: "0"
    },
  },

  inner: {
    height: rem(56),
    margin: "15px 30px",
    [theme.fn.smallerThan("sm")]: {
      height: rem(100),
      display: "flex",
      flexDirection: "column"
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  grp: {
    marginLeft: "2rem",
    marginRight: "1rem",
    [theme.fn.smallerThan("xs")]: {
      marginLeft: "0",
      marginRight: "0",
    },
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
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  linkLabel: {
    marginRight: rem(5),
  },
}));


const NavBar = () => {
  const { t } = useTranslation("common");

  const navbarLinks = [
    {
      label: t('Legal Help'),
      link: '/#',

      // Dropdown options
      links: [
        {
          label: t('Bare Act'),
          link: '/acts',
        },
        {
          label: t('Articles'),
          link: '/articles',
        },
        {
          label: t('Indian Constitution'),
          link: '/constitution',
        }
      ],
    },
    {
      label: t('Summarization'),
      link: '/ai/summarize',
    },
    {
      label: t('Document Chat'),
      link: '/ai/chat/doc',
    },
    {
      label: t('Chatbot'),
      link: '/ai/chat',
    },
  ];
  const { classes } = useStyles();
  const [currentLanguage, setCurrentLanguage] = useState("English");
  let fontSize = "16";
  const [currentFontSize, setCurrentFontSize] = useState(fontSize);
  const { locale, locales, push } = useRouter();

  const handleClick = (l) => {
    push("/", undefined, { locale: l });
  };

  const items = navbarLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}><Link href={item.link} style={{ textDecoration: "none", color: "black" }}>{item.label}</Link></Menu.Item>
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
    <div className={classes.header} >
      <div className={classes.inner}>
        <Link href="/">
          <Image src={"https://sih-2023-gilt.vercel.app/logo.png"} alt="logo" ml={"lg"} width="200px" className={classes.Image} style={{ objectFit: "contain" }} />
        </Link>
        <Group>
          {items}
        </Group>
        <Group spacing={20} className={classes.grp}>

          <Button.Group>
            <Button
              variant="outline"
              onClick={() => setCurrentFontSize(currentFontSize - 1)}
            >
              <IconTextSize />
              <span style={{ fontSize: "1.5rem" }}>-</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentFontSize(currentFontSize + 1)}
            >
              <IconTextSize />
              <span style={{ fontSize: "1.5rem" }}>+</span>
            </Button>
          </Button.Group>

          <Link href={"/sitemap"} style={{ textDecoration: "none", color: "black" }} >
            <Button rightIcon={<IconSitemap />}>{t("SiteMap")}</Button>
          </Link>

          <Menu shadow="md" width={200} size={'md'}>
            <Menu.Target>
              <Button variant="filled" >{currentLanguage}</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Language</Menu.Label>
              <Menu.Item
                onClick={() => {
                  setCurrentLanguage("English");
                  handleClick("en");
                }}
              >
                English
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                onClick={() => {
                  setCurrentLanguage("हिंदी");
                  handleClick("hi");
                }}
              >
                हिंदी
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                onClick={() => {
                  setCurrentLanguage("मराठी");
                  handleClick("mr");
                }}
              >
                मराठी
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </div>
    </div>
  );
};

export default NavBar;
