import { Product } from "./product";
import { Order } from "./order";

export class ChargingDetail {
    id: Number;
    batchNo: String;
    jswGrade: String;
    hrGrade: String;
    carbon: String;
    magnese: String;
    product: Product;
    order: Order;
}