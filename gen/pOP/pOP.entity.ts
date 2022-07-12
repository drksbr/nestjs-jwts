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
import { Rack } from "../rack/rack.entity";

export class POP {
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
  @IsNumber()
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @ApiProperty({
    type: Client,
  })
  @IsOptional()
  @ValidateNested()
  @IsObject()
  @IsOptional()
  @ValidateNested()
  client: Client;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  title: string;

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
  @IsDecimal()
  @IsOptional()
  @IsObject()
  lat?: Prisma.Decimal;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  @IsOptional()
  @IsObject()
  lng?: Prisma.Decimal;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    isArray: true,
    type: Rack,
  })
  @IsArray()
  @IsOptional()
  @ValidateNested()
  @IsObject()
  @IsArray()
  @IsOptional()
  @ValidateNested()
  Rack: Rack[];
}
