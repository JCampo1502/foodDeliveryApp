import { axiosRestaurantInstance } from "@core/constants";
import { Category } from "@core/enums/index";
import IRestaurant from "@core/interfaces/IRestaurant";
import IDish from "@core/interfaces/IDish";

export const getRestaurant = async (): Promise<IRestaurant[]> => {
    try {
        const { data } = await axiosRestaurantInstance.get<IRestaurant[]>("/");
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getRestaurantByCategory = async (category: Category) => {
    const restaurants = await getRestaurant();
    const data = restaurants.filter(({ dishes }: IRestaurant) =>
        dishes.some(({ categories }: IDish) =>
            categories.some((d: string) => d === Category[category])
        )
    );
    return data;
};

export const getRestaurantById = async (
    id: string
): Promise<IRestaurant | null> => {
    try {
        const { data } = await axiosRestaurantInstance.get<IRestaurant>(
            `/${id}`
        );
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
