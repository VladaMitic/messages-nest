import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //ova useGlobalPipes funkcija se moze primeniti i na jednom rout hendleru a ovde se primenjujena sve dolazne requestove
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(3000);
}
bootstrap();
