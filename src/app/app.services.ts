import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Router } from "@angular/router";
import { Observable } from "rxjs";
import {  map } from "rxjs/operators";
import { environment } from "../environments/environment";
import { People,Planet,Film} from './app.models';


const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class ApiService {


  constructor(private http: HttpClient, private router: Router) {}

  //Add page value url param
  getByPage(page: number): string {
    if (page) { return '&page=' + page; } else { return ''; }
  }


  //Return list of people as observable
  getPeople(page?: number): Observable<People[]> {
    return this.http.get<People[]>(`${BACKEND_URL}/people?format=json${this.getByPage(page)}`)
              .pipe(
                map(resp => resp['results'])
              );
  }


   // Return people by id
  getPeopleById(url:string): Observable<People> {
    return this.http.get<People>(url)
  }


  //Return list of planets as observable
  getPlanets(page?: number): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${BACKEND_URL}/planets?format=json${this.getByPage(page)}`)
              .pipe(
                map(resp => resp['results'])
              );
  }

  //Return planet by id
  getPlanet(url:string): Observable<Planet> {
    return this.http.get<Planet>(url)
  }

  //Return list of films as observable
  getFilms(page?: number): Observable<Film[]> {
      return this.http.get<Film[]>(`${BACKEND_URL}/films?format=json${this.getByPage(page)}`)
            .pipe(
              map(resp => resp['results'])
            );
  }


  //Return film by id
  getFilm(url:string): Observable<Film> {
    return this.http.get<Film>(url)

  }

}
