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
import { SpeakerDto } from '../speaker/dto/create-speaker.dto';
import { SpeakerService } from '../speaker/speaker.service';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';

@Controller('presentation')
export class PresentationController {
  constructor(
    private service: PresentationService,
    private attendeeService: AttendeeService,
    private speakerService: SpeakerService,
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
  async createPresentation(
    @Body() presentation: Presentation,
  ): Promise<Presentation> {
    const speaker = await this.speakerService.create(
      SpeakerDto.fromEntity(presentation.speaker),
    );
    return this.service.add({
      ...presentation,
      speaker: SpeakerDto.toEntity(speaker),
    });
  }

  @Patch(':presentation_id/attendee/:attendee_id')
  async addAttendees(
    @Param('presentation_id', ParseIntPipe) presentationId: number,
    @Param('attendee_id', ParseIntPipe) attendeeId: number,
  ): Promise<Presentation> {
    const attendee = await this.attendeeService.findOne(attendeeId);
    const presentation = await this.service.findOne(presentationId);
    return this.service.patch({
      ...presentation,
      attendees: [...presentation.attendees, attendee],
    });
  }
}
