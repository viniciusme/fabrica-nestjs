import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

const { version, name } = require('../package.json');
const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const logger = new Logger();

  await app.listen(port);

  logger.log(
    `<<< ${name} v${version} foi iniciado no ambiente "DEV" >>> ${await app.getUrl()}`,
  );
}
bootstrap();
