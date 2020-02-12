// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
let title = $('.item');
function showCharacters() {
    for (let i = 1; i <= 5; i++) {
      axios({
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/${i}`
      })
        .then(res => {
          let currentName = $(title[i-1].children[0]);
          let currentImg = $(title[i-1].children[1]);
          const name = res.data.name;
          const img = res.data.image;
          currentName.text(name);
          currentImg .attr('src', img);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }