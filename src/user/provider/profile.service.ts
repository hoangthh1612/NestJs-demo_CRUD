import { Get, Injectable, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePostDto } from "../dto/post.dto";
import { CreateProfileDto } from "../dto/profile.dto";
import { Profile } from "../entity/profile.entity";

@Injectable()

export class ProfileService {
    constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>){}
    async createProfile(createProfile: CreateProfileDto): Promise<Profile>{
        return await this.profileRepository.save(createProfile);
    }

    getAll(){
        return this.profileRepository.find();
    }
}