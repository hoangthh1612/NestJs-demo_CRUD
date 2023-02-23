import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
import { createUserDto } from '../dto/user.dto';
import { User } from '../entity/user.entity';
import { UserService } from '../provider/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    // @Post('/:id')
    // async createUserParam(@Param('id') id: number, @Body() user: createUserDto){
    //     return await this.userService.createUserParam(id, user);
    // }
    @Post('/')
    @UsePipes(ValidationPipe)
    async createUser(@Body() user: createUserDto){
        return await this.userService.createUser(user);
    }
    

    @Get('/')
    async getAllUser(){
        return await this.userService.getAllUser();
    }
    @Get('/:id')
    async getOneById(@Param('id') id: number): Promise<User | null>{
        return await this.userService.getOneById(id); 
    }
    @Get('/getid')
    async findOneById(@Query() query: User){
        return await this.userService.getOneById(query.id); 
    }
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() feedUser: UpdateUserDto){
        return await this.userService.update(id, feedUser);
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: number){
        return await this.userService.deleteUser(id);
    }
 
}
