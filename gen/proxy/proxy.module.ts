import { Module } from "@nestjs/common";
import ProxyController from "./proxy.controller";
import ProxyService from "./proxy.service";
@Module({
  imports: [],
  providers: [],
  controllers: [ProxyController],
  exports: [ProxyService],
})
export class ProxyModule {}
