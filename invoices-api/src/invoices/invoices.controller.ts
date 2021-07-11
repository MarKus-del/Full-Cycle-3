import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { KafkaCreateInvoiceDto } from './dto/create-invoice.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @MessagePattern('payments')
  create(@Payload(new ValidationPipe()) message: KafkaCreateInvoiceDto) {
    console.log(message);

    return this.invoicesService.create(message.value);
  }

  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }
}
