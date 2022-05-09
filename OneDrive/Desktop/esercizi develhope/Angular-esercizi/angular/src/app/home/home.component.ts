import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  propertiesRoute: { name: string; endpoint: string }[] = [];
  
  constructor(private http: DataService) { }

  ngOnInit(): void {
    this.http.getAll().subscribe((data) => {
      this.propertiesRoute = Object.entries(data).map((result) => {
        return {
          name: result[0],
          endpoint: result[1].Path,
        };
      });
    });
  }
}
