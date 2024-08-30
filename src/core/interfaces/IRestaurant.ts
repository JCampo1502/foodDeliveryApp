import IDish from "./IDish";

export default interface IRestaurant {
    id: string;
    logo: string;
    banner: string;
    name: string;
    description: string;
    stars: number;
    workTime: {
        open: string;
        close: string;
    };
    dishes: IDish[];
}
