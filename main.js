// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
console.log('It works!!');

// getting targets (buttons) and the main container that holds all the data
const rickMortyButton = document.querySelector('#rick-morty');
const ghibliButton = document.querySelector('#ghibli')
const container = document.querySelector('.container');

getRickAndMorty = () => {
    // just a text heading
    const heading = document.createElement('h1');
    heading.innerText = `Fetched data from Rick and Morty API: `;
    container.appendChild(heading);

    // looping 5 times, each time I'm retrieving one family member, creating its element and appending it to HTML for display
    // each time I'm creating a div element that contains the name and image of the retrieved member and displaying it
    for (let i = 1; i <= 5; i++) {
        axios({
                method: `get`,
                url: `https://rickandmortyapi.com/api/character/${i}`
            })
            .then(res => {
                console.log(res);
                const data = res.data;

                const name = document.createElement('h3');
                const image = document.createElement('img');
                const div = document.createElement('div');

                name.innerText = data.name;
                image.setAttribute('src', data.image);

                div.appendChild(name);
                div.appendChild(image);
                container.appendChild(div);
            })
            .catch(err => {
                console.log(err);
            })
    };
}

getGhibli = () => {

    // just a text heading
    const heading = document.createElement('h1');
    heading.innerText = `Fetched data from Studio Ghibli API: `;
    container.appendChild(heading);

    // looping around the retrieved array which contains 20 films
    // each time I'm creating a div element that contains the title and description of the film and displaying it
    for (let i = 0; i < 20; i++) {
        axios({
                method: `get`,
                url: `https://ghibliapi.herokuapp.com/films`
            })
            .then(res => {
                console.log(res);
                const data = res.data;

                const title = document.createElement('h3');
                const descrip = document.createElement('p');
                const div = document.createElement('div');

                title.innerText = data[i].title;
                descrip.innerText = data[i].description;

                div.appendChild(title);
                div.appendChild(descrip);
                container.appendChild(div);
            })
            .catch(err => {
                console.log(err);
            })
    };
}

// Event listeners for the buttons
rickMortyButton.addEventListener('click', getRickAndMorty);
ghibliButton.addEventListener('click', getGhibli);