import { Component, OnInit, Input } from '@angular/core';
import IMovie from '../models/Imovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie') movie: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
