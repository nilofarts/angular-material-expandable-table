import { Product } from "./product";
import { ChargingDetail } from "./charging-detail";

export class Order {
    orderId: Number;
    batchNo: String;
    coilWeight: Number;
    status: String;
    ppcRemark: String;
    product: Product;
    chargingDetails: ChargingDetail[];
}