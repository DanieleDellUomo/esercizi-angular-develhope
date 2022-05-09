import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/interface-beer';
import { BeerArrayService } from '../services/beer-array.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  selectedBeers: Beer[] = [];
  all!: Beer[];
  name: string = '';
  type: string = '';
  price: number = 0;
  

  constructor(private sbeer: BeerArrayService) {}

  ngOnInit(): void {
    this.sbeer.getArray().subscribe(
      data => this.all = data
    )
  }

  checkType(): void {
    const beerId = this.all.find(beer => beer.name === this.name)?.id;
    this.sbeer.getBeer(beerId!).subscribe((data) => {
      this.type = data.type
    })
  }

  getBeerF(): void {
    const beerId = this.all.find(beer => beer.name === this.name)?.id;
    this.sbeer.getBeer(beerId!).subscribe((data) => {
      if (this.selectedBeers.includes(data)) {
        return this.selectedBeers
      }
      this.selectedBeers.push(data);
      return this.selectedBeers
    })
  }
}

