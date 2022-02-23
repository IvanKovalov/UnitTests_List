const assert = require('assert').strict;
const { listenerCount } = require('process');
const { start } = require('repl');
const List = require('./TestList');


describe("List test", function() {
    it("should be able to return length of list", function() {
        const list = new List();
        assert.strictEqual(list.lenghtOfList(), 0);
    });

    it("add one element to list", function() {
        const list = new List();
        list.add('wow');
        const addedNode = JSON.stringify(list);
        assert.strictEqual(addedNode, '{"head":{"value":"wow","next":null,"prev":null,"number":0},"lenght":1,"start":{"value":"wow","next":null,"prev":null,"number":0}}');
    });

    it("should be able to return position of added element", function() {
        const list = new List();
        list.add('wow');
        list.add('one');
        list.addAtPosition('two',1);
        const firstNode = list.start;
        const searchNode = firstNode.next;
        const thirdNode = searchNode.next;
        assert.strictEqual(searchNode.number, 1);
        assert.strictEqual(thirdNode.number,2);
    });

    it("should be able to return deleted element on position", function() {
        const list = new List();
        list.add("first");
        list.add("second");
        list.deleteAtPosition(1);
        const firstNode = list.start;
        const deleteNode = firstNode.next;
        assert.strictEqual(list.lenghtOfList(), 1);
        assert.strictEqual(deleteNode, null);
    });

    it("should be able to delete element by value", function() {
        const list = new List();
        list.add('wow');
        list.add('one');
        list.add('two');
        list.deleteByValue('one');
        assert.deepStrictEqual(list.getByHead('one'), -1);
    });

    it("should be able to return element by position", function() {
        const list = new List();
        list.add('wow');
        list.add('one');
        const getNode = list.getAtPosition(1);
        assert.deepStrictEqual(getNode.value,'one');
    });

    it("should be able to return first search element by head", function() {
        const list = new List();
        list.add('wow');
        list.add('one');
        list.add('two');
        list.add('one');
        const searchNode = list.getByHead('one');
        assert.strictEqual(searchNode.number, 3);
    });


    it("should be able to return first search element by end", function() {
        const list = new List();
        list.add('wow');
        list.add('one');
        list.add('two');
        list.add('one')
        const searchNode = list.getByEnd('one');
        assert.strictEqual(searchNode.number, 1);
    });

    it("should be able to return clone list", function() {
        const list1 = new List();
        list1.add('wow');
        const list2 = list1.clone();
        assert.deepStrictEqual(list1, list2);
    });

    it("should be able to return extend list", function() {
        const list1 = new List();
        const list2 = new List();
        list2.add(8);
        list1.extend(list2);
        const list3 = new List();
        list3.add(8)
        assert.deepStrictEqual(list1, list3);
    });

    it("check reverse list", function() {
        const list1 = new List();
        list1.add('1');
        list1.add('2');
        const head = list1.head;
        list1.reverse();
        const newEnd = list1.start;
        assert.deepStrictEqual(head.value, newEnd.value);
    });

    it("should be able to check clear list", function() {
        const list1 = new List();
        list1.add('1');
        list1.add('2');
        list1.clear();
        const  empty =  {
            head: null,
            lenght: 0,
            start: null,

        }
        assert.deepStrictEqual(Object.values(list1), Object.values(empty));
    });


});


