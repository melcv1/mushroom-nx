import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from './entities/movies.model';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movies) private moviesRepository: Repository<Movies>){

  }

  async create(movie: Movies): Promise<Movies> {
    return await this.moviesRepository.save(movie);
  }

  async findAll():Promise<Movies[]> {
    return await this.moviesRepository.findBy({status:true});
  }

  async findOne(id: number):Promise<Movies> {
    return await this.moviesRepository.findOneBy({idMovie:id, status:true});
  }

  async update(movie:Movies): Promise<Movies> {
    return await this.moviesRepository.save(movie);
  }

  async remove(id: number) :Promise<string>{
    await this.moviesRepository.delete(id);
    return 'OK';
  }
}
