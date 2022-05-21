import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Presentation } from './presentation.entity';

@Injectable()
export class PresentationService {
  constructor(
    @InjectRepository(Presentation)
    private presentationsRepository: Repository<Presentation>,
  ) {}

  findAll(): Promise<Presentation[]> {
    return this.presentationsRepository.find({ relations: ['attendees'] });
  }

  findOne(id: number): Promise<Presentation> {
    return this.presentationsRepository.findOne({
      where: {
        id,
      },
      relations: ['attendees'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.presentationsRepository.delete(id);
  }

  async add(presentation: Presentation): Promise<void> {
    await this.presentationsRepository.insert(presentation);
  }

  async patch(presentation: Presentation): Promise<void> {
    await this.presentationsRepository.save(presentation);
  }
}
