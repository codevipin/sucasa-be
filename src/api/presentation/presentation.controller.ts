import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';

@Controller('presentation')
export class PresentationController {
  constructor(private service: PresentationService) {}

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
}
