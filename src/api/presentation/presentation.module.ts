import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentationController } from './presentation.controller';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Presentation])],
  providers: [PresentationService],
  controllers: [PresentationController],
})
export class PresentationModule {}
