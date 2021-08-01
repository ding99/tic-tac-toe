export class Calculator {

    //return: 0-draw, 1-win, 2-lost
    //marks: 9 items, 0-empty, 1-player1, 2-player2
    //key: 1-player1, 2-player2
    getResults(marks: [], key: number): number{
        return 0;
    }

    private won(marks: number[], key: number): boolean {

        for(let i = 0; i <3; i++){
            //row
            if(marks[i * 3] == key && marks[i * 3 + 1] == key && marks[i * 3 + 2] == key)
                return true;
            //column
            if(marks[i] == key && marks[i + 3] == key && marks[i + 6] == key)
                return true;
        }


        //diagonal
        if(marks[0] == key && marks[4] == key && marks[7] == key)
            return true;
        if(marks[2] == key && marks[4] == key && marks[6] == key)
            return true;

        return false;
    }

}
