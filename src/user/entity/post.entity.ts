import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('posts')

export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
    })

    description: String;
    
    @Column({
        type: 'number',
    })

    userId: number;

    
    @ManyToOne(() => User, (user) => user.posts) 
    user: User   
    
}