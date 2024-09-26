import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('math')
export class MathEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  number: number;

  @Column({ nullable: true })
  no: number;

  @Column({ type: 'varchar', length: 45, nullable: true })
  note: string;
}