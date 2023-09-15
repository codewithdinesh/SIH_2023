import {
    createStyles,
    Text,
    Title,
    Stack,
    Group,
    ActionIcon,
    rem,
    Grid,
    Card,
} from "@mantine/core";
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
    IconSun,
    IconPhone,
    IconMapPin,
    IconAt,
    IconQuestionMark,
} from "@tabler/icons-react";


const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `calc(${theme.spacing.xl} * 2.5)`,

        [theme.fn.smallerThan("sm")]: {
            padding: `calc(${theme.spacing.xl} * 1.5)`,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        color: theme.white,
        lineHeight: 1,
    },

    description: {
        // color: theme.colors[theme.primaryColor][0],
        // maxWidth: rem(300),

        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
        },
    },

    social: {
        color: theme.white,

        "&:hover": {
            color: theme.colors[theme.primaryColor][1],
        },
    },

    card: {
        border: `1px solid ${theme.colors[theme.primaryColor][1]}`,
        borderRadius: "8px",
        margin: "1rem",
        padding: "1rem",
    },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

const Contact = () => {
    const { classes } = useStyles();

    const MOCKDATA = [
        { title: "Email", description: "hello@mantine.dev", Icon: IconAt },
        { title: "Phone", description: "+91 (800) 335 35 35", Icon: IconPhone },
        {
            title: "Address",
            description: "844 Morris Park avenue",
            Icon: IconMapPin,
        },
        { title: "Working hours", description: "8 a.m. – 11 p.m.", Icon: IconSun },
    ];

    const icons = social.map((Icon, index) => (
        <ActionIcon
            key={index}
            size={28}
            className={classes.social}
            variant="transparent"
        >
            <Icon size="1.4rem" stroke={1.5} />
        </ActionIcon>
    ));

    const contactCard = MOCKDATA.map((Item) => (
        <Card key={Item.index} align="center" className={classes.card}>
            <Item.Icon mt={"lg"} />
            <Text weight={500} mt={"xl"}>
                {Item.title}
            </Text>
            <Text>{Item.description}</Text>
        </Card>
    ));

    return (
        <>
            <Stack align="center" className={classes.wrapper}>
                {/* <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        > */}
                <IconQuestionMark size={"48px"} />
                <h1>Have any more questions?</h1>
                <Text>We can help you</Text>

                <Title className={classes.title}>Contact us</Title>
                <Text className={classes.description} mt="sm" mb={30}>
                    Leave your email and we will get back to you within 24 hours
                </Text>
                <Grid>{contactCard}</Grid>
                <Group mt="xl">{icons}</Group>

                {/* </SimpleGrid> */}
            </Stack>
        </>
    );
};

export default Contact;
