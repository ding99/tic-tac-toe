import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  text: string = 'Start';

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.text = 'Reset';
  }

}
