import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Attendee } from '../attendee/attendee.entity';
import { Speaker } from '../speaker/entities/speaker.entity';

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

  @ManyToMany(() => Attendee, (attendee) => attendee.presentation)
  @JoinTable()
  attendees: Attendee[];

  @ManyToOne(() => Speaker, (speaker) => speaker.presentation)
  speaker: Speaker;
}
