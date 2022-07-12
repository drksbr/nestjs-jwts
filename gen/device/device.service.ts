import { Device } from "./device.entity";
import { PrismaService } from "src/shared/services/prisma.service";
import {
  FindDeviceDto,
  CreateDeviceDto,
  UpdateDeviceDto,
  ConnectDeviceDto,
} from "./device.dto";
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

export class DeviceService {
  constructor(private prismaService: PrismaService) {}
  async exist(query: FindDeviceDto): Promise<Boolean> {
    const ret = await this.prismaService.device.findMany({
      where: { ...query },
    });
    return ret.length > 0;
  }
  async findUniq(param: ConnectDeviceDto): Promise<Device> {
    const ret = await this.prismaService.device.findUnique({
      where: { ...param },
    });
    return ret;
  }
  async findMany(query: FindDeviceDto): Promise<Device> {
    const ret = await this.prismaService.device.findMany({
      where: { ...query },
    });
    return ret;
  }
  async getAll(): Promise<Device[]> {
    const ret = await this.prismaService.device.findMany();
    return ret;
  }
  async createOne(body: CreateDeviceDto): Promise<Device> {
    const ret = await this.prismaService.device.create({
      data: { ...body },
    });
    return ret;
  }
  async createMany(body: CreateDeviceDto[]): Promise<Number> {
    const ret = await this.prismaService.device.createMany({
      data: [
        ...body.map((b) => {
          return { ...b };
        }),
      ],
    });
    return ret.count;
  }
  async updateOne(
    param: ConnectDeviceDto,
    body: UpdateDeviceDto
  ): Promise<Device> {
    const ret = await this.prismaService.device.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateMany(
    param: ConnectDeviceDto[],
    body: UpdateDeviceDto
  ): Promise<Number> {
    const ret = await this.prismaService.device.updateMany({
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
  async updateAll(body: UpdateDeviceDto): Promise<Number> {
    const ret = await this.prismaService.device.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async updateAdminOne(
    param: ConnectDeviceDto,
    body: UpdateDeviceDto
  ): Promise<Device> {
    const ret = await this.prismaService.device.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateAdminMany(
    param: ConnectDeviceDto[],
    body: UpdateDeviceDto
  ): Promise<Number> {
    const ret = await this.prismaService.device.updateMany({
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
  async updateAdminAll(body: UpdateDeviceDto): Promise<Number> {
    const ret = await this.prismaService.device.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async deleteOne(param: ConnectDeviceDto): Promise<Device> {
    const ret = await this.prismaService.device.update({
      where: { ...param },
      data: { deletedAt: new Date() },
    });
    return ret;
  }
  async deleteMany(param: ConnectDeviceDto[]): Promise<Number> {
    const ret = await this.prismaService.device.updateMany({
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
    const ret = await this.prismaService.device.updateMany({
      data: { deletedAt: new Date() },
    });
    return ret.count;
  }
  async deleteAdminOne(param: ConnectDeviceDto): Promise<Device> {
    const ret = await this.prismaService.device.delete({
      where: {
        id: param["id"],
      },
    });
    return ret;
  }
  async deleteAdminMany(param: ConnectDeviceDto[]): Promise<Number> {
    const ret = await this.prismaService.device.deleteMany({
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
    const ret = await this.prismaService.device.deleteMany();
    return ret.count;
  }
}
