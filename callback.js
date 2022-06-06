// setTimeout( () => {
//     console.log("SETTIMEOUT CALISIYOR!")
// } , 2000)  //parametre tamamlandıktan sonra 1 kez calisir


// setInterval( () => {
//     console.log("Sürekli calısacağım ben setInterval'ım!")
// }, 2000) //verilen periyotta sürekli calisir


////////////////////////////////////////////////////////

// const hello = (cb) => {
//    cb();
// }

// hello( () => {
//     console.log("Yeni fonksiyon")
// });

////////////////////////////////////////////////////////

//API içinde API

// import fetch from "node-fetch";
// //herhangi bir end.pointten veriyi alıp bize göserir
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then( (data) => data.json())       //datada apiden ne gelirse onu getiriyor ve json parse edilir
//     .then( (users) => {  //console.log(users)  //üstteki data usersa düşer 
//            console.log("Users yüklendi", users)
           
//            fetch("https://jsonplaceholder.typicode.com/posts/1")
//            .then((data) => data.json())
//            .then(post => 
//             console.log("Post yüklendi", post))
//         });

////////////////////////////////////////////////////////

//ASYNC-AWAIT 

import fetch from "node-fetch";

async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
        ).json();
    
    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
        ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
        ).json();

    console.log("users", users)
    console.log("post1", post1)
    console.log("post2", post2)
}

getData();