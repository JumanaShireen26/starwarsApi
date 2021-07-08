import { ApiService } from '../../app.services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  loadedMovies$: Observable<any>;
  page=1;
  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.loadedMovies$ =this.ApiService.getFilms(this.page);
  }

}
