// function  orderPizza(){
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const pizza = '🍕';
//             reject(pizza);
//         }, 2000);
//     })
// }

// const handlePromise = orderPizza();

// handlePromise.then((pizza) => {
//     console.log('my Pizza' , pizza);
// }).catch((error) =>{
//     console.log('error occured', error);
// })


// Step 1: Select Seats:
// Step 2: Enter Name
// Step 3: Payments


// function bookRailwayTicket(){ 
//     selectSeat('A3')
//         .then((seat) => {
//             enterDetails('Anuj' , seat)
//         })
//         .then((seat) => {
//             Statuspayment(name, 1000);
//         })
// }

// function selectSeat(seat){
//     return new Promise(function(res, rej){
//         setTimeout(()=>{
//             console.log('Seat is confirmed');
//             res( `confirmed ${seat}`);
//         },2000)
//     })
// }


// function enterDetails(name, seat){
//     return new Promise(function(res, rej){
//         setTimeout(()=>{
//             console.log('Name is bineded', name , 'with', seat);
//             res(`confirmed ${name} ${seat}`);
//         },2000)
//     })
// }


// function Statuspayment(name, seat, payment){
//     return new Promise(function(res, rej){
        
//         setTimeout(()=>{
//             console.log(name, seat, payment);
//             console.log('Payment Done', name , 'with', seat , 'and', payment);
//             res(`confirmed ${name} ${seat} ${payment}`);
//         },2000)
//     })
// }


// bookRailwayTicket();


// Let's Start async and await

async function getCheese(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('cheese 🍕');
        }, 2000); 
    })
}


async function makeDough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${cheese} dough `)
        }, 2000); 
    })
}


async function makePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${dough} pizza `)
        }, 2000); 
        
    })
}

async function orderAPizza(){
    const cheese = await getCheese();
    console.log('now we have cheese ready' , cheese);
    const dough = await makeDough(cheese);
    console.log('Your dough is ready', );
    const pizza = await makePizza(dough);
    console.log('Hurry your pizza is ready');

    return pizza;
}

orderAPizza();