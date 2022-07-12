import { Module } from "@nestjs/common";
import ClientController from "./client/client.controller";
import UserController from "./user/user.controller";
import POPController from "./pOP/pOP.controller";
import RackController from "./rack/rack.controller";
import DeviceController from "./device/device.controller";
import AccessProfileController from "./accessProfile/accessProfile.controller";
import ProxyController from "./proxy/proxy.controller";
@Module({
  imports: [],
  providers: [],
  controllers: [
    ClientController,
    UserController,
    POPController,
    RackController,
    DeviceController,
    AccessProfileController,
    ProxyController,
  ],
  exports: [],
})
export class GeneralModelModule {}
