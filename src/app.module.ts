import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeeModule } from './api/attendee/attendee.module';
import { PresentationModule } from './api/presentation/presentation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './database/database.config';
import { SpeakerModule } from './api/speaker/speaker.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    PresentationModule,
    AttendeeModule,
    SpeakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
