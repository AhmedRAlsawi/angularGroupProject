import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  src =
    [
       "../../assets/lunch/shop-tab1-1.jpg",
       "../../assets/lunch/shop-tab11-1.jpg",
       "../../assets/lunch/shop-tab12-1.jpg",
       "../../assets/lunch/pp-shop-tab3-500x752.jpg",
       "../../assets/lunch/pp-shop-tab4-500x752.jpg",
       "../../assets/lunch/shop-tab13-1.jpg",
      
    ];
  title =
    [
      "Mexican rips",
      "Juicy burger",
      "Shawrma",
      "chicken rice",
      "french rice",
      "indian shish",
      
    ]
  price =
    [
      "90",
      "120",
      "95",
      "155",
      "145",
      "125",

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
