import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  message: string = 'Please start or choose role';
  first: boolean = true; //true-player1, X; false-player2, O;

  constructor() { }

  ngOnInit(): void {
  }

}
