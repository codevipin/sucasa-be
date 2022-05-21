import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Attendee } from '../attendee/attendee.entity';

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

  @ManyToMany(() => Attendee, (attendee) => attendee.presentation)
  @JoinTable()
  attendees: Attendee[];
}
