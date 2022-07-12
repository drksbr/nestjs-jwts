import { User } from "./user.entity";
import {
  FindUserDto,
  CreateUserDto,
  UpdateUserDto,
  ConnectUserDto,
} from "./user.dto";
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
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService) {}
  /********************************************************************
   *                            exist
   ********************************************************************/
  @Get("exist")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "User",
    type: Boolean,
  })
  @ApiQuery({
    type: FindUserDto,
  })
  async exist(@Query() query: FindUserDto): Promise<Boolean> {
    return await this.userService.exist(query);
  }
  /********************************************************************
   *                            findUniq
   ********************************************************************/
  @Get("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "user",
    type: User,
  })
  async findUniq(@Param() param: ConnectUserDto): Promise<User> {
    return await this.userService.findUniq(param);
  }
  /********************************************************************
   *                            findMany
   ********************************************************************/
  @Get("many")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "User",
    type: User,
  })
  @ApiQuery({
    type: FindUserDto,
  })
  async findMany(@Query() query: FindUserDto): Promise<User> {
    return await this.userService.findMany(query);
  }
  /********************************************************************
   *                            getAll
   ********************************************************************/
  @Get("all")
  @ApiOperation({})
  @ApiResponse({
    status: 200,
    description: "CreateUserDto",
    type: [User],
  })
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }
  /********************************************************************
   *                            createOne
   ********************************************************************/
  @Post("")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "ConnectUserDto",
    type: User,
  })
  @ApiBody({
    type: CreateUserDto,
  })
  async createOne(@Body() body: CreateUserDto): Promise<User> {
    return await this.userService.createOne(body);
  }
  /********************************************************************
   *                            createMany
   ********************************************************************/
  @Post("many")
  @ApiOperation({})
  @ApiResponse({
    status: 201,
    description: "FindUserDto",
    type: Number,
  })
  @ApiBody({
    isArray: true,
    type: CreateUserDto,
  })
  async createMany(@Body() body: CreateUserDto[]): Promise<Number> {
    return await this.userService.createMany(body);
  }
  /********************************************************************
   *                            updateOne
   ********************************************************************/
  @Patch("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateUserDto",
    type: User,
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
    type: UpdateUserDto,
  })
  async updateOne(
    @Param() param: ConnectUserDto,
    @Body() body: UpdateUserDto
  ): Promise<User> {
    return await this.userService.updateOne(param, body);
  }
  /********************************************************************
   *                            updateMany
   ********************************************************************/
  @Patch("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindUserDto",
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
    type: UpdateUserDto,
  })
  async updateMany(
    @Param() param: ConnectUserDto[],
    @Body() body: UpdateUserDto
  ): Promise<Number> {
    return await this.userService.updateMany(param, body);
  }
  /********************************************************************
   *                            updateAll
   ********************************************************************/
  @Patch("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindUserDto",
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
    type: UpdateUserDto,
  })
  async updateAll(@Body() body: UpdateUserDto): Promise<Number> {
    return await this.userService.updateAll(body);
  }
  /********************************************************************
   *                            updateAdminOne
   ********************************************************************/
  @Put("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateUserDto",
    type: User,
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
    type: UpdateUserDto,
  })
  async updateAdminOne(
    @Param() param: ConnectUserDto,
    @Body() body: UpdateUserDto
  ): Promise<User> {
    return await this.userService.updateAdminOne(param, body);
  }
  /********************************************************************
   *                            updateAdminMany
   ********************************************************************/
  @Put("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindUserDto",
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
    type: UpdateUserDto,
  })
  async updateAdminMany(
    @Param() param: ConnectUserDto[],
    @Body() body: UpdateUserDto
  ): Promise<Number> {
    return await this.userService.updateAdminMany(param, body);
  }
  /********************************************************************
   *                            updateAdminAll
   ********************************************************************/
  @Put("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindUserDto",
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
    type: UpdateUserDto,
  })
  async updateAdminAll(@Body() body: UpdateUserDto): Promise<Number> {
    return await this.userService.updateAdminAll(body);
  }
  /********************************************************************
   *                            deleteOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateUserDto",
    type: User,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteOne(@Param() param: ConnectUserDto): Promise<User> {
    return await this.userService.deleteOne(param);
  }
  /********************************************************************
   *                            deleteMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindUserDto",
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
  async deleteMany(@Param() param: ConnectUserDto[]): Promise<Number> {
    return await this.userService.deleteMany(param);
  }
  /********************************************************************
   *                            deleteAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindUserDto",
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
    return await this.userService.deleteAll();
  }
  /********************************************************************
   *                            deleteAdminOne
   ********************************************************************/
  @Delete("/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "UpdateUserDto",
    type: User,
  })
  @ApiResponse({
    status: 406,
    description: "Not Acceptable",
  })
  @ApiResponse({
    status: 409,
    description: "Conflict",
  })
  async deleteAdminOne(@Param() param: ConnectUserDto): Promise<User> {
    return await this.userService.deleteAdminOne(param);
  }
  /********************************************************************
   *                            deleteAdminMany
   ********************************************************************/
  @Delete("many/:id")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindUserDto",
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
  async deleteAdminMany(@Param() param: ConnectUserDto[]): Promise<Number> {
    return await this.userService.deleteAdminMany(param);
  }
  /********************************************************************
   *                            deleteAdminAll
   ********************************************************************/
  @Delete("all")
  @ApiOperation({})
  @ApiResponse({
    status: 202,
    description: "FindUserDto",
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
    return await this.userService.deleteAdminAll();
  }
}
