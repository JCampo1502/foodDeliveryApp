export default interface IDish {
    image: string;
    name: string;
    timing: string;
    description: string;
    price: number;
    additionalIngredients: { [key: string]: number }[];
    categories: string[];
}
