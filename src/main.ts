import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// Parei em 2:30:02

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
