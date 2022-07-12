import { User } from "./user.entity";
import { PrismaService } from "src/shared/services/prisma.service";
import {
  FindUserDto,
  CreateUserDto,
  UpdateUserDto,
  ConnectUserDto,
} from "./user.dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  NotFoundException,
  Param,
  Post,
  Patch,
  Put,
  Req,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiConsumes,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import {} from "@prisma/client";

export class UserService {
  constructor(private prismaService: PrismaService) {}
  async exist(query: FindUserDto): Promise<Boolean> {
    const ret = await this.prismaService.user.findMany({
      where: { ...query },
    });
    return ret.length > 0;
  }
  async findUniq(param: ConnectUserDto): Promise<User> {
    const ret = await this.prismaService.user.findUnique({
      where: { ...param },
    });
    return ret;
  }
  async findMany(query: FindUserDto): Promise<User> {
    const ret = await this.prismaService.user.findMany({
      where: { ...query },
    });
    return ret;
  }
  async getAll(): Promise<User[]> {
    const ret = await this.prismaService.user.findMany();
    return ret;
  }
  async createOne(body: CreateUserDto): Promise<User> {
    const ret = await this.prismaService.user.create({
      data: { ...body },
    });
    return ret;
  }
  async createMany(body: CreateUserDto[]): Promise<Number> {
    const ret = await this.prismaService.user.createMany({
      data: [
        ...body.map((b) => {
          return { ...b };
        }),
      ],
    });
    return ret.count;
  }
  async updateOne(param: ConnectUserDto, body: UpdateUserDto): Promise<User> {
    const ret = await this.prismaService.user.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateMany(
    param: ConnectUserDto[],
    body: UpdateUserDto
  ): Promise<Number> {
    const ret = await this.prismaService.user.updateMany({
      where: {
        OR: [
          ...param.map((p) => {
            return { ...p };
          }),
        ],
      },
      data: { ...body },
    });
    return ret.count;
  }
  async updateAll(body: UpdateUserDto): Promise<Number> {
    const ret = await this.prismaService.user.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async updateAdminOne(
    param: ConnectUserDto,
    body: UpdateUserDto
  ): Promise<User> {
    const ret = await this.prismaService.user.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateAdminMany(
    param: ConnectUserDto[],
    body: UpdateUserDto
  ): Promise<Number> {
    const ret = await this.prismaService.user.updateMany({
      where: {
        OR: [
          ...param.map((p) => {
            return { ...p };
          }),
        ],
      },
      data: { ...body },
    });
    return ret.count;
  }
  async updateAdminAll(body: UpdateUserDto): Promise<Number> {
    const ret = await this.prismaService.user.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async deleteOne(param: ConnectUserDto): Promise<User> {
    const ret = await this.prismaService.user.update({
      where: { ...param },
      data: { deletedAt: new Date() },
    });
    return ret;
  }
  async deleteMany(param: ConnectUserDto[]): Promise<Number> {
    const ret = await this.prismaService.user.updateMany({
      where: {
        OR: [
          ...param.map((p) => {
            return { ...p };
          }),
        ],
      },
      data: { deletedAt: new Date() },
    });
    return ret.count;
  }
  async deleteAll(): Promise<Number> {
    const ret = await this.prismaService.user.updateMany({
      data: { deletedAt: new Date() },
    });
    return ret.count;
  }
  async deleteAdminOne(param: ConnectUserDto): Promise<User> {
    const ret = await this.prismaService.user.delete({
      where: {
        id: param["id"],
      },
    });
    return ret;
  }
  async deleteAdminMany(param: ConnectUserDto[]): Promise<Number> {
    const ret = await this.prismaService.user.deleteMany({
      where: {
        OR: [
          ...param.map((p) => {
            return { ...p };
          }),
        ],
      },
    });
    return ret.count;
  }
  async deleteAdminAll(): Promise<Number> {
    const ret = await this.prismaService.user.deleteMany();
    return ret.count;
  }
}
