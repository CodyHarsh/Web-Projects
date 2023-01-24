const class1 = {
    name: "Harsh",
    uid: "20BCS2477",
    skills: ['Harsh', 'Dheeraj', 'Mukesh'],
    walk: () =>{
        console.log('let\'s go ');
    }
}


// Convert Object to JSON
const aaj = JSON.stringify(class1);
console.log(aaj);


// Convert to json to object:
const json_to_object = JSON.parse(aaj);
console.log(json_to_object);



// for(let key in class1){
//     console.log( class1[key]);
// }
 

// const {name: naam} = class1;
// console.log(naam);

// console.log(class1.walk());


// const {name: names, uid: UID} = class1;

// console.log(names, " ", UID);

// function shouting(){
//     console.log('main shouting karta hu');
// }



// trial(shouting);


// function trial (shouting){
//     console.log('Yahan taka aa gya');
//     shouting();
// }


// console.log(`My name is Tester ${names}`);

// class letting {
//     constructor(name , uid){
//         this.name = name,
//         this.uid = uid
//     }
// }

// const var1 = new letting('Harsh', 2477);
// console.log(var1); 

