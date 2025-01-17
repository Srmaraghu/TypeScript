//Basci types

let id : number =5

let username :string = "Raghunath "
let isMale : boolean = true

let x: any =122

let age :number = 23

let ids :number[] = [1,2,3,4,5,6]

let arr:any[] =[1,2,"String",true]

//TUple
let person: [number,string , boolean] =[1,'Raghu',true]

//Tuple Array
let employee: [number,string][]

employee=[
    [ 1,'Raghu'], [2,'Shyam'],[3,'Jac']
]



//Union

let pid :string | number

pid =22

//enum

enum Direction1 {
    Up=2,
    Down,
     Left,
      Right
}
console.log(Direction1.Right)


enum Direction2 {
    Up='Up',
    Down='Down',
     Left='Left',
      Right='Right'
}

console.log(Direction2.Right)

//Objects

type User ={
    id:number,
    name:string,
    age:number
}

const user:User = {
    id:1,
    name:"Raghu",
    age:23
}

//Type assertion
//to treat an entity as a different type

let cid :any =1
//one way of type aserion
// let customerId = <number>cid

// gives an error  ype 'boolean' is not assignable to type 'number'.
// customerId= true


//another way of type assertions
let customerId = cid as number



//Functions

function addNums(x:number,y:number):number{
    return x+y
}
console.log(addNums(1,2))

function log(message: string | number):void{
    console.log(message)
}
log("Hello")
log(324434)

//throws error
// log(false)



//Interfaces

interface UserInterface{
    readonly id:number,
    name:string,
    age?:number //makes age optional
}

const user1:UserInterface = {
    id:1,
    name:"Raghu",
    }

// //throw error ass id is readonly property
// user1.id=3; 

//type can be used with Primitives and Unions but not interface
type Point = number | string
const p1:Point = 3




interface MathFunc{
    (x:number, y:number):number
}

//Using interface with a function
const add:MathFunc = (x:number , y:number ):number => x + y
const sub:MathFunc = (x:number , y:number ):number => x - y




interface PersonInterface{
    readonly id:number,
    name:string,
    register():string
}
//Classes 
class Person implements PersonInterface{
    id:number
    name:string

    constructor(id:number, name:string){
        this.id=id
        this.name=name
    }

    register(){
        return `${this.id} and  ${this.name} is registered a User`
    }
    
}
const Raghu = new Person(123,"Raghu")

//throws error as id is private
// console.log(Raghu.id);

const Mike = new Person(22,"Mike")
console.log(Mike.register());
// console.log(Raghu,Mike)



//Employee classs

class Employee extends Person{
    department:string

    constructor(id:number, name:string, department:string){
        super(id,name)
        this.department=department
    }

    register(){
        return `${super.register()}, and ${this.name} belongs to ${this.department} department`
    }
    
}

const John = new Employee(321,"John","IT")
console.log(John.register())


//Generics used to build resuable components

function getArray<T>(items :T[]) : T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["Will","way","Shill"]);

//throws type error
// numArray.push("hello")
