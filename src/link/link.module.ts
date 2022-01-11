import { Module } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { Link } from './link.entity';
import { LinkRepository } from './link.repository';


@Module({
  imports:[
    TypeOrmModule.forFeature([LinkRepository]),
  ],
  controllers: [LinkController],
  providers: [LinkService]
})
export class LinkModule {}
