import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Presentation } from '../presentation/presentation.entity';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  company: string;

  @Column()
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registered: Date;

  @ManyToMany(() => Presentation, (presentation) => presentation.attendees)
  presentation: Presentation;
}
