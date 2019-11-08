class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class _Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue (data) {
    const newNode = new _Node(data);
    if (this.first === null) {
      this.first = newNode
    }
    if (this.last) {
      newNode.prev = this.last
      this.last.next = newNode
    }
    this.last = newNode
  }

  dequeue () {
    if (this.first === null) {
      return;
    }
    const node = this.first.value;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node;
  }
}

function main() {
  const starTrekDLQ = new _Queue();
  starTrekDLQ.enqueue('Kirk')
  starTrekDLQ.enqueue('Uhara')
  starTrekDLQ.enqueue('Sulu')
  starTrekDLQ.enqueue('Checkov')
  console.log(starTrekDLQ.first.value)
}
main()