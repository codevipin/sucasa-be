import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AttendeeService } from '../attendee/attendee.service';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';

@Controller('presentation')
export class PresentationController {
  constructor(
    private service: PresentationService,
    private attendeeService: AttendeeService,
  ) {}

  @Get(':id')
  getPresentation(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Presentation> {
    return this.service.findOne(id);
  }

  @Get()
  getAllPresentations(): Promise<Presentation[]> {
    return this.service.findAll();
  }

  @Post()
  createPresentation(@Body() presentation: Presentation): Promise<void> {
    return this.service.add(presentation);
  }

  @Patch(':presentation_id/attendees/:attendee_id')
  async addAttendees(
    @Param('presentation_id', ParseIntPipe) presentationId: number,
    @Param('attendee_id', ParseIntPipe) attendeeId: number,
  ): Promise<void> {
    const attendee = await this.attendeeService.findOne(attendeeId);
    const presentation = await this.service.findOne(presentationId);
    return this.service.patch({
      ...presentation,
      attendees: [...presentation.attendees, attendee],
    });
  }
}
