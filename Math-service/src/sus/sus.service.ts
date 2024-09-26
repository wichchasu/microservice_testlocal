import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SusEntity } from './sus.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SusService {
    constructor(
        @InjectRepository(SusEntity)
        private susRepository: Repository<SusEntity>
    ){}

    create(susData: Partial<SusEntity>): Promise<SusEntity> {
        const math = this.susRepository.create(susData);
        return this.susRepository.save(math);
      }
}
