// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples

const charactersList = $('.item');
function getcharacters  () {

    for (let i = 0; i <= 4; i++) {
        const URL = 'https://rickandmortyapi.com/api/character/';

    axios({ url: URL +i+1, method: "get" })

      .then(res => {
        const characterName = $(charactersList[i].children[0]);
        const characterImage = $(charactersList[i].children[1]);
        const imageUrl =`https://rickandmortyapi.com/api/character/avatar/${i +
        1}.jpeg`;
        const currentName = res.data.name;

        characterName.text(currentName);
        characterImage.attr('src', imageUrl);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

