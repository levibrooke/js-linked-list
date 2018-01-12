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
    let node = newNode(value);

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
  function remove(num) {

    // find the node you are searching for
    // keep track of previous node
    // when found, update previous node's .next to point to the .next of the node to the right of target node
    // delete target

    let current = head;
    let index = 0;
    let previous = null;

    while (current !== null) {    
      if (num === index) {
        
        // node is head
        if (num === 0) {
          head = head.next;
        }

        // node is tail
        else if (current.next === null) {
          previous.next = null;
          tail = previous;
        }

        // node is somewhere in between
        else {
          previous.next = current.next;
        }
      }
        previous = current;
        current = current.next;
        index++;
    }
    return false;
  };

  // insert(value, number)
  function insert(value, index) {
    // find the position in list where you want to insert new node after (index node)
    // update the .next of new node to point to the node to right
    // update .next of the index node to point to new node

    let node = newNode(value);
    let current = get(index);
    let getPrevious = get(index - 1);

    // if empty or larger than list's length
    if (current === false) {
      return false;
    }

    // if index is head
    else if (index === 0) {
      node.next = current;
      return head = node;
    } 
    
    // else
    else {
      node.next = current;
      return getPrevious.next = node;
    }
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
