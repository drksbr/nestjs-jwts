import { AccessProfile } from "./accessProfile.entity";
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
import { AccessProfileService } from "./accessProfile.service";

export class AccessProfileController {
  constructor(private accessProfileService: AccessProfileService) {}
  /********************************************************************
   *                            exist
   ********************************************************************/
  @Get("exist")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "AccessProfile",
    type: Boolean,
  })
  @ApiQuery({
    type: FindAccessProfileDto,
  })
  async exist(@Query() query: FindAccessProfileDto): Promise<Boolean> {
    return await this.accessProfileService.exist(query);
  }
  /********************************************************************
   *                            findUniq
   ********************************************************************/
  @Get("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "accessProfile",
    type: AccessProfile,
  })
  async findUniq(
    @Param() param: ConnectAccessProfileDto
  ): Promise<AccessProfile> {
    return await this.accessProfileService.findUniq(param);
  }
  /********************************************************************
   *                            findMany
   ********************************************************************/
  @Get("many")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "AccessProfile",
    type: AccessProfile,
  })
  @ApiQuery({
    type: FindAccessProfileDto,
  })
  async findMany(@Query() query: FindAccessProfileDto): Promise<AccessProfile> {
    return await this.accessProfileService.findMany(query);
  }
  /********************************************************************
   *                            getAll
   ********************************************************************/
  @Get("all")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "CreateAccessProfileDto",
    type: [AccessProfile],
  })
  async getAll(): Promise<AccessProfile[]> {
    return await this.accessProfileService.getAll();
  }
  /********************************************************************
   *                            createOne
   ********************************************************************/
  @Post("")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "ConnectAccessProfileDto",
    type: AccessProfile,
  })
  @ApiBody({
    type: CreateAccessProfileDto,
  })
  async createOne(
    @Body() body: CreateAccessProfileDto
  ): Promise<AccessProfile> {
    return await this.accessProfileService.createOne(body);
  }
  /********************************************************************
   *                            createMany
   ********************************************************************/
  @Post("many")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiBody({
    isArray: true,
    type: CreateAccessProfileDto,
  })
  async createMany(@Body() body: CreateAccessProfileDto[]): Promise<Number> {
    return await this.accessProfileService.createMany(body);
  }
  /********************************************************************
   *                            updateOne
   ********************************************************************/
  @Patch("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateAccessProfileDto",
    type: AccessProfile,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  @ApiBody({
    type: UpdateAccessProfileDto,
  })
  async updateOne(
    @Param() param: ConnectAccessProfileDto,
    @Body() body: UpdateAccessProfileDto
  ): Promise<AccessProfile> {
    return await this.accessProfileService.updateOne(param, body);
  }
  /********************************************************************
   *                            updateMany
   ********************************************************************/
  @Patch("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  @ApiBody({
    type: UpdateAccessProfileDto,
  })
  async updateMany(
    @Param() param: ConnectAccessProfileDto[],
    @Body() body: UpdateAccessProfileDto
  ): Promise<Number> {
    return await this.accessProfileService.updateMany(param, body);
  }
  /********************************************************************
   *                            updateAll
   ********************************************************************/
  @Patch("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  @ApiBody({
    type: UpdateAccessProfileDto,
  })
  async updateAll(@Body() body: UpdateAccessProfileDto): Promise<Number> {
    return await this.accessProfileService.updateAll(body);
  }
  /********************************************************************
   *                            updateAdminOne
   ********************************************************************/
  @Put("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateAccessProfileDto",
    type: AccessProfile,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  @ApiBody({
    type: UpdateAccessProfileDto,
  })
  async updateAdminOne(
    @Param() param: ConnectAccessProfileDto,
    @Body() body: UpdateAccessProfileDto
  ): Promise<AccessProfile> {
    return await this.accessProfileService.updateAdminOne(param, body);
  }
  /********************************************************************
   *                            updateAdminMany
   ********************************************************************/
  @Put("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  @ApiBody({
    type: UpdateAccessProfileDto,
  })
  async updateAdminMany(
    @Param() param: ConnectAccessProfileDto[],
    @Body() body: UpdateAccessProfileDto
  ): Promise<Number> {
    return await this.accessProfileService.updateAdminMany(param, body);
  }
  /********************************************************************
   *                            updateAdminAll
   ********************************************************************/
  @Put("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  @ApiBody({
    type: UpdateAccessProfileDto,
  })
  async updateAdminAll(@Body() body: UpdateAccessProfileDto): Promise<Number> {
    return await this.accessProfileService.updateAdminAll(body);
  }
  /********************************************************************
   *                            deleteOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateAccessProfileDto",
    type: AccessProfile,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteOne(
    @Param() param: ConnectAccessProfileDto
  ): Promise<AccessProfile> {
    return await this.accessProfileService.deleteOne(param);
  }
  /********************************************************************
   *                            deleteMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteMany(@Param() param: ConnectAccessProfileDto[]): Promise<Number> {
    return await this.accessProfileService.deleteMany(param);
  }
  /********************************************************************
   *                            deleteAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteAll(): Promise<Number> {
    return await this.accessProfileService.deleteAll();
  }
  /********************************************************************
   *                            deleteAdminOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateAccessProfileDto",
    type: AccessProfile,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteAdminOne(
    @Param() param: ConnectAccessProfileDto
  ): Promise<AccessProfile> {
    return await this.accessProfileService.deleteAdminOne(param);
  }
  /********************************************************************
   *                            deleteAdminMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteAdminMany(
    @Param() param: ConnectAccessProfileDto[]
  ): Promise<Number> {
    return await this.accessProfileService.deleteAdminMany(param);
  }
  /********************************************************************
   *                            deleteAdminAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindAccessProfileDto",
    type: Number,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteAdminAll(): Promise<Number> {
    return await this.accessProfileService.deleteAdminAll();
  }
}
