import { Repository } from 'typeorm';
import { OrderDTO } from './order.dto';
import { OrderEntity } from './order.entity';
export declare class OrderService {
    private orderRepo;
    constructor(orderRepo: Repository<OrderEntity>);
    createOrder(orderDTO: OrderDTO): Promise<OrderEntity>;
    findAllOrders(): Promise<OrderEntity[]>;
    updateOrder(orderId: number, orderDTO: OrderDTO): Promise<OrderEntity>;
    deleteOrder(orderId: number): Promise<void>;
}
