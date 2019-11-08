// ======================================================
// 1. Create a stack class

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

// ======================================================
// 2. Useful methods for a stack

function peek(stack) {
  return stack.top.data
}

function isEmpty(stack) {
  if(stack.top === null) {
    return true
  }
  return false
}

function display(stack) {
  let curr = stack.top
  while(curr) {
    console.log(curr.data)
    curr = curr.next
  }
}

// ======================================================
// 3. Check for palindromes using a stack

function is_palindrome(s) {
  let stack = new Stack()
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let revStr = ''
  for(let i = 0; i<s.length; i++) {
    stack.push(s[i])
  }
  while(stack.top !== null) {
    revStr += stack.pop()
  }
  if(revStr === s) {
    return true
  }
  return false
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// ======================================================
//  4. Matching parentheses in an expression

function matchParenth(str) {
  let stack = new Stack()
  for(let i =0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
      stack.push({value: str[i], index: i})
    }
    if(str[i] === ')') {
      if(stack.top === null) {
        return `Failed at char ${i+1}`
      }
      let popped = stack.pop()
      if(popped.value !== '(') {
        return `Failed at char ${i+1}`
      }
    }
    if(str[i] === ']') {
      if(stack.top === null) {
        return `Failed at char ${i+1}`
      }
      let popped = stack.pop()
      if(popped.value !== '[') {
        return `Failed at char ${i+1}`
      }
    }
    if(str[i] === '}') {
      if(stack.top === null) {
        return `Failed at char ${i+1}`
      }
      let popped = stack.pop()
      if(popped.value !== '{') {
        return `Failed at char ${i+1}`
      }
    }
  }
  return stack.top === null ? true : `Open parenth at char ${stack.top.data.index + 1}`
}

// console.log(matchParenth('([}}{}])'))

function sortStack(stack) {
  let tempStack = new Stack()
  tempStack.push(stack.pop())
  let tempVar = stack.pop()
  while(stack.top !== null) {
    if(stack.top) {
      if(tempVar > tempStack.top.data) {
        tempStack.push(tempVar)
        tempVar = stack.pop()
      }
      else{
        stack.push(tempStack.pop())
        // tempStack.push(tempVar)
      }
    }
  }
  tempStack.push(tempVar)
  while(tempStack.top !== null) {
    stack.push(tempStack.pop())
  }
  display(stack);
}

function main() {
  let starTrek = new Stack()

  starTrek.push(10)
  starTrek.push(3)
  starTrek.push(8)
  starTrek.push(7)
  starTrek.push(6)
  starTrek.push(9)
  starTrek.push(2)
  sortStack(starTrek)
}
console.log(main())