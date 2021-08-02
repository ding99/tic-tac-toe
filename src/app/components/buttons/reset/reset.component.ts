import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  text: string;

  constructor() {
    this.text = 'Start';
   }

  ngOnInit(): void {
  }

  onStart(): void {
    this.text = this.text === 'Reset' ? 'Start' : 'Reset';
  }

}
