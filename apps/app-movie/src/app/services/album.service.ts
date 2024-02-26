import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MoviesModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  URL: string= 'http://localhost:3000/'
  constructor(private http: HttpClient) { 

  }

  getMovies(): Observable<any>{
    return this.http.get<MoviesModel[]>(this.URL + 'api/movies').pipe(map(res=>res));
  }

  saveMovie(movie: MoviesModel): Observable<any>{
    return this.http.post<any>(this.URL + 'api/movies',movie).pipe(map(res=>res));
  }

  updateMovie(movie: MoviesModel): Observable<any>{
    return this.http.post<any>(this.URL + 'api/movies/update',movie).pipe(map(res=>res));
  }
  deleteMovie(idMovie: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'api/movies/'+ idMovie).pipe(map(res=>res));
  }

  getShowtimes(idMovie: number): Observable<any> {
    return this.http.get<any>(`${this.URL}api/showtime/movie/${idMovie}`).pipe(map(res => res));
  }
  

}
