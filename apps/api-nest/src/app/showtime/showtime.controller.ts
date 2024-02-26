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
import { ShowtimeService } from './showtime.service';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { Showtimes } from './entities/showtimes.model';

@Controller('showtime')
export class ShowtimeController {
  constructor(private readonly showtimesService: ShowtimeService) {}

    @Post()
    create(@Body() showtime: Showtimes) {
        return this.showtimesService.create(showtime).then(res => {
            return { success: true, data: res };
        }).catch(error => {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Get()
    findAll() {
        return this.showtimesService.findAll().then(res => {
            return { success: true, data: res };
        }).catch(error => {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.showtimesService.findOne(+id);
    }
    
    @Get('movie/:idMovie')
findByMovieId(@Param('idMovie') idMovie: string) {
    return this.showtimesService.findByMovieId(+idMovie).then(res => {
        return { success: true, data: res };
    }).catch(error => {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    });
}


    @Post('/update')
    update(@Body() showtime: Showtimes) {
        return this.showtimesService.update(showtime).then(res => {
            return { success: true, data: res };
        }).catch(error => {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.showtimesService.remove(id).then(res => {
            return { success: true, data: res };
        }).catch(error => {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
}
