export default interface IPayment {
  name: string;
  number?: number;
  expires: Date;
  cvv: number;
}
