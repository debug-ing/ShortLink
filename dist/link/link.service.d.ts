import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkDto } from './dto/get-link.dto';
import { CreateLinkModel } from './model/create-link.model';
import { LinkRepository } from './link.repository';
import { CreateLinkResponseDto } from './dto/create-link-response.dto';
export declare class LinkService {
    private linkRepository;
    constructor(linkRepository: LinkRepository);
    createLink(createLink: CreateLinkDto): Promise<CreateLinkResponseDto>;
    getLink(getLink: GetLinkDto): Promise<CreateLinkModel>;
    deleteLink(getLink: GetLinkDto): Promise<boolean>;
}
