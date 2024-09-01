import { axiosRestaurantInstance } from "@/core/constants";
import IDish from "@/core/interfaces/IDish";
import IRestaurant from "@/core/interfaces/IRestaurant";

export const getDishById = async (id: string): Promise<IDish | null> => {
    try {
        const { data } = await axiosRestaurantInstance<IRestaurant[]>("/");
        return (
            data
                .reduce(
                    (prev: IDish[], restaurant) => [
                        ...prev,
                        ...restaurant.dishes,
                    ],
                    []
                )
                .find((dish) => dish.id == id) ?? null
        );
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const searchDishByName = async (
    searchName: string
): Promise<IDish[] | null> => {
    if (searchName.length === 0) return null;
    try {
        const { data } = await axiosRestaurantInstance<IRestaurant[]>("/");
        const dishes = data.reduce(
            (prev: IDish[], { dishes }) => [...prev, ...dishes],
            []
        );
        return dishes.filter(({ name }) =>
            name.toLowerCase().includes(searchName.toLowerCase())
        );
    } catch (error) {
        console.error(error);
        return null;
    }
};
