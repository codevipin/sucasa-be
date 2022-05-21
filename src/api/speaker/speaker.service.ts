import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpeakerDto } from './dto/create-speaker.dto';
import { Speaker } from './entities/speaker.entity';

@Injectable()
export class SpeakerService {
  constructor(
    @InjectRepository(Speaker)
    private repo: Repository<Speaker>,
  ) {}

  async getAll(): Promise<SpeakerDto[]> {
    return await this.repo
      .find()
      .then((items) => items.map((e) => SpeakerDto.fromEntity(e)));
  }

  async create(dto: SpeakerDto): Promise<SpeakerDto> {
    return this.repo.save(dto).then((e) => SpeakerDto.fromEntity(e));
  }
}
