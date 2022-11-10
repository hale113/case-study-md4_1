import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm";
@Entity()
export class Category {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly idC: number;
    @Column({type: 'varchar'})
    public nameCategory: string;
}