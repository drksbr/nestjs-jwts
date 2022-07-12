import { Rack } from "./rack.entity";
import { PrismaService } from "src/shared/services/prisma.service";
import {
  FindRackDto,
  CreateRackDto,
  UpdateRackDto,
  ConnectRackDto,
} from "./rack.dto";
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

export class RackService {
  constructor(private prismaService: PrismaService) {}
  async exist(query: FindRackDto): Promise<Boolean> {
    const ret = await this.prismaService.rack.findMany({
      where: { ...query },
    });
    return ret.length > 0;
  }
  async findUniq(param: ConnectRackDto): Promise<Rack> {
    const ret = await this.prismaService.rack.findUnique({
      where: { ...param },
    });
    return ret;
  }
  async findMany(query: FindRackDto): Promise<Rack> {
    const ret = await this.prismaService.rack.findMany({
      where: { ...query },
    });
    return ret;
  }
  async getAll(): Promise<Rack[]> {
    const ret = await this.prismaService.rack.findMany();
    return ret;
  }
  async createOne(body: CreateRackDto): Promise<Rack> {
    const ret = await this.prismaService.rack.create({
      data: { ...body },
    });
    return ret;
  }
  async createMany(body: CreateRackDto[]): Promise<Number> {
    const ret = await this.prismaService.rack.createMany({
      data: [
        ...body.map((b) => {
          return { ...b };
        }),
      ],
    });
    return ret.count;
  }
  async updateOne(param: ConnectRackDto, body: UpdateRackDto): Promise<Rack> {
    const ret = await this.prismaService.rack.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateMany(
    param: ConnectRackDto[],
    body: UpdateRackDto
  ): Promise<Number> {
    const ret = await this.prismaService.rack.updateMany({
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
  async updateAll(body: UpdateRackDto): Promise<Number> {
    const ret = await this.prismaService.rack.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async updateAdminOne(
    param: ConnectRackDto,
    body: UpdateRackDto
  ): Promise<Rack> {
    const ret = await this.prismaService.rack.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateAdminMany(
    param: ConnectRackDto[],
    body: UpdateRackDto
  ): Promise<Number> {
    const ret = await this.prismaService.rack.updateMany({
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
  async updateAdminAll(body: UpdateRackDto): Promise<Number> {
    const ret = await this.prismaService.rack.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async deleteOne(param: ConnectRackDto): Promise<Rack> {
    const ret = await this.prismaService.rack.update({
      where: { ...param },
      data: { deletedAt: new Date() },
    });
    return ret;
  }
  async deleteMany(param: ConnectRackDto[]): Promise<Number> {
    const ret = await this.prismaService.rack.updateMany({
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
    const ret = await this.prismaService.rack.updateMany({
      data: { deletedAt: new Date() },
    });
    return ret.count;
  }
  async deleteAdminOne(param: ConnectRackDto): Promise<Rack> {
    const ret = await this.prismaService.rack.delete({
      where: {
        id: param["id"],
      },
    });
    return ret;
  }
  async deleteAdminMany(param: ConnectRackDto[]): Promise<Number> {
    const ret = await this.prismaService.rack.deleteMany({
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
    const ret = await this.prismaService.rack.deleteMany();
    return ret.count;
  }
}
