// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const getCharactersListName = $(".name");
const getCharactersListImg = $(".charaImg");

function getAllcharacters() {
  for (let i = 0; i <= getCharactersListName.length; i++) {
    axios({
      method: "get",
      url: `https://rickandmortyapi.com/api/character`
    })
      .then(res => {
        const currentcharacterName = $(getCharactersListName[i]);
        const currentCharacterImage = $(getCharactersListImg[i]);
        const currentName = res.data.results[i].name;
        const currentImage = res.data.results[i].image;

        currentcharacterName.text(currentName);

        currentCharacterImage.attr("src", currentImage);

        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
