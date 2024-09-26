import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MathEntity } from './math.entity';

@Injectable()
export class MathService {
  constructor(
    @InjectRepository(MathEntity)
    private mathRepository: Repository<MathEntity>,
  ) {}

  findAll(): Promise<MathEntity[]> {
    return this.mathRepository.find();
  }

  findOne(id: number): Promise<MathEntity> {
    return this.mathRepository.findOneBy({ id });
  }

  create(mathData: Partial<MathEntity>): Promise<MathEntity> {
    const math = this.mathRepository.create(mathData);
    return this.mathRepository.save(math);
  }

  async update(id: number, mathData: Partial<MathEntity>): Promise<void> {
    await this.mathRepository.update(id, mathData);
  }

  async remove(id: number): Promise<void> {
    await this.mathRepository.delete(id);
  }
}
