// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button




function prisent(){
axios({method:'get', url:'https://rickandmortyapi.com/api/character'})
.then(response => {
    document.querySelector('#rickName').innerText=response.data.results[0].name;
    document.querySelector('#rickImg').src=innerText=response.data.results[0].image;

    document.querySelector('#mortyName').innerText=response.data.results[1].name;
    document.querySelector('#mortyImg').src=innerText=response.data.results[1].image;

    document.querySelector('#summerName').innerText=response.data.results[2].name;
    document.querySelector('#summerImg').src=innerText=response.data.results[2].image;

    document.querySelector('#jerryName').innerText=response.data.results[4].name;
    document.querySelector('#jerryImg').src=innerText=response.data.results[4].image;

    document.querySelector('#bethName').innerText=response.data.results[3].name;
    document.querySelector('#bethImg').src=innerText=response.data.results[3].image;
}).catch(error => {
console.log(error);
});
}