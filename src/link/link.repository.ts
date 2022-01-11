import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { Link } from './link.entity';
import { CreateLinkModel } from './model/create-link.model';
import { CreateLinkResponseDto } from './dto/create-link-response.dto';

@EntityRepository(Link)
export class LinkRepository extends Repository<Link> {
    async insertLink(linkModel:CreateLinkModel):Promise<CreateLinkResponseDto>{
         await this.save(linkModel);
         return {shortLink:linkModel.linkShort};
    }
    async deleteLink(link:string){
        await this.delete({linkShort:link});
    }
}