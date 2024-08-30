import { Stack, Card, CardContent, CardMedia, Typography } from "@mui/material";

type CardDetailProps = {
    logo: string;
    name: string;
    card: JSX.Element;
};

const CardLogo = ({ logo, name }: Pick<CardDetailProps, "logo" | "name">) => (
    <Stack direction="row" alignItems="center">
        <CardMedia
            alt={`${name} restaurant logo`}
            image={logo}
            component="img"
            sx={{
                height: 41,
                width: 34,
                objectFit: "contain",
            }}
        />
        <Typography
            color="error"
            width={36}
            sx={{
                fontWeight: "bold",
                fontFamily: '"Anton", sans-serif',
                lineHeight: 1,
                ml: 0.4,
            }}
        >
            {name}
        </Typography>
    </Stack>
);

const CardDetail = ({ logo, name, card }: CardDetailProps) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: 360,
            }}
            elevation={0}
        >
            <CardLogo logo={logo} name={name} />
            <CardContent
                sx={{
                    p: "0 !important",
                    width: 1,
                    mt: 1,
                }}
            >
                {card}
            </CardContent>
        </Card>
    );
};

export default CardDetail;
