import { Exclude, Expose } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsJSON,
  ValidateNested,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { Client } from "../client/client.entity";

export class User {
  @ApiProperty({})
  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({})
  @IsNotEmpty()
  @IsDate()
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @ApiProperty({})
  @IsNotEmpty()
  @IsDate()
  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  hash: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  hashedRt?: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  zip?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsDate()
  @IsOptional()
  @IsDate()
  birthDate?: Date;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty({
    type: Client,
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @IsObject()
  @IsOptional()
  @ValidateNested()
  Client?: Client;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsOptional()
  @IsNumber()
  clientId?: number;
}
