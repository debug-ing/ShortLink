import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkDto } from './dto/get-link.dto';
import { LinkService } from './link.service';
import { CreateLinkModel } from './model/create-link.model';
import { CreateLinkResponseDto } from './dto/create-link-response.dto';
export declare class LinkController {
    private linkService;
    constructor(linkService: LinkService);
    createLink(createLink: CreateLinkDto): Promise<CreateLinkResponseDto>;
    getLink(getLink: GetLinkDto): Promise<CreateLinkModel>;
    deleteLink(getLink: GetLinkDto): Promise<{
        status: boolean;
    }>;
}
