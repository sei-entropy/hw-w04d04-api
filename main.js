// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

function getInfo() {

    axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api//character/1,2,3,4,5'
        })
        .then(res => {
            const container = document.getElementById('container')

            for (i = 0; i <= 5; i++) {
                console.log(res.data[i].image);

                const randomSrc = res.data[i].image
                const newImage = document.createElement('img')
                newImage.src = randomSrc;
                container.appendChild(newImage)

                const returnName = res.data[i].name
                const newName = document.createElement('p')
                newName.textContent = returnName;
                container.appendChild(newName)

            }

        })

        .catch(err => {

            console.log(err);
        });
}