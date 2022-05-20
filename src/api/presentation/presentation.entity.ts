import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Speaker } from './presentation.model';

@Entity()
export class Presentation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  presentation: string;

  @Column('text')
  details: string;

  @Column('int')
  room: number;

  @Column()
  speaker: string;

  @Column()
  attendees: number;
}
