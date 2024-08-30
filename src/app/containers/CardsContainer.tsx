import IRestaurant from "@core/interfaces/IRestaurant";
import { baseUrl } from "@core/constants";
import { Box, Stack } from "@mui/material";
import CardSkeleton from "../components/cards/CardSkeleton";
import RestaurantCard from "../components/cards/RestaurantCard";
import { useNavigate } from "react-router-dom";

type CardContainerProps = {
    restaurants: IRestaurant[];
};

const LoadRestaurantCards = () => (
    <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </>
);

const ShowRestaurants = ({ restaurants }: CardContainerProps) => {
    const navigate = useNavigate();
    return restaurants.length === 0 ? (
        <LoadRestaurantCards />
    ) : (
        restaurants.map((restaurant) => (
            <Box
                onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                key={restaurant.id}
                sx={{
                    cursor: "pointer",
                }}
            >
                <RestaurantCard
                    {...{
                        ...restaurant,
                        banner: baseUrl + restaurant.banner,
                    }}
                />
            </Box>
        ))
    );
};

const CardContainer = ({ restaurants }: CardContainerProps) => {
    return (
        <Stack
            direction="row"
            sx={{
                flexWrap: "wrap",

                justifyContent: {
                    xs: "center",
                    md: "flex-end",
                },
                gap: 3,
            }}
        >
            <ShowRestaurants restaurants={restaurants} />
        </Stack>
    );
};

export default CardContainer;
