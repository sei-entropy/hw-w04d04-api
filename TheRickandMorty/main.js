// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
console.log('StudioGhibli');

let $q = document.querySelector.bind(document);
let $qa = document.querySelectorAll.bind(document);

const apiUrl = `https://rickandmortyapi.com/api/character`
function getCharacters() {
    axios(apiUrl)
        .then(res => {
            $q(".container").removeAttribute("id");
            for (let i = 0; i < 5; i++) {
                let characterName = res.data.results[i].name;
                let characterImage = res.data.results[i].image;
                $q(`#name${i}`).innerText = characterName;
                $q(`#img${i}`).src = characterImage;
            }
        })
        .catch(err => {
            console.log(err);
        });
}