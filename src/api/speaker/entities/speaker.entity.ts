import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
