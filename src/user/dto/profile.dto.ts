import { IsNotEmpty, Length } from "class-validator";
import { OneToOne } from "typeorm";
import { Profile } from "../entity/profile.entity";
import { User } from "../entity/user.entity";

export class CreateProfileDto {
    @IsNotEmpty()
    @Length(3)

    slogan: String;

    @IsNotEmpty()
    @Length(3)
    hobby: String;
    
    
    
    
    
}