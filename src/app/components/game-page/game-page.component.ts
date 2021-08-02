import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  message: string;
  first: boolean; //true-player1, X; false-player2, O;
  marks: number[]; // 0-none, 1-player1, 2-player2;

  constructor() {
    this.message = 'Please start or choose role';
    this.first = true; 
    this.marks = [9];
   }

  ngOnInit(): void {
  }

}
