import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Movies } from "../../movies/entities/movies.model";

@Entity()
export class Showtimes {
    @PrimaryGeneratedColumn()
    idShowtime: number;
  
    @Column()
    idMovie: number;
  
    @Column()
    date: Date;
  
    @Column({ length: 50 })
    time: string;
  
    @ManyToOne(() => Movies)
    @JoinColumn({ name: 'idMovie' })
    movie: Movies;
}
