import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { TypeormService } from './typeorm/typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './movies/entities/movies.model';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';
import { ShowtimeModule } from './showtime/showtime.module';
import { ShowtimeService } from './showtime/showtime.service';
import { Showtimes } from './showtime/entities/showtimes.model'; ;
import { ShowtimeController } from './showtime/showtime.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    TypeOrmModule.forFeature([Movies, Showtimes]),
    
  ],
  controllers: [AppController, MoviesController, ShowtimeController],
  providers: [AppService, TypeormService, MoviesService, ShowtimeService],
})
export class AppModule {}
