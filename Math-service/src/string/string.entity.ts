import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('string')
export class StringEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45, nullable: true })
  name: string;

  @Column({ type: 'int', nullable: true })
  no: number;
}