import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app.services'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-detail-component',
  templateUrl: './planet-detail-component.component.html',
  styleUrls: ['./planet-detail-component.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  public loadedPlanet$: Observable<any> = null;
  constructor(public ApiService: ApiService,private activatedRoute: ActivatedRoute) {}
  ngOnInit() {

    let url :string;
    this.activatedRoute.queryParams.subscribe(params => {
      url =  params['url'];
    });
    this.loadedPlanet$ =this.ApiService.getPlanet(url);
  }
}
