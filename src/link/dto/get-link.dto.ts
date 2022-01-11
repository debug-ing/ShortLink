import { IsString, IsNotEmpty} from "class-validator";


export class GetLinkDto {
    @IsNotEmpty()
    @IsString()
    link: string;
}