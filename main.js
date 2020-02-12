// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

// https://rickandmortyapi.com/api/character/
//const items = document.querySelector(". item")
const image = document.querySelectorAll(".charatarOne")
const paragaraph = document.querySelectorAll(".name")
const btn = document.querySelector("#random")
axios({
        url: 'https://rickandmortyapi.com/api/character/',
        method: 'get'
    })
    .then(response => {
        // code for if the request succeeds
        const charactarList = function () {
            for (let i = 0; i < 5; i++) {
                console.log(response.data.results[i].name);
                console.log(response.data.results[i].image)

                paragaraph[i].innerText = response.data.results[i].name
                image[i].setAttribute('src', response.data.results[i].image)
            }
        }
        btn.addEventListener('click', charactarList)
    })

    .catch(error => {
        // code for if the request fails
        console.log(error);
    });