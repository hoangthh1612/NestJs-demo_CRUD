
import { IsNotEmpty, Length } from "class-validator"
export class CreatePostDto{
    @IsNotEmpty()
    @Length(3)

    description: String;

    @IsNotEmpty()
    @Length(3)
    userId: number;
}