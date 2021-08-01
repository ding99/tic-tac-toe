import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  level: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any){
    this.level = event.target.value;
  }
}
