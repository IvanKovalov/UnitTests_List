class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
        this.number;
    }
}


class List  {
    constructor (){
        this.head = null;
        this.lenght = 0;
        this.start = null;
    }
    add (value)  {
        const node = new Node(value),
        currentNode = this.head;
        if (!currentNode) {
            node.number = this.lenght;
            this.head = node;
            this.start = this.head;
            this.lenght++;
            
        }
        else{
            node.prev = currentNode; 
            node.number = this.lenght;
            currentNode.next = node;
            this.head = node;
            this.lenght++;
            
        }
    }

    addAtPosition (value, number)  {
        number > this.lenght || number < 0 ? console.log('you pin wrong number') : 1;
        let currentNode = this.start;
        let prevNode = this.head;
        while (currentNode) {
            if (currentNode.number === number){
                const newNode = new Node(value);
                prevNode.next = newNode;
                currentNode.prev = newNode;
                newNode.next = currentNode;
                newNode.prev = prevNode;
                newNode.number = number;
                this.lenght++;
               
                while(currentNode){
                    currentNode.number++;
                    currentNode = currentNode.next;
                }
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    deleteAtPosition  (number)  {
        number > this.lenght || number < 0 ? console.log('you pin wrong number') : 1;
        let currentNode = this.start;
        let prevNode = this.head;
        while (currentNode) {
            if (currentNode.number === number){
                prevNode.next = currentNode.next;
                let nextNode = currentNode.next;
                if(number !== this.lenght - 1)
                nextNode.prev = currentNode.prev;
                this.lenght--;
                currentNode = null;
                while(nextNode){
                    nextNode.number--;
                    nextNode = nextNode.next;
                }
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    deleteByValue  (value)  {
        
        let currentNode = this.start;
        let prevNode = this.head;
        while (currentNode) {
            if (currentNode.value === value){
                prevNode.next = currentNode.next;
                let nextNode = currentNode.next
                nextNode.prev = currentNode.prev;
                this.lenght--;
                currentNode = null;
                currentNode = nextNode;
                while(nextNode){
                    nextNode.number--;
                    nextNode = nextNode.next;
                }
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    getAtPosition  (number)  {
        number > this.lenght || number < 0 ? console.log('you pin wrong number') : 1;
        let currentNode = this.start;
        while (currentNode) {
            if (currentNode.number === number){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    lenghtOfList  ()  {
        return this.lenght;
    }

    clone  ()  {
        const list2 = new List();
         let currentNode = this.start;
         while (currentNode) {
             list2.add(currentNode.value)
             currentNode = currentNode.next;
         }
        return list2;
    }

    getByEnd  (value) {
        let currentNode = this.start;
        let searchNode;
        while (currentNode) {
            if (currentNode.value === value){
                searchNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        if(searchNode){
            return searchNode;
        }
        else{
            return -1;
        }
    }

    getByHead (value) {
        let currentNode = this.head;
        let searchNode;
        while (currentNode) {
            if (currentNode.value === value){
                searchNode = currentNode;
                break;
            }
            currentNode = currentNode.prev;
        }
        if(searchNode){
            return searchNode;
        }
        else{
            return-1;
        }
    }

    clear () {
        let currentNode = this.start;
        while (this.lenght !== 0) {         
                currentNode.prev = null;
                currentNode = currentNode.next; 
                this.lenght--;
                if (this.lenght === 0){
                    this.start = null;
                    this.head = null;
                } 
        }
    }

    extend (listToExtend) {
        let extendNode = listToExtend.start;
        while (extendNode) {
            const node = new Node(extendNode.value),
            currentNode = this.head;
            node.prev = currentNode; 
            node.number = this.lenght;
            if(currentNode){
            if(currentNode.next)
            currentNode.next = node;
            }
            this.head = node;
            if(this.lenght === 0){
                this.start = node;
            }
            this.lenght++;
            extendNode = extendNode.next;
        }
    }

    reverse () {
        let currentNode = this.head;
        let searchNode;
        this.lenght = 0;
        while (currentNode) {
            const node = new Node(currentNode.value),
            searchNode = this.head;
            node.prev = searchNode; 
            node.number = this.lenght;
            searchNode.next = node;
            this.head = node;
            currentNode = currentNode.prev;
            this.lenght ++;
        }
        let counter = this.lenght;
        currentNode = this.start;
        while(counter !== 0) {         
                currentNode.prev = null;
                currentNode = currentNode.next; 
                counter--;
                if (counter === 1){
                    this.start = currentNode.next;
                    currentNode.prev = null;
                } 
        }
    }

}


const list = new List();
list.add(2);
//list.add(5);
// list.add(3);
// list.add(4);
// list.add(5);
// list.addAtPosition('nice', 1);
// list.addAtPosition('nice', 3);
// list.deleteByValue('nice');
// list.getAtPosition(2);
const listNew = list.clone();
 listNew.clear();
// //list.getByEnd(5);
// //list.getByHead(5);
// const list2 = new List();
// list2.add(8);
// list.extend(list2);
// list.reverse();
//console.dir(listNew);
console.log(listNew);

module.exports = List;