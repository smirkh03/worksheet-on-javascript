/* 
  This function is taken from the Programming Language Explorations (PLE)
  book and it demonstrates static scoping used in JavaScript
*/

const x = "OUTER";
function second() {console.log(x);}
function first() {const x = "INNER"; second();}
first();

/* 
  This will print OUTER due to STATIC scoping which looks at outer block for
  free variables declared outside of a code block. DYNAMIC scoping would 
  look at the caller for the value of a free variable
*/
