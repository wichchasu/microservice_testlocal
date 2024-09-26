import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StringEntity } from './string.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StringService {
    constructor(
        @InjectRepository(StringEntity)
        private stringRepository: Repository<StringEntity>,
      ) {}
    
      create(stringData: Partial<StringEntity>): Promise<StringEntity> {
        const _string = this.stringRepository.create(stringData);
        return this.stringRepository.save(_string);
      }
}
