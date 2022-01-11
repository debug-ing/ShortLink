import { Repository } from 'typeorm';
import { Link } from './link.entity';
import { CreateLinkModel } from './model/create-link.model';
import { CreateLinkResponseDto } from './dto/create-link-response.dto';
export declare class LinkRepository extends Repository<Link> {
    insertLink(linkModel: CreateLinkModel): Promise<CreateLinkResponseDto>;
    deleteLink(link: string): Promise<void>;
}
