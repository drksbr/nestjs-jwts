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
import { POP } from "../pOP/pOP.entity";
import { User } from "../user/user.entity";
import { Proxy } from "../proxy/proxy.entity";

export class Client {
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
  name: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  logo?: string;

  @ApiProperty({
    isArray: true,
    type: POP,
  })
  @IsArray()
  @IsOptional()
  @ValidateNested()
  @IsObject()
  @IsArray()
  @IsOptional()
  @ValidateNested()
  POP: POP[];

  @ApiProperty({
    isArray: true,
    type: User,
  })
  @IsArray()
  @IsOptional()
  @ValidateNested()
  @IsObject()
  @IsArray()
  @IsOptional()
  @ValidateNested()
  user: User[];

  @ApiProperty({
    isArray: true,
    type: Proxy,
  })
  @IsArray()
  @IsOptional()
  @ValidateNested()
  @IsObject()
  @IsArray()
  @IsOptional()
  @ValidateNested()
  Proxy: Proxy[];
}
