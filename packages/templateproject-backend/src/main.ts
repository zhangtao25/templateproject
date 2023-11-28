import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Increase fil upload limit to 50MB
  app.use(
    json({
      limit: '50mb',
    }),
  );
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
