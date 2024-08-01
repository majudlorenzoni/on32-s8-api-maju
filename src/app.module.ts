import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'users-api',
    username: 'reprograma8',
    password: 'repro',
    entities: [User],
    synchronize: true
  }),
    UserModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
