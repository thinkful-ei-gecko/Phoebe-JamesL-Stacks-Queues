// ================================================================================
// 6. Create a queue using Singly linked list

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

// ================================================================================
//9. Square dance pairing

const dancers = [
	"f Jane",
	"m Frank",
  "m John",
  "m Sherlock",
	"f Madonna",
	"m David",
	"m Christopher",
	"f Beyonce"
];

/**
 * @function squareDance
 * @param {arr} dancers 
 */
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

/**
 * @function squareDanceStr
 * @param {str} dancer 
 * @param {queue} queue 
 */
function squareDanceStr(dancer, queue) {
  //If no one of the opposite gender is waiting, add them to the queue
  //if someone of the opposite gender is waiting, pop someone from the opp gender and return both namea
	if (queue.first === null) {
    queue.enqueue(dancer);
  } else if (dancer[0] !== queue.first.value[0]) {
    let partner = queue.dequeue();
    console.log(dancer.slice(2) + ' + ' + partner.slice(2));
  } else {
    queue.enqueue(dancer);
  }
  return queue;
}

// ================================================================================
//10. The Ophidian Bank 
function ophidian(queue) {
  // while there are people in the queue
  while (queue.first !== null) {
    let lastInLine = false;
  
    // every third person must go back in line because of wrong paperwork
    for (let i=1;i<4;i++) {
      console.log(`Served ${queue.first.value}`);
  
      //before dequeueing, check if this was the last node. if so, exit the loop.
      if (lastInLine) {
        return;
      }
      queue.dequeue();

      //sets lastInLine to true if last in line
      if (queue.first.next === null) {
        lastInLine = true;
      }
    }

    console.log(`${queue.first.value} had the wrong paperwork and enqueues`)  
    queue.enqueue(queue.dequeue());
  }
}

function main() {
	// const starTrekQ = new Queue();
	// starTrekQ.enqueue("Kirk");
	// starTrekQ.enqueue("Spock");
	// starTrekQ.enqueue("Uhura");
	// starTrekQ.enqueue("Sulu");
	// starTrekQ.enqueue("Checkov");
	// console.log(JSON.stringify(starTrekQ))
	// console.log(peek(starTrekQ))
	// display(starTrekQ)
	// console.log(isEmpty(starTrekQ))
  // console.log(remove("Spock", starTrekQ));
  // console.log(squareDance(dancers));
  // const dancingQueue = new Queue();
  // console.log(dancers.forEach(dancer => squareDanceStr(dancer, dancingQueue)));
  // ophidian(starTrekQ);
}
main();
