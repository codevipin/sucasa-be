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
    return this.presentationsRepository.find({
      relations: ['attendees', 'speaker'],
    });
  }

  findOne(id: number): Promise<Presentation> {
    return this.presentationsRepository.findOne({
      where: {
        id,
      },
      relations: ['attendees', 'speaker'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.presentationsRepository.delete(id);
  }

  async add(presentation: Presentation): Promise<Presentation> {
    return await this.presentationsRepository.save(presentation);
  }

  async patch(presentation: Presentation): Promise<Presentation> {
    return await this.presentationsRepository.save(presentation);
  }
}
