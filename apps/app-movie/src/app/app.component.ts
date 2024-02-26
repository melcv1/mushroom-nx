import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterModule, AlbumComponent,ReactiveFormsModule],
  selector: 'fse-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'app-movie';
}
