import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {
  text: string;
  enable: boolean;

  @Input() player: number = 1;
  @Output() buttonClicked: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.text = '';
    this.enable = true;
   }

  ngOnInit(): void {
  }

  onClick($event: any){
    this.text = this.player == 1 ? 'X' : 'O';
    this.enable = false;
    this.buttonClicked.emit($event);
  }
}
