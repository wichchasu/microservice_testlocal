import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sus')
export class SusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45, nullable: true })
  name: string;

  @Column({ type: 'int', nullable: true })
  age: number;
}