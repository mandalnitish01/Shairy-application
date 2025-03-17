
let Author = document.getElementById("Author");
let Quots = document.getElementById("Quots");
const copy = document.getElementById("copy")
//this function is used for print the data on UI.

function renderonUI(data) {
//Display the quote and author on the page.
  Author.textContent = ` Author = ${data?.data?.author}`;
  Quots.textContent = ` Quots = ${data?.data?.content}`;
}



// Add a "New Quote" button to fetch another quote.
async function ShowshaiyariEnglish() {
  try {
    let result = await fetch(
      `https://api.freeapi.app/api/v1/public/quotes/quote/random`
    ); //// Fetch a random quote from the API
    let data = await result.json();

    console.log(data);
    renderonUI(data);
  } 
  catch (err)
   {
    console.log(`404 error found`, err);
  }
}
//for copy to clipboard 
copy.addEventListener('click', () => {
  const copytext = `${Author.textContent}\n${Quots.textContent}`; // Combine text with a new line
  navigator.clipboard.writeText(copytext)
    .then(() => alert("Copied to clipboard!"))
    .catch(err => alert("Failed to copy: ", err));
});



// Do not read below code this is not related to this 










































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