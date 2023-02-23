import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "../dto/post.dto";
import { createUserDto } from "../dto/user.dto";
import { PostService } from "../provider/post.service";
import { UserService } from "../provider/user.service";

@Controller('post')

export class PostController{
    constructor(private postService:PostService){}

    @UsePipes(ValidationPipe)
    @Post('/')
    async createPost(@Body() post: CreatePostDto){
        return await this.postService.createPost(post);
    }

    @Get('/')
    getAll(){
        return this.postService.getAll();
    }
    @Get('/:id')
    async getOneBy(@Param('id') id: number){
        return await this.postService.getOneId(id);
    }
    @Put('/:id')
    updatePost(@Param('id') id: number,@Body()updatepost: CreatePostDto){
        return this.postService.updatePost(id, updatepost);
    }


}