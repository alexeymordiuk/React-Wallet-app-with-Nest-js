import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: 'http://localhost:3000', credentials: true } });

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  app.setGlobalPrefix('api')
  app.enableCors({ origin: 'http://localhost:3000', credentials: true })
  await app.listen(4200);
}
bootstrap();
