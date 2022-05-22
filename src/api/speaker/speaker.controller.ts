import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { SpeakerService } from './speaker.service';
import { SpeakerDto } from './dto/create-speaker.dto';
@Controller('speaker')
export class SpeakerController {
  constructor(private readonly speakerService: SpeakerService) {}
  @Get()
  async getAll(): Promise<SpeakerDto[]> {
    return await this.speakerService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<SpeakerDto> {
    return await this.speakerService.findOne(id);
  }

  @Post()
  async post(@Body() dto: SpeakerDto): Promise<SpeakerDto> {
    return this.speakerService.create(dto);
  }
}
