import { MessagesService } from './messages.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Message } from './Message';

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

  @Post()
  create(@Body() message: Message) {
    return this.messagesService.create(message);
  }

  @Put(':id')
  update(@Param() params, @Body() message: Message) {
    return this.messagesService.update(+params.id, message);
  }
}
