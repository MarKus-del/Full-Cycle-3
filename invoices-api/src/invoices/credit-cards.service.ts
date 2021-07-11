import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCreditCardsDto } from './dto/create-credit-cards.dto';
import { CreditCard } from './entities/credit-card.entity';

@Injectable()
export class CreditCardsService {
  constructor(
    @InjectRepository(CreditCard)
    private creditCardRepo: Repository<CreditCard>,
  ) {}
  create(createCreditCardDto: CreateCreditCardsDto) {
    const creditCard = this.creditCardRepo.create(createCreditCardDto);
    return this.creditCardRepo.save(creditCard);
  }

  findAll() {
    return this.creditCardRepo.find();
  }
}
