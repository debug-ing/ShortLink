import { IsString, IsNotEmpty} from "class-validator";


export class CreateLinkResponseDto {
    @IsNotEmpty()
    @IsString()
    shortLink: string;
}