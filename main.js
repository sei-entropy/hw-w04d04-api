// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const filmsTitle = $('.container').children('h4');
const filmsDes = $('.container').children('p');

function studioGhibliFilms() {

    for (let i = 0; i <= 4; i++) {

        axios({

                method: 'get',
                url: 'https://ghibliapi.herokuapp.com/films'
                
            })
            .then(res => {
                let title = res.data[i].title;
                let desc = res.data[i].description;

                const curentTitle = $(filmsTitle[i]);
                const curentDesc = $(filmsDes[i]);

                curentTitle.text(title);
                curentDesc.text(desc);

                console.log(title);
                console.log(desc);

            })
            .catch(err => {
                console.log(err);
            });
    }
}