class Node {
    private item: number;
    private next: Node | null;

    constructor(item: number) {
        this.item = item;
        this.next = null;
    }

    public setNext(item: Node): void {
        this.next = item;
    }

    public getNext(): Node | null {
        return this.next;
    }

    public getItem(): number {
        return this.item;
    }
}

class LinkedList {
    private head: Node | null = null;
    private tail: Node | null = null;
    private count: number = 0;

    public add(value: number) {
        let node = new Node(value);
        this.count++;

        if (this.tail == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.setNext(node);
            this.tail = node;
        }
    }

    public contains(value: number): boolean {
        let top = this.head;
        while (top != null) {
            if (top.getItem() === value)
                return true;
            top = top.getNext();
        }
        return false;
    }

    public size(): number {
        return this.count;
    }

    public first(): number {
        return this.head == null ? 0 : this.head.getItem();
    }
}


export class Calculator {

    //return: 0-draw, 1-win, 2-lost
    //marks: 9 items, 0-empty, 1-player1, 2-player2
    //key: 1-player1, 2-player2
    getResults(marks: number[], key: number): number {
        return this.won(marks, key) ? 1 : this.won(marks, key === 1 ? 2 : 1) ? 2 : 0;
    }

    private won(marks: number[], key: number): boolean {

        for (let i = 0; i < 3; i++) {
            //column
            if (marks[i] === key && marks[i + 3] === key && marks[i + 6] === key)
                return true;
            //row
            if (marks[i * 3] === key && marks[i * 3 + 1] === key && marks[i * 3 + 2] === key)
                return true;
        }

        //diagonal
        if (marks[2] == key && marks[4] == key && marks[6] == key)
            return true;
        if (marks[0] == key && marks[4] == key && marks[7] == key)
            return true;

        return false;
    }

    findPosition(marks: number[], key: number, level: number): number {
        if (level > 0) {
            let block: LinkedList = new LinkedList();
            let space: LinkedList = new LinkedList();
            let n: number;

            for (let i = 0; i < 3; i++) {
                if ((n = this.checkPath(marks, [i, i + 3, i + 6], block, space, key)) > 0) {
                    if(level > 1)
                        return n;
                }
                if ((n = this.checkPath(marks, [i * 3, i * 3 + 1, i * 3 + 2], block, space, key)) > 0) {
                    if(level > 1)
                        return n;
                }
            }
            if ((n = this.checkPath(marks, [2, 4, 6], block, space, key)) > 0) {
                if(level > 1)
                return n;
    }
            if ((n = this.checkPath(marks, [0, 4, 8], block, space, key)) > 0) {
                if(level > 1)
                return n;
    }
            if (block.size() > 0)
                return block.first();
            if (space.size() > 0)
                return space.first();
        }

        if (marks[4] === 0) return 4;
        if (marks[0] === 0) return 0;
        if (marks[2] === 0) return 2;
        if (marks[6] === 0) return 6;
        if (marks[8] === 0) return 8;
        if (marks[1] === 0) return 1;
        if (marks[3] === 0) return 3;
        if (marks[5] === 0) return 5;
        return 7;
    }

    private checkPath(source: number[], positions: number[], block: LinkedList, space: LinkedList, key: number): number {

        let zero = 0, self = 0, oppo = 0;
        let ret = 0, mid;

        for (let i = 0; i < 3; i++) {
            if ((mid = source[positions[i]]) == key)
                self++;
            else if (mid === 0) {
                zero++;
                ret = positions[i];
            } else
                oppo++;
        }

        if (zero === 1) {
            if (self === 2)
                return ret;
            if (oppo === 2)
                block.add(ret);
        }

        if (zero === 2 && self === 1)
            space.add(ret);

        return -1;
    }

}
