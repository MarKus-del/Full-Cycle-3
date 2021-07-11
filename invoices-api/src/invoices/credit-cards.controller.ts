import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreateCreditCardsDto } from './dto/create-credit-cards.dto';

@Controller('credit-cards')
export class CreditCardsController {
  constructor(private readonly creditCardService: CreditCardsService) {}

  @Post()
  create(@Body() createInvoiceDto: CreateCreditCardsDto) {
    return this.creditCardService.create(createInvoiceDto);
  }

  @Get()
  findAll() {
    return this.creditCardService.findAll();
  }
}
