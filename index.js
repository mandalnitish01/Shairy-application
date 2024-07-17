// //this function is used for print the data on UI.
// const API_KEY = "e26ad13e154ee52ec0bb09af9ed6d5c1";
// function renderonUI(data) {

//   let newParaone = document.createElement("p");
//   newParaone.textContent = ` Humidity = ${data?.main?.humidity.toFixed(2)} *C`;
//   document.body.appendChild(newParaone);

//   let newParatwo = document.createElement("p");
//   newParatwo.textContent = ` Pressure = ${data?.main?.pressure.toFixed(2)} *C`;
//   document.body.appendChild( newParatwo);
// }
// //This function is used for featch data from API.
// async function showweatherapi() {
//   try {
//     let result = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=15.6333&lon=18.3333&appid=${API_KEY}`
//     );
//     let data = await result.json();

//     console.log(data);
//     renderonUI(data);
//   } catch (err) {
//     console.log(`404 error found`, err);
//   }
// }




let Author = document.getElementById("Author");
let Quots = document.getElementById("Quots");

//this function is used for print the data on UI.

function renderonUI(data) {
  // let newParatwo = document.createElement("p");
  Author.textContent = ` Author = ${data?.data?.author}`;
  // document.body.appendChild( newParatwo);

  // let newParaone = document.createElement("p");
  Quots.textContent = ` Quots = ${data?.data?.content}`;
  // document.body.appendChild(newParaone);
}
//This function is used for featch data from API.
async function ShowshaiyariEnglish() {
  try {
    let result = await fetch(
      `https://api.freeapi.app/api/v1/public/quotes/quote/random`
    );
    let data = await result.json();

    console.log(data);
    renderonUI(data);
  } 
  catch (err)
   {
    console.log(`404 error found`, err);
  }
}











