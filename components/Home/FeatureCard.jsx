import { Card, Image, Text, Title, Button, Group, createStyles, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useTranslation } from "next-i18next";
import Link from 'next/link';


const useStyles = createStyles((theme) => ({
    card: {
        margin: "1rem",
        maxWidth: rem(300),
        maxHeight: rem(400)
    },

}))

const FeatureCard = () => {
    const { t } = useTranslation("common");

    const { classes } = useStyles();
    const cardData = [
        {
            img: "images/ai-assistant.svg",
            title: t("AI Chatbot"),
            desc: t("Get answers to your queries by our AI chatbot"),
            btnText: t("Chat Now"),
            links:"/ai/chat"
        },
        {
            img: "images/legal-repository.svg",
            title: t("Legal Repository"),
            desc: t("Organized Repository of all the legal documents"),
            btnText: t("Explore"),
            links:"/acts"
        },
        {
            img: "images/lawyer-market-place.svg",
            title: t("Lawyer Connect"),
            desc: t("Connect to lawyers for your legal queries in lawyer Market Place"),
            btnText: t("Connect"),
            links:""
        },
        {
            img: "images/summarize-document.svg",
            title: t("Legal Summarizer"),
            desc: t("Get you legal document summarized just by uploading it"),
            btnText: t("Summarize"),
            links:"/ai/summarize"
        },

    ]
    return (
        <>
            <Title align='center' order={1} mb={60} mt={100}>{t("Features")}</Title>
            <Group position='center' styles={{ justify: "space-between" }} >
                {cardData?.map((item) => (
                    <Card shadow="sm" padding="lg" radius="md" className={classes.card} key={item.index}>
                        <Card.Section>
                            <Image
                                src={item.img}
                                alt={item.title}
                                height={160}
                                className={classes.image}
                                fit="contain"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>{item.title}</Text>
                        </Group>

                        <Text size="sm" color="dimmed" wrap>
                            {item.desc}
                        </Text>
                        <Link href={item.links}>
                        <Button variant="light" fullWidth mt="md" radius="md" rightIcon={<IconArrowRight />}>
                            {item.btnText}
                        </Button>
                        </Link>
                    </Card>
                ))}
            </Group>
        </>
    );
}

export default FeatureCard;