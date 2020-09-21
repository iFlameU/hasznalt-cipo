import { Component } from '@angular/core';
import {ShoesService} from "./services/shoes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public shoesService: ShoesService
  ) {}
}
