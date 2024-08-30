import { useState } from "react";
import { Category as CategoryEnum } from "@core/enums";
import IRestaurant from "@core/interfaces/IRestaurant";
import IDish from "@core/interfaces/IDish";
import { baseUrl } from "@core/constants";
import { Container, Fab, Grid2 as Grid, Stack } from "@mui/material";

import RestaurantCard from "../components/cards/RestaurantCard";
import CategoryTabs from "../components/tabs/CategoryTabs";
import DishCard from "../components/cards/DishCard";
import CardDetail from "../components/cards/CardDetail";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type RestaurantCardDetailProps = {
    logo: string;
    banner: string;
    name: string;
    stars: number;
    workTime: {
        open: string;
        close: string;
    };
    description: string;
};

type RestaurantCardsProps = {
    categoryTabs: JSX.Element;
    detail: JSX.Element;
    dishes: IDish[];
};

const RestaurantCardDetail = ({
    logo,
    banner,
    name,
    stars,
    workTime,
    description,
}: RestaurantCardDetailProps) => (
    <Grid>
        <CardDetail
            logo={`${baseUrl}${logo}`}
            name={name}
            card={
                <RestaurantCard
                    banner={`${baseUrl}${banner}`}
                    name={name}
                    stars={stars}
                    workTime={workTime}
                    description={description}
                />
            }
        />
    </Grid>
);

const renderCards = ({ name, image, price, id }: IDish) => (
    <DishCard
        name={name}
        image={`${baseUrl}${image}`}
        price={price}
        key={name}
        id={id}
    />
);
const selectDishesByCategory = (
    selectedCategory: CategoryEnum,
    dishes: IDish[]
) => {
    return selectedCategory == CategoryEnum.All
        ? dishes
        : dishes.filter((dish: IDish) =>
              dish.categories.some(
                  (x: string) => x === CategoryEnum[selectedCategory]
              )
          );
};

const RestaurantCards = ({
    categoryTabs,
    dishes,
    detail,
}: RestaurantCardsProps) => {
    const navigate = useNavigate();
    return (
        <Container
            maxWidth="md"
            sx={{
                p: 3,
            }}
        >
            <Grid
                container
                justifyContent="center"
                gap={4}
                sx={{
                    position: "relative",
                }}
            >
                {detail}
                <Grid>
                    {categoryTabs}
                    <Stack
                        direction="row"
                        gap={2}
                        sx={{
                            mt: 3,
                        }}
                    >
                        {dishes.map(renderCards)}
                    </Stack>
                </Grid>
                <Fab
                    aria-label="Return"
                    sx={{
                        position: "absolute",
                        left: 0,
                        top: -16,
                        bgcolor: "#fff",
                        boxShadow: "none",
                    }}
                    onClick={() => navigate(-1)}
                >
                    <ArrowBackIosNewIcon />
                </Fab>
            </Grid>
        </Container>
    );
};

const RestaurantPage = () => {
    const restaurant = useLoaderData() as IRestaurant;
    const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(
        CategoryEnum.All
    );
    return (
        <Await
            resolve={restaurant}
            children={({ dishes, ...cardDetailProps }) => (
                <>
                    <RestaurantCards
                        detail={<RestaurantCardDetail {...cardDetailProps} />}
                        categoryTabs={
                            <CategoryTabs
                                setSelectedCategory={setSelectedCategory}
                                selectedCategory={selectedCategory}
                            />
                        }
                        dishes={selectDishesByCategory(
                            selectedCategory,
                            dishes
                        )}
                    />
                </>
            )}
        />
    );
};

export default RestaurantPage;
