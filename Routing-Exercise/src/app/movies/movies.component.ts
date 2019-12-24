import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import IMovie from '../models/IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private popular: Array<IMovie>;
  private theaters: Array<IMovie>;
  private kids: Array<IMovie>;
  private bestDrama: Array<IMovie>;
  private searchResult: Array<IMovie>;
  private isSearched: boolean;

  constructor(private moviesService: MoviesService) { }

  search(query) {
    this.moviesService.findAMovie(`${query['search']}`).subscribe(result => {
      this.searchResult = result;
      this.isSearched = true;
    });
  }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => this.popular = data);
    this.moviesService.getTheaters().subscribe(data => this.theaters = data);
    this.moviesService.getKidsMovies().subscribe(data => this.kids = data);
    this.moviesService.getBestDrama().subscribe(data => this.bestDrama = data);
  }

}
