import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useNavigate } from "react-router-dom";

type DishCardProps = {
    name: string;
    image: string;
    price: number;
    id: string;
};

type DishCardContentProps = Pick<DishCardProps, "name" | "price">;

const DishCardPrice = ({ price }: { price: number }) => (
    <Stack direction="row" alignItems="center" component="em">
        <AttachMoneyIcon />
        <Typography
            component="em"
            sx={{
                fontStyle: "normal",
            }}
        >
            {price.toFixed(2)}
        </Typography>
    </Stack>
);

const DishCardContent = ({ name, price }: DishCardContentProps) => (
    <CardContent
        component="p"
        sx={{
            p: 0,
            m: 0,
            width: 154,
        }}
    >
        <Typography
            component="strong"
            sx={{
                pl: 0.8,
                fontWeight: "500",
                color: "grey.800",
            }}
        >
            {name}
        </Typography>
        <DishCardPrice price={price} />
    </CardContent>
);

const DishCard = ({ name, image, price, id }: DishCardProps) => {
    const navigate = useNavigate();
    return (
        <Card
            sx={{
                width: 171,
                height: 182,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: 1,
                cursor: "pointer",
            }}
            elevation={1}
            onClick={() => navigate(`/dish/${id}`)}
        >
            <CardMedia
                component="img"
                image={image}
                alt={`image alluding to the ${name} dish`}
                sx={{
                    height: 110,
                    width: 154,
                    borderRadius: 3,
                }}
            />
            <DishCardContent name={name} price={price} />
        </Card>
    );
};

export default DishCard;
