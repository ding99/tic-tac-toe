import { Component, OnInit } from '@angular/core';
import { Calculator } from '../services/calculator';
import { MarkComponent } from '../buttons/mark/mark.component';

@Component({
  selector: 'game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  started: boolean;
  message: string;
  first: boolean; //true-player1, X; false-player2, O;
  marks: number[]; // 0-none, 1-player1, 2-player2;
  step: number;
  end: boolean;
  calculator: Calculator;

  constructor() {
    this.calculator = new Calculator();
    this.started = true;
    this.message = 'Please start or choose role';
    this.first = true; 
    this.marks = [9];
    this.end = false;
    this.step = 0;

    this.init();
   }

   private init(): void {
    for(let i = 0; i < 9; i++) {
      this.marks[i] = 0;
    }

    this.end = false;
    this.step = 0;
    this.message = '';
  }

  ngOnInit(): void {
  }

  onClick(position: number): void{
    this.marks[position] = 2;
    this.getResult(true);
  }

  getResult(first: boolean): void {
    let res = this.calculator.getResult(this.marks, first ? 1: 2);

    if(res > 0 || this.step > 7)
      this.end = true;

    this.display(res);

    if(!this.end)
     this.calculator.getPosition(this.marks, 2, 1);
  }

  display(result: number): void {
   
    if(result == 1)
          this.message = "YOU LOST!";
    else if(result == 2)
      this.message = "YOU WIN!";
    else if(this.step >= 8)
      this.message = "DRAW!";

    this.step++;

    if(this.end){
      //TODO: update parents
    }
  }

}
