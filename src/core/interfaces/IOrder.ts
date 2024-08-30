import { DishesType } from "../types";

export default interface IOrder {
    date: Date;
    constOfDelivery: number;
    dishes: DishesType[];
}
