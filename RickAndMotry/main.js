"use strict";
// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button



//         I'M USING DOM       //





//API for " rick and morty "
const apiUrl = "https://rickandmortyapi.com/api/character/";
//Button for Action
const button = document.querySelector("button");


//Create funcyion
const getRick = () => {
//Using loop to get the first 5 characters
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    const nameChar = document.createElement("h2");

//Add axios
    axios({
      method: "get",
      url: `${apiUrl}${i}`
    })
//get image & name
      .then(res => {
        img.src = res.data.image;
        nameChar.innerText = res.data.name;
        // document.body.appendChild(document.createElement("br"));
        document.body.appendChild(nameChar);
        document.body.appendChild(img);
      })
//for Erorr
      .catch(err => {
        console.log(err);
      });
  }
};

//add event listener 
button.addEventListener("click", getRick);
