import { Injectable } from '@nestjs/common';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm'
import { Movies } from '../movies/entities/movies.model';
import { Showtimes } from '../showtime/entities/showtimes.model';;;
@Injectable()
export class TypeormService implements TypeOrmOptionsFactory{


    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'mssql',
            host: 'host.docker.internal', //host.docker.internal. localhost
            username: 'SA',
            password: 'Hola123.',
            port: 1433,
            database: 'master',
            options: {
                encrypt: false, 
              },
              entities: [Movies, Showtimes]
        };
    }
    

}
