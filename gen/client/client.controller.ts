import { Client } from "./client.entity";
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
import { ClientService } from "./client.service";

export class ClientController {
  constructor(private clientService: ClientService) {}
  /********************************************************************
   *                            exist
   ********************************************************************/
  @Get("exist")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "Client",
    type: Boolean,
  })
  @ApiQuery({
    type: FindClientDto,
  })
  async exist(@Query() query: FindClientDto): Promise<Boolean> {
    return await this.clientService.exist(query);
  }
  /********************************************************************
   *                            findUniq
   ********************************************************************/
  @Get("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "client",
    type: Client,
  })
  async findUniq(@Param() param: ConnectClientDto): Promise<Client> {
    return await this.clientService.findUniq(param);
  }
  /********************************************************************
   *                            findMany
   ********************************************************************/
  @Get("many")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "Client",
    type: Client,
  })
  @ApiQuery({
    type: FindClientDto,
  })
  async findMany(@Query() query: FindClientDto): Promise<Client> {
    return await this.clientService.findMany(query);
  }
  /********************************************************************
   *                            getAll
   ********************************************************************/
  @Get("all")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "CreateClientDto",
    type: [Client],
  })
  async getAll(): Promise<Client[]> {
    return await this.clientService.getAll();
  }
  /********************************************************************
   *                            createOne
   ********************************************************************/
  @Post("")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "ConnectClientDto",
    type: Client,
  })
  @ApiBody({
    type: CreateClientDto,
  })
  async createOne(@Body() body: CreateClientDto): Promise<Client> {
    return await this.clientService.createOne(body);
  }
  /********************************************************************
   *                            createMany
   ********************************************************************/
  @Post("many")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "FindClientDto",
    type: Number,
  })
  @ApiBody({
    isArray: true,
    type: CreateClientDto,
  })
  async createMany(@Body() body: CreateClientDto[]): Promise<Number> {
    return await this.clientService.createMany(body);
  }
  /********************************************************************
   *                            updateOne
   ********************************************************************/
  @Patch("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateClientDto",
    type: Client,
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
    type: UpdateClientDto,
  })
  async updateOne(
    @Param() param: ConnectClientDto,
    @Body() body: UpdateClientDto
  ): Promise<Client> {
    return await this.clientService.updateOne(param, body);
  }
  /********************************************************************
   *                            updateMany
   ********************************************************************/
  @Patch("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindClientDto",
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
    type: UpdateClientDto,
  })
  async updateMany(
    @Param() param: ConnectClientDto[],
    @Body() body: UpdateClientDto
  ): Promise<Number> {
    return await this.clientService.updateMany(param, body);
  }
  /********************************************************************
   *                            updateAll
   ********************************************************************/
  @Patch("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindClientDto",
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
    type: UpdateClientDto,
  })
  async updateAll(@Body() body: UpdateClientDto): Promise<Number> {
    return await this.clientService.updateAll(body);
  }
  /********************************************************************
   *                            updateAdminOne
   ********************************************************************/
  @Put("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateClientDto",
    type: Client,
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
    type: UpdateClientDto,
  })
  async updateAdminOne(
    @Param() param: ConnectClientDto,
    @Body() body: UpdateClientDto
  ): Promise<Client> {
    return await this.clientService.updateAdminOne(param, body);
  }
  /********************************************************************
   *                            updateAdminMany
   ********************************************************************/
  @Put("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindClientDto",
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
    type: UpdateClientDto,
  })
  async updateAdminMany(
    @Param() param: ConnectClientDto[],
    @Body() body: UpdateClientDto
  ): Promise<Number> {
    return await this.clientService.updateAdminMany(param, body);
  }
  /********************************************************************
   *                            updateAdminAll
   ********************************************************************/
  @Put("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindClientDto",
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
    type: UpdateClientDto,
  })
  async updateAdminAll(@Body() body: UpdateClientDto): Promise<Number> {
    return await this.clientService.updateAdminAll(body);
  }
  /********************************************************************
   *                            deleteOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateClientDto",
    type: Client,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteOne(@Param() param: ConnectClientDto): Promise<Client> {
    return await this.clientService.deleteOne(param);
  }
  /********************************************************************
   *                            deleteMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindClientDto",
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
  async deleteMany(@Param() param: ConnectClientDto[]): Promise<Number> {
    return await this.clientService.deleteMany(param);
  }
  /********************************************************************
   *                            deleteAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindClientDto",
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
    return await this.clientService.deleteAll();
  }
  /********************************************************************
   *                            deleteAdminOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateClientDto",
    type: Client,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteAdminOne(@Param() param: ConnectClientDto): Promise<Client> {
    return await this.clientService.deleteAdminOne(param);
  }
  /********************************************************************
   *                            deleteAdminMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindClientDto",
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
  async deleteAdminMany(@Param() param: ConnectClientDto[]): Promise<Number> {
    return await this.clientService.deleteAdminMany(param);
  }
  /********************************************************************
   *                            deleteAdminAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindClientDto",
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
    return await this.clientService.deleteAdminAll();
  }
}
