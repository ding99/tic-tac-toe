import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  first: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onFirst(value: boolean): void{
    this.first = value;
  }
}
