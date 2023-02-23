import { Injectable, Param, Query } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { UpdateUserDto } from "../dto/update-user.dto";
import { createUserDto } from "../dto/user.dto";
import { User } from "../entity/user.entity";


@Injectable()

export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}
    
    // async createUserParam(id: number, createUser: createUserDto){
    //     const user = await this.userRepository
    //     .createQueryBuilder('user')
    //     .insert()
    //     .into(User)
    //     .values({
    //         id: id,
    //         name: createUser.name,
    //         email: createUser.email,
    //         address: createUser.address,
    //         profileId: createUser.profileId,
    //     })
    //     .execute()

    //     return user;
        
    // }
    async createUser(user: createUserDto):Promise<User>{
        return await this.userRepository.save(user);
    }

    async getAllUser(): Promise<User[]>{
        // return await this.userRepository.find({
        //     relations: {
        //         posts: true,
        //     }
        // });

        // getAll equal Query builder using repository 
        const user = await this.userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.posts" ,"post")
        .leftJoinAndSelect("user.profile","profile")
        .leftJoinAndSelect("user.courses","course")
        .getMany()
        return user; 
        
        
    }
    async getOneById(id: number): Promise<User|null> {
        // const user = await this.userRepository
        // .createQueryBuilder("user")
        // .leftJoinAndSelect("user.posts" ,"post")
        // .where('user.id = :id',{id: id})
        // .getOne()

        // return user;
        const user = await this.userRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                posts: true,
                profile: true,
                courses: true,
            }
            
        })
        return user;

        
    }
    async update(id: number, feedUser: UpdateUserDto): Promise<User>{
        const user = await this.getOneById(id);
        user.name = feedUser.name;
        user.email = feedUser.email;
        user.address = feedUser.address;
        return this.userRepository.save(user);
    }
    async deleteUser(id: number): Promise<String>{
        try {
            await this.userRepository.delete(id);
            return "User has been deleted";
        } catch (error) {
            console.log(error);
            
        }
        
    }
}