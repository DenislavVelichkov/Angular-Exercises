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
  private kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  private bestDrama: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
  private movie: string = 'movie/'
  private movieAuth: string = '?api_key='
  private authentication: string = '&api_key=';


  constructor(private http: HttpClient) { }

  getPopular(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${this.path}${this.popular}${this.authentication}` + apiKey);
  }

  getTheaters(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${this.path}${this.theaters}${this.authentication}` + apiKey);
  }

  getKidsMovies(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${this.path}${this.kids}${this.authentication}` + apiKey);
  }

  getBestDrama(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${this.path}${this.bestDrama}${this.authentication}` + apiKey);
  }

  getMovie(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.path}${this.movie}` + id + `${this.movieAuth}` + apiKey);
  }
}