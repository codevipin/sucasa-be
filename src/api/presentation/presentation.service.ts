import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Presentation } from './presentation.entity';

@Injectable()
export class PresentationService {
  constructor(
    @InjectRepository(Presentation)
    private presentationsRepository: Repository<Presentation>,
  ) {}

  findAll(): Promise<Presentation[]> {
    return this.presentationsRepository.find();
  }

  findOne(id: number): Promise<Presentation> {
    return this.presentationsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.presentationsRepository.delete(id);
  }

  async add(presentation: Presentation): Promise<void> {
    console.log('presentation', presentation);
    await this.presentationsRepository.insert(presentation);
  }
}
