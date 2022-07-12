import { Proxy } from "./proxy.entity";
import { PrismaService } from "src/shared/services/prisma.service";
import {
  FindProxyDto,
  CreateProxyDto,
  UpdateProxyDto,
  ConnectProxyDto,
} from "./proxy.dto";
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

export class ProxyService {
  constructor(private prismaService: PrismaService) {}
  async exist(query: FindProxyDto): Promise<Boolean> {
    const ret = await this.prismaService.proxy.findMany({
      where: { ...query },
    });
    return ret.length > 0;
  }
  async findUniq(param: ConnectProxyDto): Promise<Proxy> {
    const ret = await this.prismaService.proxy.findUnique({
      where: { ...param },
    });
    return ret;
  }
  async findMany(query: FindProxyDto): Promise<Proxy> {
    const ret = await this.prismaService.proxy.findMany({
      where: { ...query },
    });
    return ret;
  }
  async getAll(): Promise<Proxy[]> {
    const ret = await this.prismaService.proxy.findMany();
    return ret;
  }
  async createOne(body: CreateProxyDto): Promise<Proxy> {
    const ret = await this.prismaService.proxy.create({
      data: { ...body },
    });
    return ret;
  }
  async createMany(body: CreateProxyDto[]): Promise<Number> {
    const ret = await this.prismaService.proxy.createMany({
      data: [
        ...body.map((b) => {
          return { ...b };
        }),
      ],
    });
    return ret.count;
  }
  async updateOne(
    param: ConnectProxyDto,
    body: UpdateProxyDto
  ): Promise<Proxy> {
    const ret = await this.prismaService.proxy.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateMany(
    param: ConnectProxyDto[],
    body: UpdateProxyDto
  ): Promise<Number> {
    const ret = await this.prismaService.proxy.updateMany({
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
  async updateAll(body: UpdateProxyDto): Promise<Number> {
    const ret = await this.prismaService.proxy.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async updateAdminOne(
    param: ConnectProxyDto,
    body: UpdateProxyDto
  ): Promise<Proxy> {
    const ret = await this.prismaService.proxy.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateAdminMany(
    param: ConnectProxyDto[],
    body: UpdateProxyDto
  ): Promise<Number> {
    const ret = await this.prismaService.proxy.updateMany({
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
  async updateAdminAll(body: UpdateProxyDto): Promise<Number> {
    const ret = await this.prismaService.proxy.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async deleteOne(param: ConnectProxyDto): Promise<Proxy> {
    const ret = await this.prismaService.proxy.update({
      where: { ...param },
      data: { deletedAt: new Date() },
    });
    return ret;
  }
  async deleteMany(param: ConnectProxyDto[]): Promise<Number> {
    const ret = await this.prismaService.proxy.updateMany({
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
    const ret = await this.prismaService.proxy.updateMany({
      data: { deletedAt: new Date() },
    });
    return ret.count;
  }
  async deleteAdminOne(param: ConnectProxyDto): Promise<Proxy> {
    const ret = await this.prismaService.proxy.delete({
      where: {
        id: param["id"],
      },
    });
    return ret;
  }
  async deleteAdminMany(param: ConnectProxyDto[]): Promise<Number> {
    const ret = await this.prismaService.proxy.deleteMany({
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
    const ret = await this.prismaService.proxy.deleteMany();
    return ret.count;
  }
}
