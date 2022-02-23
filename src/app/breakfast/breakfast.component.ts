import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  breakFastMeals: any = [];

  constructor() {
    this.breakFastMeals = [
      {
        id: 1,
        src: "../../assets/breakfast/shop-tab7-1.jpg",
        title: "ultimate cheese",
        price: "60",
      },
      {
        id: 2,
        src: "../../assets/breakfast/shop-tab10-1.jpg",
        title: "light steaks",
        price: "95",
      },
      {
        id: 3,
        src: "../../assets/breakfast/shop-tab14-1.jpg",
        title: "caesar salad",
        price: "110",
      },
      {
        id: 4,
        src: "../../assets/breakfast/pp-shop-tab9-500x752.jpg",
        title: "caesar salad",
        price: "95",
      }
    ]
  }

  ngOnInit(): void {
  }

}
