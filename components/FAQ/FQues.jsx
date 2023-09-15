import {
    Container,
    Title,
    Accordion,
    createStyles,
    rem,
    NativeSelect,
  } from "@mantine/core";
  import { useState } from "react";
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 2)`,
      paddingBottom: `calc(${theme.spacing.xl} * 2)`,
      minHeight: 650,
    },
  
    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },
  
    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  }));
  
  const FQues = () => {
    const Categories = [
      {
        title: "Cate 1",
        icon: "",
      },
      {
        title: "Cate 2",
        icon: "",
      },
      {
        title: "Cate 3",
        icon: "",
      },
  
      {
        title: "Cate 4",
        icon: "",
      },
    ];
  
    const Questions = [
      {
        category: "Cate 1",
        ques: "ques",
        ans: "ans",
      },
      {
        category: "Cate 1",
        ques: "ques",
        ans: "ans",
      },
      {
        category: "Cate 2",
        ques: "ques",
        ans: "ans",
      },
      {
        category: "Cate 2",
        ques: "ques",
        ans: "ans",
      },
      {
        category: "Cate 3",
        ques: "ques",
        ans: "ans",
      },
      {
        category: "Cate 3",
        ques: "ques",
        ans: "ans",
      },
      {
        category: "Cate 4",
        ques: "ques",
        ans: "ans",
      },
    ];
    const { classes } = useStyles();
    const [currentCategory, setCurrentCategory] = useState("Cate 1");
    return (
      <Container size="sm" className={classes.wrapper}>
        <Title align="center" className={classes.title}>
          Frequently Asked Questions
        </Title>
        <NativeSelect
          mb={"xl"}
          data={["Cate 1", "Cate 2", "Cate 3", "Cate 4"]}
          label="Choose Category of Questions"
          description="Category for FAQs"
          value={currentCategory}
          onChange={(e) => setCurrentCategory(e.currentTarget.value)}
        />
        {Questions.filter((c) => c.category === currentCategory).map((item) => (
          <Accordion mt={"xl"} key={item.index}>
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>{item.ques}</Accordion.Control>
              <Accordion.Panel>{item.ans}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        ))}
      </Container>
    );
  };
  
  export default FQues;
  