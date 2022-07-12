import { Rack } from "./rack.entity";
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
import { RackService } from "./rack.service";

export class RackController {
  constructor(private rackService: RackService) {}
  /********************************************************************
   *                            exist
   ********************************************************************/
  @Get("exist")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "Rack",
    type: Boolean,
  })
  @ApiQuery({
    type: FindRackDto,
  })
  async exist(@Query() query: FindRackDto): Promise<Boolean> {
    return await this.rackService.exist(query);
  }
  /********************************************************************
   *                            findUniq
   ********************************************************************/
  @Get("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "rack",
    type: Rack,
  })
  async findUniq(@Param() param: ConnectRackDto): Promise<Rack> {
    return await this.rackService.findUniq(param);
  }
  /********************************************************************
   *                            findMany
   ********************************************************************/
  @Get("many")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "Rack",
    type: Rack,
  })
  @ApiQuery({
    type: FindRackDto,
  })
  async findMany(@Query() query: FindRackDto): Promise<Rack> {
    return await this.rackService.findMany(query);
  }
  /********************************************************************
   *                            getAll
   ********************************************************************/
  @Get("all")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "CreateRackDto",
    type: [Rack],
  })
  async getAll(): Promise<Rack[]> {
    return await this.rackService.getAll();
  }
  /********************************************************************
   *                            createOne
   ********************************************************************/
  @Post("")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "ConnectRackDto",
    type: Rack,
  })
  @ApiBody({
    type: CreateRackDto,
  })
  async createOne(@Body() body: CreateRackDto): Promise<Rack> {
    return await this.rackService.createOne(body);
  }
  /********************************************************************
   *                            createMany
   ********************************************************************/
  @Post("many")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "FindRackDto",
    type: Number,
  })
  @ApiBody({
    isArray: true,
    type: CreateRackDto,
  })
  async createMany(@Body() body: CreateRackDto[]): Promise<Number> {
    return await this.rackService.createMany(body);
  }
  /********************************************************************
   *                            updateOne
   ********************************************************************/
  @Patch("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateRackDto",
    type: Rack,
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
    type: UpdateRackDto,
  })
  async updateOne(
    @Param() param: ConnectRackDto,
    @Body() body: UpdateRackDto
  ): Promise<Rack> {
    return await this.rackService.updateOne(param, body);
  }
  /********************************************************************
   *                            updateMany
   ********************************************************************/
  @Patch("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindRackDto",
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
    type: UpdateRackDto,
  })
  async updateMany(
    @Param() param: ConnectRackDto[],
    @Body() body: UpdateRackDto
  ): Promise<Number> {
    return await this.rackService.updateMany(param, body);
  }
  /********************************************************************
   *                            updateAll
   ********************************************************************/
  @Patch("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindRackDto",
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
    type: UpdateRackDto,
  })
  async updateAll(@Body() body: UpdateRackDto): Promise<Number> {
    return await this.rackService.updateAll(body);
  }
  /********************************************************************
   *                            updateAdminOne
   ********************************************************************/
  @Put("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateRackDto",
    type: Rack,
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
    type: UpdateRackDto,
  })
  async updateAdminOne(
    @Param() param: ConnectRackDto,
    @Body() body: UpdateRackDto
  ): Promise<Rack> {
    return await this.rackService.updateAdminOne(param, body);
  }
  /********************************************************************
   *                            updateAdminMany
   ********************************************************************/
  @Put("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindRackDto",
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
    type: UpdateRackDto,
  })
  async updateAdminMany(
    @Param() param: ConnectRackDto[],
    @Body() body: UpdateRackDto
  ): Promise<Number> {
    return await this.rackService.updateAdminMany(param, body);
  }
  /********************************************************************
   *                            updateAdminAll
   ********************************************************************/
  @Put("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindRackDto",
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
    type: UpdateRackDto,
  })
  async updateAdminAll(@Body() body: UpdateRackDto): Promise<Number> {
    return await this.rackService.updateAdminAll(body);
  }
  /********************************************************************
   *                            deleteOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateRackDto",
    type: Rack,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteOne(@Param() param: ConnectRackDto): Promise<Rack> {
    return await this.rackService.deleteOne(param);
  }
  /********************************************************************
   *                            deleteMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindRackDto",
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
  async deleteMany(@Param() param: ConnectRackDto[]): Promise<Number> {
    return await this.rackService.deleteMany(param);
  }
  /********************************************************************
   *                            deleteAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindRackDto",
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
    return await this.rackService.deleteAll();
  }
  /********************************************************************
   *                            deleteAdminOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateRackDto",
    type: Rack,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteAdminOne(@Param() param: ConnectRackDto): Promise<Rack> {
    return await this.rackService.deleteAdminOne(param);
  }
  /********************************************************************
   *                            deleteAdminMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindRackDto",
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
  async deleteAdminMany(@Param() param: ConnectRackDto[]): Promise<Number> {
    return await this.rackService.deleteAdminMany(param);
  }
  /********************************************************************
   *                            deleteAdminAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindRackDto",
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
    return await this.rackService.deleteAdminAll();
  }
}
