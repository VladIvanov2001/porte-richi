import {Trim} from "./trim";

export class Order{
  name?: string;
  type?: string;
  equipment?: string;
  price?: number;
  priceWithDiscount?: number;
  trims?: Trim;
  constructions?: object;
  furniture?: object;
  id?: number;
  address?: string;
  hallDoors: any;
}
