# ping_pong
https://abrhamtesfaye0001.github.io/ping_poing/

<!-- # 1. What are tagged Templates? 
Tagged templates are one of the new features of es6 that takes in a mix of strings and variables and formats them and returns them based on conditions that we apply.
# 2.Explain and demonstrate first class function
**first class functions**:- they are functions that are treated like any other variable. thus these functions can be passed as arguments to other functions, be assigned to other variables and 			

a.  passing functions arguments

> we can pass es6 functions as function arguments by assigning a
> variable as an argument to the other function and calling that
> variable with a parenthesis.

    add = (x,y)=> x+y;
    	   doMath(a,b,operation){
    			return operation(a,b);
    				}

b.  functions return functions

> es6 enables us to return a function from a function.
```
greetPhrase(phrase){
			return greetperson=(name)=> `${phrase} ${name}`;
				}
	// can be called like
		1) x = greetPhrase("selam")
		   x("abebe")
		2) x = greetPhrase("hello")("world")
```
# 3. Explain and demo closures
> closure gives javascript a means to emulate what most programming languages refer to as private access variables by using self invoking functions which run only once and return a function expression. closure can give the function parent scope. in short variables are protected by the scope of the anonymous function and can only be changed using the function that is the iife.

    function makeCounter() {
		var counter = 0;
	return {
		value: function () {
			return counter;
			},
			increment: function () {
			counter++;
			}
		};
	}
