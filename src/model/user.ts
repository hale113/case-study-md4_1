import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @Column({type: 'varchar'})
    public nameUser: string;
    @Column({type: 'varchar'})
    public password: string;
}