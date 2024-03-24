// order.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDTO } from './order.dto';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepo: Repository<OrderEntity>,
  ) {}

  async createOrder(orderDTO: OrderDTO): Promise<OrderEntity> {
    const orderPartial: Partial<OrderEntity> = {
      customerName: orderDTO.customerName,
      weapons: [], // Assuming weapons property should be initialized as an empty array
    };
    const order = this.orderRepo.create(orderPartial);
    return await this.orderRepo.save(order);
  }

  async findAllOrders(): Promise<OrderEntity[]> {
    return await this.orderRepo.find();
  }
  
  async updateOrder(orderId: number, orderDTO: OrderDTO): Promise<OrderEntity> {
    let order = await this.orderRepo.findOne({ where: { id: orderId } });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return await this.orderRepo.save(order);
  }

  async deleteOrder(orderId: number): Promise<void> {
    const result = await this.orderRepo.delete(orderId);
    if (result.affected === 0) {
      throw new NotFoundException('Order not found');
    }
  }
}
