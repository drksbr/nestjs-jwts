import { Client } from "./client.entity";
import { PrismaService } from "src/shared/services/prisma.service";
import {
  FindClientDto,
  CreateClientDto,
  UpdateClientDto,
  ConnectClientDto,
} from "./client.dto";
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

export class ClientService {
  constructor(private prismaService: PrismaService) {}
  async exist(query: FindClientDto): Promise<Boolean> {
    const ret = await this.prismaService.client.findMany({
      where: { ...query },
    });
    return ret.length > 0;
  }
  async findUniq(param: ConnectClientDto): Promise<Client> {
    const ret = await this.prismaService.client.findUnique({
      where: { ...param },
    });
    return ret;
  }
  async findMany(query: FindClientDto): Promise<Client> {
    const ret = await this.prismaService.client.findMany({
      where: { ...query },
    });
    return ret;
  }
  async getAll(): Promise<Client[]> {
    const ret = await this.prismaService.client.findMany();
    return ret;
  }
  async createOne(body: CreateClientDto): Promise<Client> {
    const ret = await this.prismaService.client.create({
      data: { ...body },
    });
    return ret;
  }
  async createMany(body: CreateClientDto[]): Promise<Number> {
    const ret = await this.prismaService.client.createMany({
      data: [
        ...body.map((b) => {
          return { ...b };
        }),
      ],
    });
    return ret.count;
  }
  async updateOne(
    param: ConnectClientDto,
    body: UpdateClientDto
  ): Promise<Client> {
    const ret = await this.prismaService.client.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateMany(
    param: ConnectClientDto[],
    body: UpdateClientDto
  ): Promise<Number> {
    const ret = await this.prismaService.client.updateMany({
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
  async updateAll(body: UpdateClientDto): Promise<Number> {
    const ret = await this.prismaService.client.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async updateAdminOne(
    param: ConnectClientDto,
    body: UpdateClientDto
  ): Promise<Client> {
    const ret = await this.prismaService.client.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateAdminMany(
    param: ConnectClientDto[],
    body: UpdateClientDto
  ): Promise<Number> {
    const ret = await this.prismaService.client.updateMany({
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
  async updateAdminAll(body: UpdateClientDto): Promise<Number> {
    const ret = await this.prismaService.client.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async deleteOne(param: ConnectClientDto): Promise<Client> {
    const ret = await this.prismaService.client.update({
      where: { ...param },
      data: { deletedAt: new Date() },
    });
    return ret;
  }
  async deleteMany(param: ConnectClientDto[]): Promise<Number> {
    const ret = await this.prismaService.client.updateMany({
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
    const ret = await this.prismaService.client.updateMany({
      data: { deletedAt: new Date() },
    });
    return ret.count;
  }
  async deleteAdminOne(param: ConnectClientDto): Promise<Client> {
    const ret = await this.prismaService.client.delete({
      where: {
        id: param["id"],
      },
    });
    return ret;
  }
  async deleteAdminMany(param: ConnectClientDto[]): Promise<Number> {
    const ret = await this.prismaService.client.deleteMany({
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
    const ret = await this.prismaService.client.deleteMany();
    return ret.count;
  }
}
