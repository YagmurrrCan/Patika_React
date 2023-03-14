// -  Artık elimizde kullanıcı bilgileri ve bu kullanıcının post'ları var. 
//Bu iki veriyi birleştirip return edin. 
//Birleştirme sonucunda elinizde aşağıdaki gibi bir obje bulunması gerekiyor.

// 	```
// 	{
// 		id: 1,
// 		name: "Leanne Graham",
// 		username: "Bret",
// 		email: "Sincere@april.biz",
// 		address: {
// 			street: "Kulas Light",
// 			suite: "Apt. 556",
// 			city: "Gwenborough",
// 			zipcode: "92998-3874",
// 			geo: {
// 				lat: "-37.3159",
// 				lng: "81.1496"
// 			}
// 		},
// 		phone: "1-770-736-8031 x56442",
// 		website: "hildegard.org",
// 		company: {
// 			name: "Romaguera-Crona",
// 			catchPhrase: "Multi-layered client-server neural-net",
// 			bs: "harness real-time e-markets"
// 		},
// 		posts: [{
// 			userId: 1,
// 			id: 1,
// 			title: "sunt aut facere repellat",
// 			body: "quia et suscipit suscipit recusandae"
// 		}]
// 	}
// 	```
// "app.js" dosyasına yazmış olduğunuz "getData" isimli fonksiyonu "import" edin.
// Bir alt satırda bu fonksiyonu çalıştırın ve gelen sonucu log'layın.


// import getData from "./app.js";

// var result = await getData(1,1)

// console.log(result);


import getData from "./app.js";

function App() {

  let result = getData(1,1)
  
  console.log(result);

}

export default App;