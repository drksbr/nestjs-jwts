import { Module } from "@nestjs/common";
import POPController from "./pOP.controller";
import POPService from "./pOP.service";
@Module({
  imports: [],
  providers: [],
  controllers: [POPController],
  exports: [POPService],
})
export class POPModule {}
