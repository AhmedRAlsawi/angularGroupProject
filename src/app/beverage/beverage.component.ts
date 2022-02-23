import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {

  src =
  [
     "../../assets/beverage/watermelon-juice-fresh-800x800.png",
     "../../assets/beverage/breakfast-hot-drink-with-orange-and-Oolong-tea-800x800.jpg",
     "../../assets/beverage/moroccan_mojito-thumbnail-800x800.jpg",
         
    
  ];
title =
  [
    "waterelon juice",
    "lemon tea",
    "mojito",
    
  ]
price =
  [
    "45",
    "20",
    "65",

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
