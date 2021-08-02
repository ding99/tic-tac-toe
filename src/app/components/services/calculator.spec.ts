import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { Calculator } from './calculator';

describe('Calculator', () => {

  let cal: Calculator;
  
  beforeEach(() => {
    cal = new Calculator();
  });

  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });

  it('The result should be that player1 won', fakeAsync(() => {
    let player1 = 1, player2 = 2;
    let won = 1, lost = 2;

    //player1 won / player2 lost
    let data = [1,1,1,0,0,2,2,0,2];
    expect(cal.getResults(data, player1)).toBe(won);
    expect(cal.getResults(data, player2)).toBe(lost);
  }));

  it('The result should be that draw', fakeAsync(() => {
    let player1 = 1, player2 = 2;
    let draw = 0;

    //draw
    let data = [0,1,1,0,0,2,2,0,0];
    expect(cal.getResults(data, player1)).toBe(draw);
    expect(cal.getResults(data, player2)).toBe(draw);
  }));

});
