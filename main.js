// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
const container = document.querySelector(".container");

const getInfo = function() {
    for (let i = 1; i <= 5; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        const paragraph = document.createElement("p");
        paragraph.classList.add("card-name");
        const img = document.createElement("img");
        img.classList.add("card-img");

        axios({
            method: "get",
            url: `https://rickandmortyapi.com/api/character/${i}`
        }).then(res => {
            paragraph.innerText = res.data.name;
            img.src = res.data.image;
        });
        card.append(paragraph, img);
        container.append(card);
    }
};
