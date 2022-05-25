import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendee } from './attendee.entity';

@Injectable()
export class AttendeeService {
  constructor(
    @InjectRepository(Attendee)
    private attendeesRepository: Repository<Attendee>,
  ) {}

  findAll(): Promise<Attendee[]> {
    return this.attendeesRepository.find({ relations: ['presentation'] });
  }

  findOne(id: number): Promise<Attendee> {
    return this.attendeesRepository.findOne({
      where: {
        id,
      },
    });
  }

  async add(attendee: Attendee): Promise<Attendee> {
    return await this.attendeesRepository.save(attendee);
  }
}
