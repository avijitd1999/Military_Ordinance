import { Controller, Post, Body, Put, Param, Get, Delete, UseInterceptors, UploadedFile, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { WeaponService } from './weapon.service';
import { WeaponDTO } from './weapon.dto';
import { WeaponEntity } from './weapon.entity';

@Controller('weapon')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @Get()
  async findAll(): Promise<WeaponEntity[]> {
    return await this.weaponService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createWeapon(@Body() weaponDTO: WeaponDTO): Promise<WeaponEntity> {
    return await this.weaponService.createWeapon(weaponDTO);
  }

  @Put(':id')
  async updateWeapon(@Param('id') weaponId: number, @Body() weaponDTO: WeaponDTO): Promise<WeaponEntity> {
    return await this.weaponService.updateWeapon(weaponId, weaponDTO);
  }

  @Delete(':id')
  async deleteWeapon(@Param('id') weaponId: number): Promise<void> {
    return await this.weaponService.deleteWeapon(weaponId);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type'), false);
      }
    },
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) =>{
        cb (null, Date.now()+file.originalname)
      }
    }),
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    // Process the uploaded file here
    return file;
  }
}
