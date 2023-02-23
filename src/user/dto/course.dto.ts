import { IsNotEmpty, Length } from "class-validator";

export class createCourseDto {
    @IsNotEmpty()
    @Length(3)
    
    courseName: String;
}