var a = makeCounter();
var b = makeCounter();
a.increment();
console.log(a.value());
console.log(b.value());
# 4. Demonstrate the Reflect API 
	Reflect api is a collection of prebuilt js methods that work on metaprogramming of objects.
   a. In construction and method call,in prototypes  and Reflect and properties 
	
	class Person{
	  constructor(name,age){
	    this.name = name;
	    this.age = age;
	  }
	  getAge(){
	    return this.age;
	  }
	}
	// construction
	let abrham = Reflect.construct(Person,["abrham",21])
 	console.log(abrham)
	// method call
	console.log(Reflect.apply(abrham.getAge,abrham,[]))
	// prototypes
	console.log(Reflect.setPrototypeOf(abrham,{role: "provider"});
	// properties
	console.log(Reflect.has(abrham,"age"));// true
	console.log(Reflect.has(abrham,"weight"));// false
# 5. what is export default? explain with examples
es6 provides us with two ways to export module from a file: named export and default export.unlike named export default export can have only one export per file.
	
	file1.js
	--------------------------------
	// export
	MyComponentOne = ()=>{}
	MyComponentTwo = ()=>{}
	export default MyComponentTwo;
	-------------------------------
	file2.js
	-------------------------------
	import MyComponentTwo from "./file1";
	-------------------------------
on the above code sample we can see that we can only export one module using default export

# 6. what are iterators and generators? explain with examples

> A generator function in JavaScript is a special type of synchronous
> function which is able to stop and resume its execution at will.While
> almost all function do is fire and forget generators stop or resume
> accordingly
> 
> 
> An Iterator is a javascript object that enables us to access items
> from a collection one at a time, while keeping track of its current
> position within that sequence. An Iterator has a next() method that
> returns the next item in the sequence. the next method returns two
> properties done and value

```
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(node) {
        this.node = node
        this.length = 1;
    }
    addNode(node) {
            let currNode = this.node;
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            currNode.next = node
            this.length += 1
        }
        [Symbol.iterator]() {
            let currNode = this.node
            let current = this.node
            return {
                next() {

                    if (current != null) {
                        currNode = current
                        current = current.next
                        return {
                            value: currNode,
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }

            }
        }
}


let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let e = new Node("e")
let f = new Node("f")

let l = new LinkedList(a)
l.addNode(b)
l.addNode(c)
l.addNode(d)
l.addNode(e)
l.addNode(f)

for (node of l) {
    console.log(node.value);
}
``` -->


# 1. What are tagged Templates? 
Tagged templates are one of the new features of es6 that takes in a mix of strings and variables and formats them and returns them based on conditions that we apply.
# 2.Explain and demonstrate first class function
**first class functions**:- they are functions that are treated like any other variable. thus these functions can be passed as arguments to other functions, be assigned to other variables and 			

a.  passing functions arguments

> we can pass es6 functions as function arguments by assigning a
> variable as an argument to the other function and calling that
> variable with a parenthesis.

    add = (x,y)=> x+y;
    	   doMath(a,b,operation){
    			return operation(a,b);
    				}

b.  functions return functions

> es6 enables us to return a function from a function.
```
greetPhrase(phrase){
			return greetperson=(name)=> `${phrase} ${name}`;
				}
	// can be called like
		1) x = greetPhrase("selam")
		   x("abebe")
		2) x = greetPhrase("hello")("world")
```
# 3. Explain and demo closures
> closure gives javascript a means to emulate what most programming languages refer to as private access variables by using self invoking functions which run only once and return a function expression. closure can give the function parent scope. in short variables are protected by the scope of the anonymous function and can only be changed using the function that is the iife.

    //the function below takes the array "seats" and makes tke elements("seat takers") scooch around a circle
    	scooch = (function(){
    	  let seats = ["a","b","you","c","d"];
    	  return function(){
    	    let last = seats[seats.length-1];
    	    seats.pop();
    	    seats.splice(0,0,last);console.log(seats);
    	  }})();
# 4. Demonstrate the Reflect API 
	Reflect api is a collection of prebuilt js methods that work on metaprogramming of objects.
   a. In construction and method call,in prototypes  and Reflect and properties 
	
	class Person{
	  constructor(name,age){
	    this.name = name;
	    this.age = age;
	  }
	  getAge(){
	    return this.age;
	  }
	}
	// construction
	let abrham = Reflect.construct(Person,["abrham",21])
 	console.log(abrham)
	// method call
	console.log(Reflect.apply(abrham.getAge,abrham,[]))
	// prototypes
	console.log(Reflect.setPrototypeOf(abrham,{role: "provider"});
	// properties
	console.log(Reflect.has(abrham,"age"));// true
	console.log(Reflect.has(abrham,"weight"));// false
# 5. what is export default? explain with examples
es6 provides us with two ways to export module from a file: named export and default export.unlike named export default export can have only one export per file.
	
	file1.js
	--------------------------------
	// export
	MyComponentOne = ()=>{}
	MyComponentTwo = ()=>{}
	export default MyComponentTwo;
	-------------------------------
	file2.js
	-------------------------------
	import MyComponentTwo from "./file1";
	-------------------------------
on the above code sample we can see that we can only export one module using default export

# 6. what are iterators and generators? explain with examples

> A generator function in JavaScript is a special type of synchronous
> function which is able to stop and resume its execution at will.While
> almost all function do is fire and forget generators stop or resume
> accordingly
> 
> 
> An Iterator is a javascript object that enables us to access items
> from a collection one at a time, while keeping track of its current
> position within that sequence. An Iterator has a next() method that
> returns the next item in the sequence. the next method returns two
> properties done and value

```
	class Node {
		constructor(value) {
			this.value = value
			this.next = null
		}
	}

	class LinkedList {
		constructor(node) {
			this.node = node
			this.length = 1;
		}
		addNode(node) {
				let currNode = this.node;
				while (currNode.next !== null) {
					currNode = currNode.next
				}
				currNode.next = node
				this.length += 1
			}
			[Symbol.iterator]() {
				let currNode = this.node
				let current = this.node
				return {
					next() {

						if (current != null) {
							currNode = current
							current = current.next
							return {
								value: currNode,
								done: false
							}
						} else {
							return {
								done: true
							}
						}
					}

				}
			}
	}


	let a = new Node("a")
	let b = new Node("b")
	let c = new Node("c")
	let d = new Node("d")
	let e = new Node("e")
	let f = new Node("f")

	let l = new LinkedList(a)
	l.addNode(b)
	l.addNode(c)
	l.addNode(d)
	l.addNode(e)
	l.addNode(f)

	for (node of l) {
		console.log(node.value);
	}

```
# 7.What are Sets and Maps in JS ? Explain with example
**Sets** are Javascript objects that lets us store unique values of any type, whether primitive values or object references.

```
let numArr = [1,2,3,3,2,4]
let mySet = new Set(numArr)

console.log(mySet)

//if we log mySet we will find out that mySet has only 4 elements each of whom are unique 
```
**Maps** are Javascript objects that hold key-value pair and remembers the original insertion of the keys. Map object solves the problem that javascript supports one key object and if we add multiple key objects it only remembers the last one

```
let myObject = {};
let a = {};
let  b = {};
myObject[a] = 'a';
myObject[b] = 'b';
console.log(myObject);// outputs { '[object Object]': 'b' }

// Maps
const a = {};

const b = {};

const myMap = new Map([ [ a, 'a'], [b, 'b'] ]);

console.log(myMap); // outputs Map { {} => 'a', {} => 'b' }
```

