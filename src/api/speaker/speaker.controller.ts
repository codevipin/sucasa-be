import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpeakerService } from './speaker.service';
import { SpeakerDto } from './dto/create-speaker.dto';
@Controller('speaker')
export class SpeakerController {
  constructor(private readonly speakerService: SpeakerService) {}
  @Get()
  public async getAll(): Promise<SpeakerDto[]> {
    return await this.speakerService.getAll();
  }

  @Post()
  public async post(@Body() dto: SpeakerDto): Promise<SpeakerDto> {
    return this.speakerService.create(dto);
  }
}
