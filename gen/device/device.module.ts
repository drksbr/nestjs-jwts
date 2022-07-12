import { Module } from "@nestjs/common";
import DeviceController from "./device.controller";
import DeviceService from "./device.service";
@Module({
  imports: [],
  providers: [],
  controllers: [DeviceController],
  exports: [DeviceService],
})
export class DeviceModule {}
