// manufacturer.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ManufacturerDTO } from './manufacturer.dto';
import { ManufacturerEntity } from './manufacturer.entity';

@Injectable()
export class ManufacturerService {
  findByEmail(email: string) {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(ManufacturerEntity)
    private manufacturerRepo: Repository<ManufacturerEntity>,
  ) {}

  async findAll(): Promise<ManufacturerEntity[]> {
    return await this.manufacturerRepo.find();
  }

  async createUser(manufacturerDTO: ManufacturerDTO): Promise<ManufacturerEntity> {
    const manufacturer = this.manufacturerRepo.create(manufacturerDTO);
    return await this.manufacturerRepo.save(manufacturer);
  }

  async modifyCountry(userId: number, newCountry: string): Promise<ManufacturerEntity> {
    const manufacturer = await this.manufacturerRepo.findOne({ where: { id: userId } });
    if (!manufacturer) {
      throw new NotFoundException('Manufacturer not found');
    }
    manufacturer.country = newCountry;
    return await this.manufacturerRepo.save(manufacturer);
  }

  async getUsersByJoiningDate(joiningDate: Date): Promise<ManufacturerEntity[]> {
    return await this.manufacturerRepo.find({ where: { joiningDate } });
  }

  async getUsersWithDefaultCountry(): Promise<ManufacturerEntity[]> {
    return await this.manufacturerRepo.find({ where: { country: 'Unknown' } });
  }

  async updateUser(userId: number, manufacturerDTO: ManufacturerDTO): Promise<ManufacturerEntity> {
    let manufacturer = await this.manufacturerRepo.findOne({ where: { id: userId } });
    if (!manufacturer) {
      throw new NotFoundException('Manufacturer not found');
    }
    manufacturer = { ...manufacturer, ...manufacturerDTO };
    return await this.manufacturerRepo.save(manufacturer);
  }

  async deleteUser(userId: number): Promise<void> {
    const result = await this.manufacturerRepo.delete(userId);
    if (result.affected === 0) {
      throw new NotFoundException('Manufacturer not found');
    }
  }
}
