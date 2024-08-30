import { useState } from "react";
import { Category as CategoryEnum } from "@core/enums";
import IRestaurant from "@core/interfaces/IRestaurant";
import IDish from "@core/interfaces/IDish";
import { baseUrl } from "@core/constants";
import { Stack, Grid } from "@mui/material";
import RestaurantCard from "../components/cards/RestaurantCard";
import CategoryTabs from "../components/tabs/CategoryTabs";
import DishCard from "../components/cards/DishCard";
import CardDetail from "../components/cards/CardDetail";

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
    <Grid item>
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

const renderCards = ({ name, image, price }: IDish) => (
    <DishCard
        name={name}
        image={`${baseUrl}${image}`}
        price={price}
        key={name}
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
    return (
        <Grid container justifyContent="center" gap={4}>
            {detail}
            <Grid item>
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
        </Grid>
    );
};

const RestaurantPage = ({
    restaurant: { dishes, ...cardDetailProps },
}: IRestaurant) => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(
        CategoryEnum.All
    );

    return (
        <RestaurantCards
            detail={<RestaurantCardDetail {...cardDetailProps} />}
            categoryTabs={
                <CategoryTabs
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
            }
            dishes={selectDishesByCategory(selectedCategory, dishes)}
        />
    );
};

export default RestaurantPage;
