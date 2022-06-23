import { MessagesService } from './messages.service';
import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  constructor(private MessagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.MessagesService.findAll();
  }
}
