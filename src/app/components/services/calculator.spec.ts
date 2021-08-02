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

  it('next postion for easy - level 0', fakeAsync(() => {
    let player1 = 1, player2 = 2;
    let level = 0;

    let data = [0,1,1,2,0,2,0,0,0];
    expect(cal.findPosition(data, player1, level)).toBe(4);
    expect(cal.findPosition(data, player2, level)).toBe(4);
  }));

  it('next postion for middle - level 1', fakeAsync(() => {
    let player1 = 1, player2 = 2;
    let level = 1;

    let data = [0,1,1,2,0,2,0,0,0];
    expect(cal.findPosition(data, player1, level)).toBe(4);
    expect(cal.findPosition(data, player2, level)).toBe(0);
  }));
});
