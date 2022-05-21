import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeeModule } from './api/attendee/attendee.module';
import { PresentationModule } from './api/presentation/presentation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './database/database.config';
import { SpeakerModule } from './api/speaker/speaker.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PresentationModule,
    AttendeeModule,
    SpeakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
