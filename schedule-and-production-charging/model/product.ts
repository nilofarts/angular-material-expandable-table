import { Schedule } from "./schedule";
import { Order } from "./order";
import { ChargingDetail } from "./charging-detail";

export class Product {
    productId: Number;
    productOrder: Number;
    soItem: Number;
    customerName: String;
    orderWeight: Number;
    balanceToProduce: Number;
    ppcRemark: String;
    schedule: Schedule;
    order: Order[];
    chargingDetail: ChargingDetail[];
}