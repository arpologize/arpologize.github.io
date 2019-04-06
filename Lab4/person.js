const person = {
    
    name: 'nanthasak',
    age :40 
}
class Person {
    construcktor(name="John Wick",age){
        this.name=name;
        this.age=age;

    }
    greeting(){
        console.log(`My name is $`);
    }
}
module.exports={person,Person};