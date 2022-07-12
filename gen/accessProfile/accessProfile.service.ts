import { AccessProfile } from "./accessProfile.entity";
import { PrismaService } from "src/shared/services/prisma.service";
import {
  FindAccessProfileDto,
  CreateAccessProfileDto,
  UpdateAccessProfileDto,
  ConnectAccessProfileDto,
} from "./accessProfile.dto";
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

export class AccessProfileService {
  constructor(private prismaService: PrismaService) {}
  async exist(query: FindAccessProfileDto): Promise<Boolean> {
    const ret = await this.prismaService.accessProfile.findMany({
      where: { ...query },
    });
    return ret.length > 0;
  }
  async findUniq(param: ConnectAccessProfileDto): Promise<AccessProfile> {
    const ret = await this.prismaService.accessProfile.findUnique({
      where: { ...param },
    });
    return ret;
  }
  async findMany(query: FindAccessProfileDto): Promise<AccessProfile> {
    const ret = await this.prismaService.accessProfile.findMany({
      where: { ...query },
    });
    return ret;
  }
  async getAll(): Promise<AccessProfile[]> {
    const ret = await this.prismaService.accessProfile.findMany();
    return ret;
  }
  async createOne(body: CreateAccessProfileDto): Promise<AccessProfile> {
    const ret = await this.prismaService.accessProfile.create({
      data: { ...body },
    });
    return ret;
  }
  async createMany(body: CreateAccessProfileDto[]): Promise<Number> {
    const ret = await this.prismaService.accessProfile.createMany({
      data: [
        ...body.map((b) => {
          return { ...b };
        }),
      ],
    });
    return ret.count;
  }
  async updateOne(
    param: ConnectAccessProfileDto,
    body: UpdateAccessProfileDto
  ): Promise<AccessProfile> {
    const ret = await this.prismaService.accessProfile.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateMany(
    param: ConnectAccessProfileDto[],
    body: UpdateAccessProfileDto
  ): Promise<Number> {
    const ret = await this.prismaService.accessProfile.updateMany({
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
  async updateAll(body: UpdateAccessProfileDto): Promise<Number> {
    const ret = await this.prismaService.accessProfile.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async updateAdminOne(
    param: ConnectAccessProfileDto,
    body: UpdateAccessProfileDto
  ): Promise<AccessProfile> {
    const ret = await this.prismaService.accessProfile.update({
      where: { ...param },
      data: { ...body },
    });
    return ret;
  }
  async updateAdminMany(
    param: ConnectAccessProfileDto[],
    body: UpdateAccessProfileDto
  ): Promise<Number> {
    const ret = await this.prismaService.accessProfile.updateMany({
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
  async updateAdminAll(body: UpdateAccessProfileDto): Promise<Number> {
    const ret = await this.prismaService.accessProfile.updateMany({
      data: { ...body },
    });
    return ret.count;
  }
  async deleteOne(param: ConnectAccessProfileDto): Promise<AccessProfile> {
    const ret = await this.prismaService.accessProfile.update({
      where: { ...param },
      data: { deletedAt: new Date() },
    });
    return ret;
  }
  async deleteMany(param: ConnectAccessProfileDto[]): Promise<Number> {
    const ret = await this.prismaService.accessProfile.updateMany({
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
    const ret = await this.prismaService.accessProfile.updateMany({
      data: { deletedAt: new Date() },
    });
    return ret.count;
  }
  async deleteAdminOne(param: ConnectAccessProfileDto): Promise<AccessProfile> {
    const ret = await this.prismaService.accessProfile.delete({
      where: {
        id: param["id"],
      },
    });
    return ret;
  }
  async deleteAdminMany(param: ConnectAccessProfileDto[]): Promise<Number> {
    const ret = await this.prismaService.accessProfile.deleteMany({
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
    const ret = await this.prismaService.accessProfile.deleteMany();
    return ret.count;
  }
}
