import { MessagesService } from './messages.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    console.log(params.id, typeof params.id);
    return this.messagesService.findById(+params.id);
  }
}
