import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Calculator } from '../services/calculator';
import { MarkComponent } from '../buttons/mark/mark.component';

@Component({
  selector: 'game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  calculator: Calculator;
  level: number;

  marks: number[]; // 0-none, 1-player1, 2-player2;
  step: number;
  message: string;

  started: boolean;
  first: boolean; //true-player1, X; false-player2, O;
  end: boolean;

  @ViewChildren(MarkComponent)
  buttons!: QueryList<MarkComponent>;

  constructor() {
    this.calculator = new Calculator();
    this.level = 2;

    this.marks = [9];
    this.step = 0;
    this.message = 'Please start or choose role';

    this.started = true;
    this.first = true;
    this.end = false;

    this.init();
  }

  private player(){
    return this.first ? 1 : 2;
  }
  private pc(){
    return this.first ? 2 : 1;
  }

  private init(): void {
    for (let i = 0; i < 9; i++)
      this.marks[i] = 0;

    this.step = 0;
    this.message = '';

    this.end = false;
  }

  ngOnInit(): void {
  }

  onClick(position: number): void {
    this.marks[position] = this.player();
    console.log("click 1 (player): " + position);
    this.getResult();

    if (!this.end){
      let index = this.calculator.getPosition(this.marks, this.pc(), this.level);
      this.marks[index] = this.pc();
      console.log("click 2 (pc): " + index);

      let button = (this.buttons.toArray())[index];
      button.text = this.pc() == 1 ? 'X' : 'O';
      button.enable = false;

      this.getResult();
    }
  }

  getResult(): void {
    let res = this.calculator.getResult(this.marks, this.player());
    console.log("res " + res);
    if (res > 0 || this.step > 7)
      this.end = true;

    this.display(res);
  }

  display(result: number): void {

    if (result == 1)
      this.message = "You Won!";
    else if (result == 2)
      this.message = "You Lost!";
    else if (this.step > 7)
      this.message = "Draw!";

    this.step++;

    if (this.end)
      this.buttons.forEach(mark => mark.enable = false);
  }

}
