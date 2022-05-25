import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configService } from './database/database.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  if (!configService.isProduction()) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Sucasa API')
        .setDescription('List of all sucasa API')
        .build(),
    );

    SwaggerModule.setup('docs', app, document);
  }
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(options);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
