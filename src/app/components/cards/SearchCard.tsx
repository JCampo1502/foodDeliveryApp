import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

type SearchCardProps = {
    image: string;
    name: string;
    price: number;
};
type RestaurantCardText = Pick<SearchCardProps, "name" | "price">;
type RestaurantCardContent = Pick<SearchCardProps, "name" | "image"> & {
    element: JSX.Element;
};

const RestaurantCardText = ({ name, price }: RestaurantCardText) => (
    <>
        <Typography
            component="strong"
            sx={{
                fontSize: 16,
            }}
        >
            {name}
        </Typography>
        <Stack direction="row" alignItems="center" component="span">
            <AttachMoneyIcon
                sx={{
                    height: 16,
                }}
            />
            <Typography
                component="em"
                sx={{
                    fontStyle: "normal",
                    color: "grey.400",
                }}
            >
                {price.toFixed(2)}
            </Typography>
        </Stack>
    </>
);

const RestaurantCardContent = ({
    image,
    name,
    element,
}: RestaurantCardContent) => (
    <>
        <CardMedia
            component="img"
            image={image}
            alt={`image alluding to the dish ${name}`}
            sx={{
                height: 44,
                width: 44,
                borderRadius: "10px",
            }}
        />
        <CardContent
            component="p"
            sx={{
                display: "flex",
                flexDirection: "column",
                m: 0,
                py: "0 !important",
            }}
        >
            {element}
        </CardContent>
    </>
);

const SearchCard = ({ image, name, price }: SearchCardProps) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
            elevation={0}
        >
            <RestaurantCardContent
                name={name}
                image={image}
                element={<RestaurantCardText name={name} price={price} />}
            />
        </Card>
    );
};

export default SearchCard;
