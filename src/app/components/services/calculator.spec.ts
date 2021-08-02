import { fakeAsync } from '@angular/core/testing';
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
    expect(cal.getResult(data, player1)).toBe(won);
    expect(cal.getResult(data, player2)).toBe(lost);
  }));

  it('The result should be that draw', fakeAsync(() => {
    let player1 = 1, player2 = 2;
    let draw = 0;

    //draw
    let data = [0,1,1,0,0,2,2,0,0];
    expect(cal.getResult(data, player1)).toBe(draw);
    expect(cal.getResult(data, player2)).toBe(draw);
  }));

  it('get position for easy - level 0', fakeAsync(() => {
    let player1 = 1, player2 = 2;
    let level = 0;

    let data = [0,1,1,2,0,2,0,0,0];
    expect(cal.getPosition(data, player1, level)).toBe(4);
    expect(cal.getPosition(data, player2, level)).toBe(4);
  }));

  it('get position for middle - level 1', fakeAsync(() => {
    let player1 = 1, player2 = 2;
    let level = 1;

    let data = [0,1,1,2,0,2,0,0,0];
    expect(cal.getPosition(data, player1, level)).toBe(0);
    expect(cal.getPosition(data, player2, level)).toBe(4);

    data = [1,0,2,0,0,2,0,1,0];
    expect(cal.getPosition(data, player1, level)).toBe(4);
    expect(cal.getPosition(data, player2, level)).toBe(8);
  }));

  it('get position for middle - level 2', fakeAsync(() => {
    let player1 = 1, player2 = 2;
    let level = 2;

    let data = [1,0,2,0,0,2,0,1,0];
    expect(cal.getPosition(data, player1, level)).toBe(8);
    expect(cal.getPosition(data, player2, level)).toBe(8);
  }));

});
