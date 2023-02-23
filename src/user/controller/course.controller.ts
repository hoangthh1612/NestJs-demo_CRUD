import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { createCourseDto } from "../dto/course.dto";
import { CourseService } from "../provider/course.service";

@Controller('course')

export class CourseController{
    constructor(private courseService: CourseService){}
    
    @Post()
    @UsePipes(ValidationPipe)

    createCourse(@Body() createCourse: createCourseDto){
        return this.courseService.createCourse(createCourse);
    }

    @Get('/')
    getAll(){
        return this.courseService.getAll()
    }
}