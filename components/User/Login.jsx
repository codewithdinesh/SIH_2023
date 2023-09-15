import React from "react";
import Navbar from "@/components/NavBar";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const useStyles = createStyles((theme) => ({
  wrapper: {
    // TODO: adjust the height to screen size
    minHeight: "80vh",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const loginAuth = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div>
      <Navbar />
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            Welcome back to Law and order
          </Title>
          <form
          // onSubmit={form.onSubmit((values) => console.log(values))}
          >
            <TextInput
              withAsterisk
              required
              label="Email"
              placeholder="your@email.com"
              // {...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              required
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
            />
            <Button type="submit" fullWidth mt="xl" size="md">
              Login
            </Button>
          </form>
          <Text ta="center" mt="md">
            Don&apos;t have an account?{" "}
            <Anchor
              href="#"
              weight={700}
              onClick={(event) => event.preventDefault()}
            >
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    </div>
  );
};
export default Login;
