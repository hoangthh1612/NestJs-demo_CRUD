import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('profiles')

export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
    })
    slogan: String;

    @Column({
        type: 'varchar',
    })
    hobby: String;

    @OneToOne(() => User, (user)=> user.profile)
    user: User

    

}