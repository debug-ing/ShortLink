import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkDto } from './dto/get-link.dto';
import { CreateLinkModel } from './model/create-link.model';
import { LinkRepository } from './link.repository';
import { CreateLinkResponseDto } from './dto/create-link-response.dto';

@Injectable()
export class LinkService {
    constructor(
        private linkRepository: LinkRepository
    ){

    }
    async createLink(createLink:CreateLinkDto):Promise<CreateLinkResponseDto> {
        let linkRandom = Math.random().toString(36).substr(2,9);
        return await this.linkRepository.insertLink({link:createLink.link,linkShort:linkRandom});
    }

    async getLink(getLink:GetLinkDto):Promise<CreateLinkModel>{
        let data = await this.linkRepository.findOne({
            where:{
                linkShort:getLink.link
            }
        });
        return data;
    }
    async deleteLink(getLink:GetLinkDto):Promise<boolean>{
        await this.linkRepository.deleteLink(getLink.link);
        return true;
    }
    async updateOpen(){

    }
    async updateView(){

    }
    
}
