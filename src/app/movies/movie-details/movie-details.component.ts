import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../app.services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {

  public loadedMovie$: Observable<any> = null;
  constructor(public ApiService: ApiService, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    let url :string;
    this.activatedRoute.queryParams.subscribe(params => {
       url =  params['url'];
    });
    this.loadedMovie$ =this.ApiService.getFilm(url);
  }
}
