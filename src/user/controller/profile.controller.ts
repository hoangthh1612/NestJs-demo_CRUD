import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateProfileDto } from "../dto/profile.dto";
import { ProfileService } from "../provider/profile.service";

@Controller('profile')

export class ProfileController {
    constructor(private profileService: ProfileService){}
    @Post('/')
    @UsePipes(ValidationPipe)
    async createProfile(@Body() createProfile: CreateProfileDto){
        return await this.profileService.createProfile(createProfile);
    }


    @Get('/')
    getAll(){
        return this.profileService.getAll();
    }

}