import { join } from "path";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";
import { Post } from "./post.entity";
import { Profile } from "./profile.entity";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
    })
    name: String;

    @Column({
        type: "varchar",
    })
    email: String;

    @Column({
        type: 'varchar',
    })
    address: String;
    @Column({
    })
    profileId: number;

    @OneToMany(() => Post, (post)=>post.user)
    posts: Post[]

    @OneToOne(()=> Profile, (profile) =>profile.user)
    @JoinColumn()
    profile: Profile

    @ManyToMany(() => Course,(course) =>course.users)
    courses: Course[]
    

}