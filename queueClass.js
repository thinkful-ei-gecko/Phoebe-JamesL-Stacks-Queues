class _Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(data) {
		const newNode = new _Node(data);
		if (this.first === null) {
			this.first = newNode;
		}
		if (this.last) {
			this.last.next = newNode;
		}
		this.last = newNode;
	}

	dequeue() {
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

function peek(queue) {
	if (queue.first !== null) {
		return queue.first.value;
	} else {
		return null;
	}
}

function isEmpty(queue) {
	if (queue.first === null) {
		return true;
	}
	return false;
}

function display(queue) {
	let curr = queue.first;
	while (curr !== null) {
		console.log(curr.value);
		curr = curr.next;
	}
}

function remove(data, queue) {
	const tempQ = new Queue();
	while (queue.first !== null) {
		if (queue.first.value === data) {
			queue.dequeue();
		}
		tempQ.enqueue(queue.dequeue());
	}
	while (tempQ.first !== null) {
		queue.enqueue(tempQ.dequeue());
	}
	display(queue);
}

function squareDance(array) {
	const spares = new Queue();
	//create a tempVar that compares the incoming var; if !gender then
	//start w/ spare queue, send in dancers list

	spares.enqueue(dancer);
	//if genders don't match then let the partner equal spare.dequeue
}

function squareDance(dancers) {
	let spares = new Queue();
	for (let i = 0; i < dancers.length; i++) {
		if (spares.first === null) {
			spares.enqueue(dancers[i]);
		} else if (dancers[i][0] !== spares.first.value[0]) {
			let partner = spares.dequeue();
			console.log(`${dancers[i]} + ${partner}`);
		} else {
			spares.enqueue(dancers[i]);
		}
	}
	display(spares);
}

let dancers = [
	"f jane",
	"m frank",
	"m john",
	"f madonna",
	"m david",
	"m mike",
	"f ashley"
];

console.log(squareDance(dancers));

// function squareDanceSingle(dancer, maleQ, womenQ) {
//   //If no one of the opposite gender is waiting, add them to the queue
//   //if someone of the opposite gender is waiting, pop someone from the opp gender and return both namea
// 	if (dancer.gender === male) {
// 		if (womenQ.first === null) {
// 			//add male to male queue
//       maleQ.enqueue(dancer);
//       return;
// 		}
// 	}
// 	if (dancer.gender === woman) {
// 		if (maleQ.first === null) {
// 			//add male to male queue
//       maleQ.enqueue(dancer);
//       return;
// 		}
// 	}
// }

function ophidian(queue) {
	while (queue.first !== null) {
		let counter = 0;
		while (counter < 4 && queue.first !== null) {
      console.log(`Served ${queue.first.value}`);
      queue.dequeue();
      counter++;
    }
      console.log(`${queue.first.value} had the wrong paperwork and enqueues`)  
    
    queue.enqueue(queue.dequeue()) 
    if (queue.first.next === null) {
      console.log(`Served ${queue.first.value}`);
      queue.dequeue();
      console.log('Everyone was served')
    }
  }
}

function main() {
	const starTrekQ = new Queue();
	starTrekQ.enqueue("Kirk");
	starTrekQ.enqueue("Spock");
	starTrekQ.enqueue("Uhura");
	starTrekQ.enqueue("Sulu");
	starTrekQ.enqueue("Checkov");
	// console.log(JSON.stringify(starTrekQ))
	// console.log(peek(starTrekQ))
	// display(starTrekQ)
	// console.log(isEmpty(starTrekQ))
  // console.log(remove("Spock", starTrekQ));
  ophidian(starTrekQ);
}
main();
