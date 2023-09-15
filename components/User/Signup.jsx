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
import { DateInput } from "@mantine/dates";
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
    borderRight: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
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
    fontFamily: `${theme.fontFamily}`,
  },
}));

const Signup = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      date: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  return (
    <div>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            Welcome to Law and order
          </Title>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              label="Name"
              placeholder="Ram"
              size="md"
              {...form.getInputProps("name")}
            />
            <DateInput
              // value={value}
              // onChange={setValue}
              label="Date of Birth"
              placeholder="When were you born?"
              maw={400}
              mx="auto"
              {...form.getInputProps("dob")}
            />
            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Retype your password"
              mt="md"
              size="md"
              {...form.getInputProps("confirmPassword")}
            />
            <Checkbox label="Keep me logged in" mt="xl" size="md" />
            <Button fullWidth mt="xl" size="md">
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
export default Signup;
