import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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

  @ManyToOne((type) => Presentation, (presentation) => presentation.attendees)
  presentation: Presentation;
}
