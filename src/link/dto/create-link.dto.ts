import { IsString, IsNotEmpty} from "class-validator";

export class CreateLinkDto {
    @IsNotEmpty()
    @IsString()
    link: string;
}