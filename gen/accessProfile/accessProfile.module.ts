import { Module } from "@nestjs/common";
import AccessProfileController from "./accessProfile.controller";
import AccessProfileService from "./accessProfile.service";
@Module({
  imports: [],
  providers: [],
  controllers: [AccessProfileController],
  exports: [AccessProfileService],
})
export class AccessProfileModule {}
