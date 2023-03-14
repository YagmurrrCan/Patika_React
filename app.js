// Gereksinimler
// -  Bu fonksiyon **"async"** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır. Fonksiyonun içindeki asenkron fonksiyonlar **"await"** ile tanımlanmalıdır.
// -  Fonksiyon **Number** tipinde tek parametre alır. Bu parametre **user id**'yi belirtir.
// -  Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmek olmalı. İstekleri **"axios"** kütüphanesini kullanarak yapmanız gerekiyor. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

// 	 [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

// -  Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapılmalıdır.İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

// 	[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts/userId=1)

// import axios from "axios";

// const getData = async (user_id) => {

//     const {data: users} = await axios(
//         "https://jsonplaceholder.typicode.com/users/" + user_id
//     );
    
//     const {data: posts} = await axios(
//         "https://jsonplaceholder.typicode.com/posts/userId=1" + user_id
//     );

//     return {users , posts}
// }

// export default getData;


import axios from "axios";

const getData = async (user_id) => {
  // const users = await axios(
  //   `https://jsonplaceholder.typicode.com/users/${user_id}`
  // );


  // const posts = await axios(
  //   `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  // );
  
  //let data = { ...users.data, posts: { ...posts.data[0]}};

  const {data:User} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
  const {data:Posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)
};

export default getData;