// ================================================================================
// 8. Queue implementation using a stack

class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }
  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null)
      return this.top
    }
    const newNode = new _Node(data, this.top)
    this.top = newNode
  }
  pop() {
    const node = this.top
    this.top = node.next
    return node.data
  }
}

class Queue {
  constructor() {
    this.main = new Stack();
    this.temp = new Stack();
  }

  enqueue(value) {
    this.main.push(value);
  }

  dequeue() {
    let curr;
    let node;
    while(this.main.top !== null) {
      if (curr !== undefined) {
        this.temp.push(curr)
      }
      curr = this.main.pop();
    }    
    node = curr;
    while(this.temp.top !== null) {
      this.main.push(this.temp.pop())
    }
    console.log(node);
    return node;
  }
}

function main() {
  const starTrekQStack = new Queue();
  starTrekQStack.enqueue('Kirk')
  starTrekQStack.enqueue('Uhara')
  starTrekQStack.enqueue('Sulu')
  starTrekQStack.enqueue('Checkov')
  starTrekQStack.dequeue()
  console.log(JSON.stringify(starTrekQStack))
}
main()