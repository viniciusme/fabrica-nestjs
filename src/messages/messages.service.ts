import { Injectable } from '@nestjs/common';
import { Message } from './message';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: Message) {
    return this.messages.push(message);
  }
}
