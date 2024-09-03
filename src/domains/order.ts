import { BaseDomain } from "./base-domain";
import { Item } from "./item";

export interface Order extends BaseDomain {
    id: string;
    items: Item[];
    itemsPrice: number;
}
