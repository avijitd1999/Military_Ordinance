// manufacturer.dto.ts
import { IsString, IsEmail, IsNotEmpty, Matches, IsUrl, IsPhoneNumber, IsDate } from 'class-validator';

export class ManufacturerDTO {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[^\d]+$/, { message: 'Name must not contain numbers' })
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[@#$&]).*$/, { message: 'Password must contain at least one of the following characters: @, #, $, &' })
  password: string;

  @IsUrl()
  socialMediaLink: string;

  @IsPhoneNumber(null, { message: 'Invalid phone number' })
  phoneNumber: string;

  @IsDate()
  joiningDate: Date;

}

export class loginDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
