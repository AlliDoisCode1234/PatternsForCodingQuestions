

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    print_list() {
        let temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.value}`)
        }
        console.log();
    }
}

const reverse = head => {
    let current = head,
        previous = null;
    while (current !== null) {
        next = current.next; // temp store the next node
        current.next = previous; // reverse the current node
        previous = current; // before we move to the next node, point previous to the current node
    }
    return previous;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
let result = reverse(head);
process.stdout.write('Nodes of reversed LinkedList are: ')
result.print_list();