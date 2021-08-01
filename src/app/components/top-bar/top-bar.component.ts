import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../buttons/user/user.component';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
