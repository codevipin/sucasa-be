import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeeController } from './attendee.controller';
import { Attendee } from './attendee.entity';
import { AttendeeService } from './attendee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Attendee])],
  providers: [AttendeeService],
  controllers: [AttendeeController],
})
export class AttendeeModule {}
