import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('courses')

export class Course {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({
        type: "varchar"
    })
    courseName: String;

    @ManyToMany(()=> User, (user)=>user.courses)
    @JoinTable()
    users: User[]
}