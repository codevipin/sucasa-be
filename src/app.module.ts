import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeeModule } from './api/attendee/attendee.module';
import { PresentationModule } from './api/presentation/presentation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './database/database.config';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PresentationModule,
    AttendeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
