import { OrderService } from './order.service';
import { OrderDTO } from './order.dto';
import { OrderEntity } from './order.entity';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(orderDTO: OrderDTO): Promise<OrderEntity>;
    getAllOrders(): Promise<OrderEntity[]>;
    updateOrder(orderId: number, orderDTO: OrderDTO): Promise<OrderEntity>;
    deleteOrder(orderId: number): Promise<void>;
}
