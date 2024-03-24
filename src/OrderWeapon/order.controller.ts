// order.controller.ts
import { Controller, Post, Put, Delete, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './order.dto';
import { OrderEntity } from './order.entity';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() orderDTO: OrderDTO): Promise<OrderEntity> {
    return await this.orderService.createOrder(orderDTO);
  }

  @Get()
  async getAllOrders(): Promise<OrderEntity[]> {
    return await this.orderService.findAllOrders();
  }

  @Put(':id')
  async updateOrder(@Param('id', ParseIntPipe) orderId: number, @Body() orderDTO: OrderDTO): Promise<OrderEntity> {
    return await this.orderService.updateOrder(orderId, orderDTO);
  }

  @Delete(':id')
  async deleteOrder(@Param('id', ParseIntPipe) orderId: number): Promise<void> {
    return await this.orderService.deleteOrder(orderId);
  }
}

