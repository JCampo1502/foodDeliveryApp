import ILocation from "./ILocation";
import IOrder from "./IOrder";
import IPayment from "./IPayment";

export default interface IUser {
    id: string;
    name: string;
    lastName: string;
    email: string;
    birthDay?: Date;
    phoneNumber: number;
    password: string;
    location?: ILocation[];
    payment?: IPayment[];
    orders?: IOrder[];
}
