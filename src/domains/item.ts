import { BaseDomain } from "./base-domain";

export interface Item extends BaseDomain{
    id: string;
    name: string;
    price: number;
}
