//Event Listener

const contain = document.getElementById("container"); 

const creating = document.createElement('p');
document.body.append(creating);
let func1 = (event) => {
    console.log("harsh");
    creating.innerHTML = `${event.offsetX} ${event.offsetY}`; 
}

contain.addEventListener('click', func1); 