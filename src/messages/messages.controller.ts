import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
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
    return this.messagesService.findById(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() message: Message) {
    return this.messagesService.create(message);
  }

  @Put(':id')
  update(@Param() params, @Body() message: Message) {
    return this.messagesService.update(+params.id, message);
  }

  @Delete(':id')
  delete(@Param() params) {
    console.log(params.id);
    return this.messagesService.delete(+params.id);
  }
}
