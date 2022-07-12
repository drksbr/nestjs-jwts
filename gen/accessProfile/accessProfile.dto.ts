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

export class CreateAccessProfileDto {
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
  username: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsOptional()
  @IsNumber()
  port?: number;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  service?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  protocol?: string;
}

export class UpdateAccessProfileDto {
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
  username: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsOptional()
  @IsNumber()
  port?: number;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  service?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsOptional()
  @IsString()
  protocol?: string;
}

export class FindAccessProfileDto {
  @ApiProperty({})
  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @IsString()
  username: string;
}

export class ConnectAccessProfileDto {
  @ApiProperty({})
  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
