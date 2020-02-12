// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
const container = document.querySelector(".container");

const getInfo = function() {
    // execute loop 5 time and create 5 different cards
    for (let i = 1; i <= 5; i++) {
        // create card elements and give them aprpriate classes
        const card = document.createElement("div");
        card.classList.add("card");
        const paragraph = document.createElement("p");
        paragraph.classList.add("card-name");
        const img = document.createElement("img");
        img.classList.add("card-img");

        // making a get request to the api with a diiferent
        // character id each loop iteration,
        // and assign the data to elements
        axios({
            method: "get",
            url: `https://rickandmortyapi.com/api/character/${i}`
        }).then(res => {
            paragraph.innerText = res.data.name;
            img.src = res.data.image;
        });

        // finally, add the childs to the card and
        // apend the whole card to the container
        card.append(paragraph, img);
        container.append(card);
    }

    // Hide The button to generate cards
    document.querySelector("#random").hidden = true;
};
