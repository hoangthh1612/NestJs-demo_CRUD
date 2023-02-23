import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './controller/course.controller';
import { PostController } from './controller/post.controller';
import { ProfileController } from './controller/profile.controller';
import { UserController } from './controller/user.controller';
import { Course } from './entity/course.entity';
import { Post } from './entity/post.entity';
import { Profile } from './entity/profile.entity';
import { User } from './entity/user.entity';
import { CourseService } from './provider/course.service';
import { PostService } from './provider/post.service';
import { ProfileService } from './provider/profile.service';
import { UserService } from './provider/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User,Post,Profile,Course])],
  controllers: [UserController, PostController, ProfileController, CourseController],
  providers: [UserService,PostService, ProfileService, CourseService],
})
export class UserModule {}
