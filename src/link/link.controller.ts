import { Controller, Post,Get, Body, Param, Delete } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkDto } from './dto/get-link.dto';
import { LinkService } from './link.service';
import { CreateLinkModel } from './model/create-link.model';
import { CreateLinkResponseDto } from './dto/create-link-response.dto';

@Controller('link')
export class LinkController {
    constructor(private linkService:LinkService){
    }
    @Post()
    async createLink(@Body() createLink:CreateLinkDto):Promise<CreateLinkResponseDto> {
        return await this.linkService.createLink(createLink);
    }

    @Get(":link")
    async getLink(@Param() getLink:GetLinkDto){
        return await this.linkService.getLink(getLink);
    }

    @Delete(":link")
    async deleteLink(@Param() getLink:GetLinkDto){
        await this.linkService.deleteLink(getLink);
        return {status:true};
    }
}
