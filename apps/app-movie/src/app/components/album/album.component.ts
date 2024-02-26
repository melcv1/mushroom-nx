import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import { AlbumService } from '../../services/album.service';
import { MoviesModel } from '../../models/movie.model';
@Component({
  selector: 'fse-album',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css',
  
})
export class AlbumComponent {
  isUpdate: boolean =false;
  formMovie: FormGroup = new FormGroup({});
  listMovies: MoviesModel[]=[]; 
  showtimes: any[] = [];
  @ViewChild('exampleModal', {static:false}) exampleModal?: ElementRef;
  close(){
    (this.exampleModal?.nativeElement as HTMLElement).style.display='none';
    document.body.classList.remove('modal-open');
    document.querySelector('.modal-backdrop')?.classList.remove('show');
    (document.querySelector('.modal-backdrop') as HTMLElement).style.display='none';
  }

  constructor(private albumService: AlbumService){
    this.formMovie = new FormGroup({
      idMovie: new FormControl(null),
      name: new FormControl(''),
      description: new FormControl(''),
      time: new FormControl(''),
      image: new FormControl(''),
      status: new FormControl(true),
    });
    this.list();
  }
  list(){
    this.albumService.getMovies().subscribe(res=>{
      if(res.success){
        this.listMovies= res.data;
      }
    })
  }

  newMovie(){
    this.formMovie.reset();
    this.isUpdate= false;

  }
  viewShowtimes(idMovie: number) {
    this.albumService.getShowtimes(idMovie).subscribe(res => {
      if (res.success) {
        this.showtimes = res.data;
      }
    });
  }
  selectItem(item:any){
    this.isUpdate= true;
    this.formMovie.controls['idMovie'].setValue(item.idMovie);
    this.formMovie.controls['name'].setValue(item.name);
    this.formMovie.controls['description'].setValue(item.description);
    this.formMovie.controls['time'].setValue(item.time);
    this.formMovie.controls['image'].setValue(item.image);

  }

  save(){
    this.formMovie.controls['status'].setValue(true);
    this.albumService.saveMovie(this.formMovie.value).subscribe(res=>{
      if(res){
        this.list();
         this.close();
      }
    })
  }

  update(){
    this.formMovie.controls['status'].setValue(true);
    this.albumService.updateMovie(this.formMovie.value).subscribe(res=>{
      if(res){
        this.list();
        this.close();
      }
    })
  }

  delete(idMovie:number){
    
    this.albumService.deleteMovie(idMovie).subscribe(res=>{
      if(res){
        this.list();

      }

    })
  }

  
}
