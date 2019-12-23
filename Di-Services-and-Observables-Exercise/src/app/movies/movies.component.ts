import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import IMovie from '../models/Imovie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private popular: Array<IMovie>;
  private theaters: Array<IMovie>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => this.popular = data);
    this.moviesService.getTheaters().subscribe(data => this.theaters = data);
  }

}
