import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movies } from './entities/movies.model';

@Controller('movies')
export class MoviesController {
  
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() movie: Movies) {
    return this.moviesService.create(movie).then(res=>{
      return {success:true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get()
   findAll() {
    return this.moviesService.findAll().then(res=>{
      return {success:true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  @Post('/update')
  update(@Body() movie: Movies) {
    return this.moviesService.update(movie).then(res=>{
      return {success:true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.remove(id).then(res=>{
      return {success:true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}
