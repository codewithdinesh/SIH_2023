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
} from "@mantine/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { IconSearch, IconSitemap, IconTextSize } from "@tabler/icons-react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
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
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Image src="./logo.png" alt="logo" width="300px" height="74px" />
        <Autocomplete
          className={classes.search}
          placeholder="Search"
          icon={<IconSearch size="1rem" stroke={1.5} />}
          data={[]}
        />
        <Group>
          <Group ml={50} spacing={20}>
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
          </Group>
        </Group>
      </div>
    </Header>
  );
};

export default NavBar;
