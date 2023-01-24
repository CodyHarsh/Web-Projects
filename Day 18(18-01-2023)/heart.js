// const response = fetch('https://dummyjson.com/products');

// console.log(response);
const containers = document.getElementById('container');
const userCard = document.getElementById('profilecard');


async function fetchData(){
    try{
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        const users = data.users;
        console.log(users);
        bindData(users);
    }catch(e){
        console.log('Not Found the API\'s' , e);
    }   
}


function bindData(users){
    users.forEach((users) => {
        const userCardClone = userCard.cloneNode(true);
        console.log(userCardClone);
        const userImage = userCardClone.querySelector('#user-img');
        const userName = userCardClone.querySelector('#user-name');
        const userEmail = userCardClone.querySelector('#user-email');

        userImage.src = users.image;
        userName.innerHtml = `${users.firstName} ${users.lastName}`;
        userEmail.innerHtml = users.email;

        containers.appendChild(userCardClone);
    });
}


fetchData();