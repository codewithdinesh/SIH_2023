import { createStyles, Image, Accordion, Grid, Col, Container, Title, Text, Stack, Button } from '@mantine/core';
import { useTranslation } from "next-i18next";


const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.xl,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));


const WebFaq = () => {
  const { t } = useTranslation("common");
  const data = [
    {
      title: t("How does the chatbot for legal queries work?"),
      ans: t("Our chatbot uses natural language processing to understand your legal queries and provide accurate responses. It's designed to simulate a conversation with a lawyer and can answer a wide range of legal questions, helping you get quick and reliable information."),
      value: "q1",
    },
    {
      title: t("Can I find and hire a lawyer through the lawyer marketplace feature?"),
      ans: t("Yes, you can! Our lawyer marketplace connects you with experienced lawyers in various legal fields. You can browse through profiles, read reviews, and select a lawyer who meets your specific needs. It simplifies the process of finding and hiring legal counsel."),
      value: "q2",
    },
    {
      title: t("How does the legal document summarizer work?"),
      ans: t("Our legal document summarizer is a powerful tool that extracts key information from lengthy legal documents. Simply upload the document, and it will provide a concise summary, highlighting important clauses, dates, and legal terms. It saves you time and helps you grasp the essence of complex documents quickly."),
      value: "a3",
    },
    {
      title: t("Is the legal information on your platform up to date and reliable?"),
      ans: t("Yes, we strive to provide accurate and up-to-date legal information. Our platform sources content from reputable legal databases and ensures that the information displayed is current. However, it's essential to consult with a lawyer for specific legal advice, as laws may vary by jurisdiction."),
      value: "a4",
    },
    {
      title: t("Do you offer customer support in all supported languages?"),
      ans: t("Yes, we provide customer support in all the languages supported by our platform. Our customer support team is here to assist you with any questions or issues you may have, regardless of whether you're communicating in Hindi, Marathi, or English."),
      value: "a5"
    }
  ]
  const { classes } = useStyles();


  return (
    <div className={classes.wrapper} >
      <Container size="xl" mt={100}>
        <Title order={1} className={classes.title} ta={"center"} mb={"30px"}>
          {t("Still have any queries?")}
        </Title>
        <Grid id="faq-grid" gutter={50} align="center">
          <Col span={10} md={6}>
            <Image src={"images/faq-image.svg"} alt="Frequently Asked Questions" mt={"xl"} height={"20rem"} fit='oject' />
          </Col>
          <Col span={12} md={6}>
            <Accordion chevronPosition="right" defaultValue="q1" >
              {data.map((item) => (
                <Accordion.Item className={classes.item} value={item.value} key={item.index}>
                  <Accordion.Control>
                    <Text fw={500} fz={"lg"} >
                      {item.title}
                    </Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text >
                      {item.ans}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Grid>
        <Stack align="center" style={{
          backgroundColor: "#f4eee4",
          margin: '5rem 0'
        }}>
          <Text fz={40} fw={500} mt={40} mb={20}>{t("What are you waiting for then?")}</Text>
          <Button size='lg' mb={50}>{t("Get Started")}</Button>
        </Stack>
      </Container>
    </div>
  );
}

export default WebFaq;