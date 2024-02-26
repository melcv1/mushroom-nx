import { Injectable } from '@nestjs/common';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Showtimes } from './entities/showtimes.model';
import { Repository } from 'typeorm';

@Injectable()
export class ShowtimeService {
  constructor(@InjectRepository(Showtimes) private showtimesRepository: Repository<Showtimes>) {}

    async create(showtime: Showtimes): Promise<Showtimes> {
        return await this.showtimesRepository.save(showtime);
    }

    async findByMovieId(idMovie: number): Promise<Showtimes[]> {
        return await this.showtimesRepository.find({
            where: { idMovie }
        });
    }

    async findAll(): Promise<Showtimes[]> {
        return await this.showtimesRepository.find();
    }

    async findOne(id: number): Promise<Showtimes> {
        return await this.showtimesRepository.findOneBy({ idShowtime: id });
    }

    async update(showtime: Showtimes): Promise<Showtimes> {
        return await this.showtimesRepository.save(showtime);
    }

    async remove(id: number): Promise<string> {
        await this.showtimesRepository.delete(id);
        return 'OK';
    }
}
