import { Presentation } from 'src/api/presentation/presentation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column('text')
  company: string;

  @Column('text')
  email: string;

  @Column({ type: 'varchar', length: 300 })
  bio: string;

  @OneToMany(() => Presentation, (presentation) => presentation.speaker)
  presentation: Presentation[];
}
