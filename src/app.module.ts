import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleTestModule } from './module_test/module_test.module';
import { ControllerTestController } from './controller_test/controller_test.controller';
import { ServiceTestService } from './service_test/service_test.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ModuleTestModule, MongooseModule.forRoot(process.env.DB_URI)],
  controllers: [AppController, ControllerTestController],
  providers: [AppService, ServiceTestService],
})
export class AppModule {}
