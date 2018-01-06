/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  let head = null;
  let tail = null;
  let length = 0;

  // create new node
  function newNode(data) {
    length++;
    return {
      value: data,
      next: null
    }
  };

  // getHead
  function getHead() {
    return head;
  };

  // getTail
  function getTail() {
    return tail;
  };

  // add(value)
  function add(value) {
    
    // create a new node
    let node = new newNode(value);

    // when list is empty, assign first node to head and tail
    if (head === null) {
      head = node;
      tail = node;
      return node;
    }
    
    // when list is not empty, append new node
    if (head !== null) {
      tail.next = node;
      tail = node;
      return node;
    }
    
    return node;
  };

  // get(number)
  function get(num) {
    
    // start at head
    // check if value matches what the search is for
    // if not found, move to next node via .next
    // repeat until .next = null

    let current = head;
    let index = 0;
    
    while (current !== null) {
      if (index === num) {
        return current;
      } else {
        index++;
        current = current.next;
      }
    }
    // if current === null return false
    return false;
  };

  // remove(number)
  function remove() {

  };

  // insert(value, number)
  function insert() {

  };

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }

}
