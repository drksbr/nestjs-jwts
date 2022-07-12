import { Module } from "@nestjs/common";
import RackController from "./rack.controller";
import RackService from "./rack.service";
@Module({
  imports: [],
  providers: [],
  controllers: [RackController],
  exports: [RackService],
})
export class RackModule {}
