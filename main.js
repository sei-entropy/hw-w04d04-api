// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const characterList = $('.item');

function getCharacters() {
    for (let i = 0; i <= 4; i++) {
      axios({
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/${i + 1}`
      })
        .then(res => {
          const characterName = $(characterList[i].children[0]);
          const characterImage = $(characterList[i].children[1]);
          const currentName = res.data.name;
          console.log(currentName);
          const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${i +
            1}.jpeg`;
            characterName.text(currentName);
            characterImage.attr('src', imageUrl);

        })
        .catch(err => {
          console.log(err);
        });
    }
  }
