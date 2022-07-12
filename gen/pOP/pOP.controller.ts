import { POP } from "./pOP.entity";
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
import { POPService } from "./pOP.service";

export class POPController {
  constructor(private pOPService: POPService) {}
  /********************************************************************
   *                            exist
   ********************************************************************/
  @Get("exist")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "POP",
    type: Boolean,
  })
  @ApiQuery({
    type: FindPOPDto,
  })
  async exist(@Query() query: FindPOPDto): Promise<Boolean> {
    return await this.pOPService.exist(query);
  }
  /********************************************************************
   *                            findUniq
   ********************************************************************/
  @Get("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "pOP",
    type: POP,
  })
  async findUniq(@Param() param: ConnectPOPDto): Promise<POP> {
    return await this.pOPService.findUniq(param);
  }
  /********************************************************************
   *                            findMany
   ********************************************************************/
  @Get("many")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "POP",
    type: POP,
  })
  @ApiQuery({
    type: FindPOPDto,
  })
  async findMany(@Query() query: FindPOPDto): Promise<POP> {
    return await this.pOPService.findMany(query);
  }
  /********************************************************************
   *                            getAll
   ********************************************************************/
  @Get("all")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "CreatePOPDto",
    type: [POP],
  })
  async getAll(): Promise<POP[]> {
    return await this.pOPService.getAll();
  }
  /********************************************************************
   *                            createOne
   ********************************************************************/
  @Post("")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "ConnectPOPDto",
    type: POP,
  })
  @ApiBody({
    type: CreatePOPDto,
  })
  async createOne(@Body() body: CreatePOPDto): Promise<POP> {
    return await this.pOPService.createOne(body);
  }
  /********************************************************************
   *                            createMany
   ********************************************************************/
  @Post("many")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "FindPOPDto",
    type: Number,
  })
  @ApiBody({
    isArray: true,
    type: CreatePOPDto,
  })
  async createMany(@Body() body: CreatePOPDto[]): Promise<Number> {
    return await this.pOPService.createMany(body);
  }
  /********************************************************************
   *                            updateOne
   ********************************************************************/
  @Patch("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdatePOPDto",
    type: POP,
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
    type: UpdatePOPDto,
  })
  async updateOne(
    @Param() param: ConnectPOPDto,
    @Body() body: UpdatePOPDto
  ): Promise<POP> {
    return await this.pOPService.updateOne(param, body);
  }
  /********************************************************************
   *                            updateMany
   ********************************************************************/
  @Patch("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindPOPDto",
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
    type: UpdatePOPDto,
  })
  async updateMany(
    @Param() param: ConnectPOPDto[],
    @Body() body: UpdatePOPDto
  ): Promise<Number> {
    return await this.pOPService.updateMany(param, body);
  }
  /********************************************************************
   *                            updateAll
   ********************************************************************/
  @Patch("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindPOPDto",
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
    type: UpdatePOPDto,
  })
  async updateAll(@Body() body: UpdatePOPDto): Promise<Number> {
    return await this.pOPService.updateAll(body);
  }
  /********************************************************************
   *                            updateAdminOne
   ********************************************************************/
  @Put("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdatePOPDto",
    type: POP,
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
    type: UpdatePOPDto,
  })
  async updateAdminOne(
    @Param() param: ConnectPOPDto,
    @Body() body: UpdatePOPDto
  ): Promise<POP> {
    return await this.pOPService.updateAdminOne(param, body);
  }
  /********************************************************************
   *                            updateAdminMany
   ********************************************************************/
  @Put("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindPOPDto",
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
    type: UpdatePOPDto,
  })
  async updateAdminMany(
    @Param() param: ConnectPOPDto[],
    @Body() body: UpdatePOPDto
  ): Promise<Number> {
    return await this.pOPService.updateAdminMany(param, body);
  }
  /********************************************************************
   *                            updateAdminAll
   ********************************************************************/
  @Put("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindPOPDto",
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
    type: UpdatePOPDto,
  })
  async updateAdminAll(@Body() body: UpdatePOPDto): Promise<Number> {
    return await this.pOPService.updateAdminAll(body);
  }
  /********************************************************************
   *                            deleteOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdatePOPDto",
    type: POP,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteOne(@Param() param: ConnectPOPDto): Promise<POP> {
    return await this.pOPService.deleteOne(param);
  }
  /********************************************************************
   *                            deleteMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindPOPDto",
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
  async deleteMany(@Param() param: ConnectPOPDto[]): Promise<Number> {
    return await this.pOPService.deleteMany(param);
  }
  /********************************************************************
   *                            deleteAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindPOPDto",
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
    return await this.pOPService.deleteAll();
  }
  /********************************************************************
   *                            deleteAdminOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdatePOPDto",
    type: POP,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteAdminOne(@Param() param: ConnectPOPDto): Promise<POP> {
    return await this.pOPService.deleteAdminOne(param);
  }
  /********************************************************************
   *                            deleteAdminMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindPOPDto",
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
  async deleteAdminMany(@Param() param: ConnectPOPDto[]): Promise<Number> {
    return await this.pOPService.deleteAdminMany(param);
  }
  /********************************************************************
   *                            deleteAdminAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindPOPDto",
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
    return await this.pOPService.deleteAdminAll();
  }
}
