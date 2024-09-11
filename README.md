
# Variables and data types
### Variable 
A variable is a container for storing data.

You declare variables using  var, const and let.

+ **var**: Has function scope and can be redeclared.
+ **let**: Has block scope and can be reassigned but not redeclared within the same scope.
+ **const**: Also has block scope, but it cannot be reassigned or redeclared, making it ideal for values that should not change
###  Data Types:
   A data type define the type of data that a variable can hold.
### Common Data Types:
+ **Numbers**: Used for numeric values (e.g., integers and floating-point numbers).
+ **Strings**: A sequence of characters used to represent text.
+ **Booleans**: Represents true or false, typically used in conditions and logical operations.
+ **Arrays**: A list of values, which can be of any data type, stored in a single variable.
+ **Objects**: Complex data structures that can hold multiple values and functions (methods) as properties.

# Operators and expressions

**Operators** are symbols or keywords used to perform operations on values (operands). 

### Types of Operators:
+ Arithmetic Operators:

Used for mathematical calculations.
**Examples**: + (addition), - (subtraction), * (multiplication), / (division), % (modulus), and ** (exponentiation).

+ Assignment Operators:

Used to assign values to variables.
**Examples**: = (assign), += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign).

+ Comparison Operators:

Used to compare values and return a boolean (true or false).
**Examples**: == (equal), != (not equal), === (strict equal), !== (strict not equal), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to).

+ Logical Operators:

Used to combine multiple conditions.
**Examples**: && (AND), || (OR), ! (NOT).

+ Unary Operators:

Operate on a single operand.
**Examples**: ++ (increment), -- (decrement), typeof (type of operand).

+ Ternary Operator:

A shorthand for an if-else statement.
**Example**: condition ? expression1 : expression2.

**Expressins**An expression is a combination of values, variables, and operators that evaluates to a single value. Expressions can be simple (e.g., a single value or variable) or complex (involving multiple operators and operands).

### Types of Expressions:

+ Arithmetic Expressions:

Use arithmetic operators to perform calculations.
**Example**: let total = price * quantity;

+ Comparison Expressions:

Use comparison operators to evaluate conditions.
**Example**: let isAdult = age >= 18;

+ Logical Expressions:
Combine multiple conditions using logical operators.
**Example**: let canVote = (age >= 18) && (citizen === true);

# Control Structures

### if...else statement

+ if specify  a block of code to be executed when specified condition is true.
+ else if specify a block of code to be executed if the previous condition is false.
+ else specify a block of code to be executed if none of the previous conditions are true.

### switch statement

+ switch is a control structure used for executing one block of code among many based on the value of an expression
  
#### Switch structure

+ switch Keyword: Evaluates an expression and matches it to one of several case labels.
+ case Labels: Each case contains the code to execute if the expression matches the label.
+ break Statement: Stops the execution of more cases after a match is found. Without break, the code will continue executing the subsequent cases (this is called "fall-through").
+ default Case: Executes if no matching case is found; it's optional but often used as a fallback.

#Functions and Scope

A function is a reusable block of code designed to perform a specific task. Functions allow developers to write code once and use it multiple times, which enhances code efficiency and readability.

+ **Function Declaration**- A function can be declared using the function keyword, followed by a name, a list of parameters (optional), and a block of code (the function body).
+ **Calling Functions:** To execute the code within a function, you call the function by its name, followed by parentheses, optionally passing in arguments.
  
### Scope

Scope determines the accessibility of variables and functions in different parts of the code. Understanding scope is vital for avoiding errors related to variable accessibility and for writing cleaner, more maintainable code.

### Types of Scope:

+ Global Scope: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
+ Local Scope: Variables declared within a function or block are local to that function or block and cannot be accessed from outside it.
+ Function Scope: Variables declared within a function are accessible only within that function.
+ Block Scope: Variables declared with let or const within a block ({}) are accessible only within that block.



  
