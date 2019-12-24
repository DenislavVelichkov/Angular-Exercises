import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import IMovie from '../models/Imovie';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  private selectedMovie: IMovie;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) =>  {
      let id = params['id'];
      this.movieService.getMovie(id).subscribe(selectedMovie => {
          this.selectedMovie = selectedMovie;
      });
    });
  }

 

}
