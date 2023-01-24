class Vechicle{
    constructor(wheels, isDiesel){
        this.wheels = wheels;
        this.isDiesel = isDiesel;
    }

    drive() {
        console.log("Are you driving ?");
    }

    break(){
        console.log("Apply break to the car");
    }

}


const letme = new Vechicle(2 , true);

console.log(letme);

letme.extra = "Maruti";
console.log(letme);

const convert = JSON.stringify(letme);

console.log(convert);

// Function Operator
function kuch (){
    return{
        name: 'Kuchbhi',
        uid: 2477
    }
}

const obj = kuch( );
console.log(obj);

try{

}catch(e){

}finally{
    
}

