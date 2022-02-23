import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {


  src =
    [
       "../../assets/dinner/shop-tab5-1.jpg",
       "../../assets/dinner/pp-shop-tab8-500x752.jpg",
       "../../assets/dinner/pp-m_item51-500x750.jpg",
    ];
  title =
    [
      "mini steak",
      "kebda-liver",
      "chicken Pizza",
      
    ]
  price =
    [
      "125",
      "45",
      "110",
      

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
