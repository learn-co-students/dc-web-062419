## Object Oriented JavaScript:

class Dog < Animal
  def initialize(name, age)
    @name = name
    @age = age
  end
end

class Dog {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

### `this` and the function execution context
- in the browser vs. in node

### JS `this` vs Ruby `self`
- the value of `this` changes depending on which object the function is invoked from
- implied `this` for all functions
- `this` is also known as the execution context

### Quick Aside: Strict Mode
- undeclared variables not allowed
- `this` inside a function is undefined

### `this` has strange behavior inside object methods
- this is always determined by the object to the left of the '.'
- inside arrow functions, `this` takes on the value of the outer scope's `this`

### `bind`
- bind returns a new function
- can't rebind a function
- how to see if a function has been bound
- bind a function that has arguments
- binding both `this` and certain arguments




##### Plan for the day
- Pack up, you can move to the Mod 1 space or 8V
- Grab any coach/lead if you need help
