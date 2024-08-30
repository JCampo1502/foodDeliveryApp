import IRestaurant from "@core/interfaces/IRestaurant";
import { baseUrl } from "@core/constants";
import { Stack } from "@mui/material";
import CardSkeleton from "../components/cards/CardSkeleton";
import RestaurantCard from "../components/cards/RestaurantCard";

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

const ShowRestaurants = ({ restaurants }: CardContainerProps) =>
    restaurants.length === 0 ? (
        <LoadRestaurantCards />
    ) : (
        restaurants.map((restaurant) => (
            <RestaurantCard
                {...{
                    ...restaurant,
                    banner: baseUrl + restaurant.banner,
                }}
                key={restaurant.id}
            />
        ))
    );

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
