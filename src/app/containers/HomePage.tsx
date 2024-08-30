import { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import CardsContainer from "./CardsContainer";
import CategoryTabs from "../components/tabs/CategoryTabs";
import PromoTabs from "../components/tabs/PromoTabs";
import { Category as CategoryEnum } from "@core/enums";

import IRestaurant from "../../core/interfaces/IRestaurant";
import {
    getRestaurant,
    getRestaurantByCategory,
} from "@/infrastructure/services/restaurant/get";

type HomeTabsProps = {
    restaurantCategories: JSX.Element;
};
const loadRestaurantData = (category: CategoryEnum): Promise<IRestaurant[]> => {
    if (category === CategoryEnum.All) {
        return getRestaurant();
    }
    return getRestaurantByCategory(category);
};

const HomeTabs = ({ restaurantCategories }: HomeTabsProps) => (
    <Stack rowGap={2}>
        <PromoTabs />

        <Stack gap={1} mb={3} alignItems="start">
            <Typography
                variant="h4"
                sx={{
                    fontSize: 16,
                    fontWeight: "normal",
                    color: "grey.700",
                    m: 0,
                    p: 0,
                }}
            >
                Restaurants and cafes
            </Typography>
            {restaurantCategories}
        </Stack>
    </Stack>
);

const HomePage = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryEnum>(
        CategoryEnum.All
    );
    useEffect(() => {
        loadRestaurantData(selectedCategory).then((res) => setRestaurants(res));
    }, [selectedCategory]);

    return (
        <>
            <HomeTabs
                restaurantCategories={
                    <CategoryTabs
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                }
            />
            <CardsContainer restaurants={restaurants} />
        </>
    );
};

export default HomePage;
