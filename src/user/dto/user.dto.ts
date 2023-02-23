import { IsDate, IsNotEmpty, IsNumber, IsNumberString, Length } from "class-validator";

export class createUserDto{
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @Length(3, 255)

    name: String;
    @IsNotEmpty()
    @Length(3)

    email: String;

    @IsNotEmpty()
    @Length(3)
    address: String;
    
    @IsNotEmpty()
    profileId: number;

}