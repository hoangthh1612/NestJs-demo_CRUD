import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePostDto } from "../dto/post.dto";
import { Post } from "../entity/post.entity";
import { User } from "../entity/user.entity";


@Injectable()

export class PostService{
    constructor(@InjectRepository(Post) private postRepository: Repository<Post>,
    ){}

    async createPost(post: CreatePostDto): Promise<Post>{
         
        return await this.postRepository.save(post);
    }

    async getAll(): Promise<Post[]>{
        return await this.postRepository.find({
            relations: {user: true}
        });
    }
    async getOneId(id: number): Promise<Post|null>{ 

        // const post = await this.postRepository
        // .createQueryBuilder("post")
        // .leftJoinAndSelect("post.user", "user")
        // .where("post.id = :id", {id: id})
        // .getOne()
        // return post;
        const post =  await this.postRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                user: true,
            }
        })
        return post;
    }
    async updatePost(id: number, updatepost: CreatePostDto):Promise<Post>{
        const post = await this.postRepository.findOneBy({id});
        post.description = updatepost.description;
        post.userId = updatepost.userId;
        return this.postRepository.save(post);
        
    }

}