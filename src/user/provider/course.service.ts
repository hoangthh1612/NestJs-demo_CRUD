import { Body, Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createCourseDto } from "../dto/course.dto";
import { Course } from "../entity/course.entity";

@Injectable()

export class CourseService{
    constructor(@InjectRepository(Course) private courseRepository: Repository<Course>){}
    
    
    async createCourse(createcourse: createCourseDto): Promise<Course>{
        return await this.courseRepository.save(createcourse);
    }

    getAll(){
        return this.courseRepository.find({
            relations: {
                users: true,
            }
        })
    }
}