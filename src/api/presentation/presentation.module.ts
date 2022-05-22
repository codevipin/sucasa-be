import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendee } from '../attendee/attendee.entity';
import { AttendeeService } from '../attendee/attendee.service';
import { Speaker } from '../speaker/entities/speaker.entity';
import { SpeakerService } from '../speaker/speaker.service';
import { PresentationController } from './presentation.controller';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Presentation, Attendee, Speaker])],
  providers: [PresentationService, AttendeeService, SpeakerService],
  controllers: [PresentationController],
})
export class PresentationModule {}
