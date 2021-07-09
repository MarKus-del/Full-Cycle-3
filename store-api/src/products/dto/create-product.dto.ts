import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  image_url: string;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
