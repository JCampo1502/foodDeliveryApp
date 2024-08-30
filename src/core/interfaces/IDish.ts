export default interface IDish {
    id: string;
    image: string;
    name: string;
    timing: string;
    description: string;
    price: number;
    deliveryMinCost: number;
    deliveryMaxCost: number;
    additionalIngredients: {
        label: string;
        value: number;
    }[];
    categories: string[];
}
