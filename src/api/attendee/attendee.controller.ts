import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Attendee } from './attendee.entity';
import { AttendeeService } from './attendee.service';

@Controller('attendee')
export class AttendeeController {
  constructor(private service: AttendeeService) {}

  @Get(':id')
  getAttendee(@Param('id', ParseIntPipe) id: number): Promise<Attendee> {
    return this.service.findOne(id);
  }

  @Get()
  getAllAttendee(): Promise<Attendee[]> {
    return this.service.findAll();
  }

  @Post()
  createAttendee(@Body() attendee: Attendee): Promise<Attendee> {
    return this.service.add(attendee);
  }
}
