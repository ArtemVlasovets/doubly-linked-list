const Node = require('./node');

class LinkedList {
  
    constructor() {
      this.length = 0;
      this._tail = null;
      this._head = null;
    }

    append(data) {
      let element = new Node(data);
      if (this.length){
        this._tail.next = element;
        element.prev = this._tail;
        this._tail = element;
      } else {
        this._head = element;
        this._tail = element;
        
      }
      this.length++;
      return this;
    }

    head() {
      if (this._head) {
        return this._head.data;
      } else {
        return null;
      }
    }

    tail() {
      if (this._tail) {
        return this._tail.data;
      } else {
        return null;
      }
    }

    at(index) {
      if (this.length == 0){
        return null;
      }
      let number = 0;
      let cur = this._head;
      while (number < index){
        number++;
        cur = cur.next;
      }
      return cur.data;
    }

    insertAt(index, data) {
      let element = new Node(data);
      if(index == 0){
        element.next = this._head;
        this._head = element;
        return this;
      }
      
      if(index >= this.length - 1){
        element.prev = this._tail;
        this._tail = element;
      }
      
      let number =0;
      let cur = this._head;
      while(number < index){
        number++;
        cur = cur.next;
      }
      element.next = cur;
      element.prev = cur.prev;
      cur.prev.next = element;
      cur.prev = element;
      return this;
    }

    isEmpty() {
      if(this._head == null){
        return true;
    } else {
        return false;
      }
    }

    clear() {
      this.length = 0;
      this._head = null;
      this._tail = null;
      return this;
    }

    deleteAt(index) {
      if (index > this.length - 1) {
          return this;
        }
      let cur = this._head;
      let number = 0;
      while (index > number) {
          cur = cur.next;
          number++
        }
      if(cur.prev != null) {
        if(cur.next != null) {
          cur.prev.next = cur.next;
          cur.next.prev = cur.prev;
          this.length--;
          return this;
        }
        cur.prev.next = null;
        this.length--;
        this._tail = cur.prev;
        return this;
      }
      if(cur.next == null) {
        this.clear();
        return this;
      }else{
        cur.next.prev = null;
        this._head = cur.next;
        this.length--;
        return this;
      }
    }

    reverse() {
      if(this.length == 0 || this.length == 0) {
        return
      }
        let cur = this._head;
        while(cur != null){
          let temp = cur.prev;
          cur.prev = cur.next;
          cur.next = temp;
          cur = cur.prev;
        }
        cur = this._head;
        this._head = this._tail;
        this._tail = cur;
        return this;
      }

    indexOf(data) {
      let cur = this._head;
      let number = 0;
      while(number < this.length) {
        if(cur.data == data){
          return number;
        }
        number++;
        cur = cur.next;
      }
      return -1;
    }
}

module.exports = LinkedList;