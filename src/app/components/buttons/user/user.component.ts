import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  first: boolean;

  constructor() {
    this.first = true;
   }

  ngOnInit(): void {
  }

  onFirst(value: boolean): void{
    this.first = value;
  }
}
