// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

function fetchRickAndMortyCharacters() {
    const requestObject = {
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character/1,2,3,4,5'
    };
    const successfulResponseCallback = (responseObject) => {
        const imageBoxes = document.querySelectorAll('.characterBox');
        for (let i = 0; i < imageBoxes.length; i++) {
            let h4 = document.createElement('h4');
            let img = document.createElement('img');
            h4.innerHTML = responseObject.data[i].name;
            img.src = responseObject.data[i].image;
            imageBoxes[i].appendChild(h4);
            imageBoxes[i].appendChild(img);
        }
    };
    const failedResponseCallback = (responseObject) => {
        console.log(responseObject);
    };
    axios(requestObject)
        .then(successfulResponseCallback)
        .catch(failedResponseCallback);

    document.querySelector('#random').style.display = 'none';
}

document.querySelector('#random').addEventListener('click', fetchRickAndMortyCharacters);