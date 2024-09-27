


// class in js
const products = [
    {id:1, name: 'lenevo', price: 65000},
    {id:2, name: 'dell', price: 55000},
    {id:3, name: 'hp', price: 45000},
    {id:4, name: 'mac', price: 165000}
]


// has some properties, methood // class diye objects make kora hoi
class Product{
         country = 'bangladesh'// we can write variable but no need to wrote const/var/let
         constructor(name){   //special function
             this.name = name;
         }
         speak(talk){
             console.log(`talking about ${talk}`)  //we can write function inside class ,in this function we have not need to wrote function keyword
         }

//      constructor(){

//      }
}

const lenevo = new Product('le le lenevo');
console.log(lenevo);
lenevo.speak('oba kita kow')



class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject= subject;
    }
    lecture(){
        console.log('sir is teaching math')
    }
}

const tapan = new Teacher ('tapan sir', 'Physics');
console.log(tapan);
const rashid = new Teacher('Rashid', 'English');
console.log(rashid);




class Vehicle{
    constructor(name,price){
        this.name= name;
        this.price=price;
    }

    move(){
        console.log("gari cholena ch0lena re")
    }
}

class bus extends Vehicle { // if we  need to access other class simplily we can use extends
    constructor(name,price, seat, ticketPrice){
       super(name,price);  // we can call the existing constuctor using super()
       this.seat = seat;
       this.ticketPrice = ticketPrice;


    }
}


class truck extends Vehicle {
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }
}

let vh= new Vehicle('truck',500000,"4000ton")
console.log(vh)




class person{
    constructor(name, age){
        this.name= name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }

    activity(){
        this.sleep()
    }
}

const kodom = new person('kadam Ali', 21);
console.log(kodom)
kodom.sleep();

const badam = new person ('kacha badan', 23);
console.log(badam)
badam.sleep()

//bejal
const lazy= kodom.sleep;
lazy()