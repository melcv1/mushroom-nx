import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movies {
    @PrimaryGeneratedColumn()
    idMovie : number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    time: string;
    @Column()
    image: string;
    @Column()
    status: boolean;

}
