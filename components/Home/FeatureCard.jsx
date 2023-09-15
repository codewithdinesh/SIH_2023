import { Card, Image, Text, Title, Button, Group, createStyles, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
    card: {
        margin: "1rem",
        maxWidth: rem(300),
        maxHeight: rem(400)
    },
    image: {
        // objectFit: "cover",
        // width:"100%",

    }
}))

const FeatureCard = () => {
    const { classes } = useStyles();
    const cardData = [
        {
            img: "images/ai-assistant.svg",
            title: "AI Assistant",
            desc: "Get answers to your queries by our AI chatbot",
            btnText: "Interact"
        },
        {
            img: "images/legal-repository.svg",
            title: "Legal Repository",
            desc: "Organized Repository of all the legal documents",
            btnText: "Explore"
        },
        {
            img: "images/lawyer-market-place.svg",
            title: "Lawyer Connect",
            desc: "Connect to lawyers for your legal queries in lawyer Market Place",
            btnText: "Connect"
        },
        {
            img: "images/summarize-document.svg",
            title: "Legal Summarizer",
            desc: "Get you legal doucument summarized just by uploading it",
            btnText: "Summarize"
        },

    ]
    return (
        <>
            <Title align='center' order={1} mb="xl">Features</Title>
            <Group position='center' styles={{ justify: "space-between" }} >
                {cardData?.map((item) => (
                    <Card shadow="sm" padding="lg" radius="md" className={classes.card} key={item.index}>
                        <Card.Section>
                            <Image
                                src={item.img}
                                alt={item.title}
                                height={160}
                                className={classes.image}
                            // fit="contain"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>{item.title}</Text>
                        </Group>

                        <Text size="sm" color="dimmed" wrap>
                            {item.desc}
                        </Text>

                        <Button variant="light" color="blue" fullWidth mt="md" radius="md" rightIcon={<IconArrowRight />}>
                            {item.btnText}
                        </Button>
                    </Card>
                ))}
            </Group>
        </>
    );
}

export default FeatureCard;