/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the global scope "this" is the window/global object
* 2. Implicit binding: The object to the left of the dot is "this"
* 3. When creating a new object using a constructor, "this" is the new object
* 4. Explicit binding: explicitly telling the program what "this" binds to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function screenData() {
  console.log(`${this.screen} `)
}

screenData();

// Principle 2

// code example for Implicit Binding

const myObj = {
  toot: function(x) {
    for(let i = 0; i < x; i++)
      console.log("toot");
  }
}

myObj.toot(5);

// Principle 3

// code example for New Binding
function Girl(attrs) {
  this.hobbies = attrs.hobbies;
}

const newGirl = new Girl({ hobbies: [ "running", "fishing", "coding" ]});

console.log(newGirl);

// Principle 4

// code example for Explicit Binding
function Woman(attrs) {
  Girl.call(this, attrs);
  this.isMother = attrs.isMother;
}

const newWoman = new Woman({ hobbies: ["cycling", "French movies"], isMother: false });

console.log(newWoman);
