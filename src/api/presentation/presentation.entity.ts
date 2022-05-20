import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

  @OneToMany(() => Attendee, (attendee) => attendee.presentation)
  attendees: Attendee[];
}
