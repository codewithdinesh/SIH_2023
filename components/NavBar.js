import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  rem,
  Image,
  Menu,
  Button,
  Text,
  ActionIcon
} from "@mantine/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconSearch, IconSitemap, IconTextSize, IconUserCircle, IconAdjustments } from "@tabler/icons-react";
import { useState } from "react";

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
    margin: "15px 10px",
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
}));

const NavBar = () => {
  const { classes } = useStyles();
  const [currentLanguage, setCurrentLanguage] = useState("English");
  let fontSize = "16";
  const [currentFontSize, setCurrentFontSize] = useState(fontSize);
  const { locale, locales, push } = useRouter();

  const handleClick = (l) => {
    push("/", undefined, { locale: l });
  };

  return (
    <div className={classes.header} >
      <div className={classes.inner}>
        <Image src={"http://localhost:3000/logo.png"} alt="logo" ml={"lg"} width="300px" height="50px" className={classes.Image} style={{ objectFit: "contain" }} />
        <Group spacing={20} className={classes.grp}>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={[]}
          />
          <Button.Group>
            <Button
              variant="outline"
              onClick={() => setCurrentFontSize(currentFontSize + 1)}
            >
              <IconTextSize />
              <span style={{ fontSize: "1.5rem" }}>+</span>
            </Button>
            <Button className=" " variant="filled" onClick={() => setCurrentFontSize(fontSize)}>
              Reset
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentFontSize(currentFontSize - 1)}
            >
              <IconTextSize />
              <span style={{ fontSize: "1.5rem" }}>-</span>
            </Button>
          </Button.Group>
          <IconSitemap />
          <Menu shadow="md" width={200}>
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
                  handleClick("ma");
                }}
              >
                मराठी
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ActionIcon size="xl" variant="outline">
                <IconUserCircle size="2.125rem" />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                Sign up
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item >
                Log In
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </div>
    </div>
  );
};

export default NavBar;
