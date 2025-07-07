function greet(){
  console.log("Hello World!")
}
greet()

function name(){
  console.log("My name is Joyce")
}
name()

function greetings(name){
  console.log("Hello!  "+name )
}
greetings("Ben")
greetings("Mary")
greetings("Scholes")

function person(name,age){
  console.log("Hello! my name is "+name +" and I am "+age +" years old")
}
person("Ben",20)
person("Mary",19)
person("Scholes",25)

function add(a,b){
return a+b
}
let results=add(20,40)
console.log(results)

function multiply(x,y){
  return x*y
}
let result=multiply(20,15)
console.log(result)

//write a function that calculates the area of a rectangle it should take in length and width as parameters and return the area.Area=l*w

function area(l,w){
  return l*w
}
let rectangle=area(12,5)
console.log(rectangle)