import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  IMovie  from '../models/Imovie';

const apiKey = '8ae9b1e953eb85ced7ee6d4cc9c183e7';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/';
  private popular: string = 'discover/movie?sort_by=popularity.desc';
  private theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  private authentication: string = '&api_key=';


  constructor(private http: HttpClient) { }

  getPopular(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${this.path}${this.popular}${this.authentication}` + apiKey);
  }

  getTheaters(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${this.path}${this.theaters}${this.authentication}` + apiKey);
  }
}