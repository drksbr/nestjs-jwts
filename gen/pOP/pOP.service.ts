import { POP } from "./pOP.entity";
import { PrismaService } from "src/shared/services/prisma.service";
import {
  FindPOPDto,
  CreatePOPDto,
  UpdatePOPDto,
  ConnectPOPDto,
} from "./pOP.dto";
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

export class POPService {
  constructor(private prismaService: PrismaService) {}
  async exist(query: FindPOPDto): Promise<Boolean> {
    const ret = await this.prismaService.pOP.findMany({
      where: { ...query },
    });
    return ret.length > 0;
  }
  async findUniq(param: ConnectPOPDto): Promise<POP> {
    const ret = await this.prismaService.pOP.findUnique({
      where: { ...param },
    });
    return ret;
  }
  async findMany(query: FindPOPDto): Promise<POP> {
    const ret = await this.prismaService.pOP.findMany({
      where: { ...query },
    });
    return ret;
  }
  async getAll(): Promise<POP[]> {
    const ret = await this.prismaService.pOP.findMany();
    return ret;
  }
  async createOne(body: CreatePOPDto): Promise<POP> {
    const ret = await this.prismaService.pOP.create({
      data: { ...body },
    });
    return ret;
  }
  async createMany(body: CreatePOPDto[]): Promise<Number> {
    const ret = await this.prismaService.pOP.createMany({
      data: [
        ...body.map((b) => {
          return { ...b };
        }),
      ],
    });
    return ret.count;
  }
  async updateOne(param: ConnectPOPDto, body: UpdatePOPDto): Promise<POP> {
    const ret = await this.prismaService.pOP.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateMany(
    param: ConnectPOPDto[],
    body: UpdatePOPDto
  ): Promise<Number> {
    const ret = await this.prismaService.pOP.updateMany({
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
  async updateAll(body: UpdatePOPDto): Promise<Number> {
    const ret = await this.prismaService.pOP.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async updateAdminOne(param: ConnectPOPDto, body: UpdatePOPDto): Promise<POP> {
    const ret = await this.prismaService.pOP.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateAdminMany(
    param: ConnectPOPDto[],
    body: UpdatePOPDto
  ): Promise<Number> {
    const ret = await this.prismaService.pOP.updateMany({
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
  async updateAdminAll(body: UpdatePOPDto): Promise<Number> {
    const ret = await this.prismaService.pOP.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async deleteOne(param: ConnectPOPDto): Promise<POP> {
    const ret = await this.prismaService.pOP.update({
      where: { ...param },
      data: { deletedAt: new Date() },
    });
    return ret;
  }
  async deleteMany(param: ConnectPOPDto[]): Promise<Number> {
    const ret = await this.prismaService.pOP.updateMany({
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
    const ret = await this.prismaService.pOP.updateMany({
      data: { deletedAt: new Date() },
    });
    return ret.count;
  }
  async deleteAdminOne(param: ConnectPOPDto): Promise<POP> {
    const ret = await this.prismaService.pOP.delete({
      where: {
        id: param["id"],
      },
    });
    return ret;
  }
  async deleteAdminMany(param: ConnectPOPDto[]): Promise<Number> {
    const ret = await this.prismaService.pOP.deleteMany({
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
    const ret = await this.prismaService.pOP.deleteMany();
    return ret.count;
  }
}
