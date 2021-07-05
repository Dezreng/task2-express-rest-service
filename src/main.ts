import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { User } from './resources/users/entities/user.entity';
import { getRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestExpressApplication } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  let app: INestApplication;
  if (process.env.USE_FASTIFY === 'true') {
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
  } else {
    app = await NestFactory.create<NestExpressApplication>(AppModule);
  }

  const userRep = getRepository(User);
  const user = await userRep.findOne({ where: { login: 'admin' } });

  if (!user) {
    const userAdmin = userRep.create({
      name: 'Admin',
      login: 'admin',
      password: await bcrypt.hash('admin', 5),
    });
    await userRep.save(userAdmin);
  }

  console.log(app);
  await app.listen(process.env.PORT, () =>
    console.log(`App is running on http://localhost:${process.env.PORT}`),
  );
}
bootstrap();
