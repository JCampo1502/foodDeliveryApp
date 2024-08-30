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
