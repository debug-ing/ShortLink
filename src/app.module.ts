import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkController } from './link/link.controller';
import { LinkModule } from './link/link.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [LinkModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mahdia@123',
      database: 'shortLink',
      autoLoadEntities: true,
      synchronize: true,
      extra:{
        connectionLimit: 10,
      },
    }),
    UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
