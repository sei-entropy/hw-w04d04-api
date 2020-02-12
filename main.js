// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button



const URL = 'https://rickandmortyapi.com/api/character/';

function getInfo() {
    axios({ method: 'get', url: URL })
        .then(res => {
            // WHEN SUCCESS
            // console.log(res.data);
            const H1 = res.data.results[0].name;
            const IMG1 = res.data.results[0].image;
            $('#Name1').text(H1);
            $('#IMG1').attr('src', IMG1)

            const H2 = res.data.results[1].name;
            const IMG2 = res.data.results[1].image;
            $('#Name2').text(H2);
            $('#IMG2').attr('src', IMG2)

            const H3 = res.data.results[2].name;
            const IMG3 = res.data.results[2].image;
            $('#Name3').text(H3);
            $('#IMG3').attr('src', IMG3)

            const H4 = res.data.results[3].name;
            const IMG4 = res.data.results[3].image;
            $('#Name4').text(H4);
            $('#IMG4').attr('src', IMG4)

            const H5 = res.data.results[4].name;
            const IMG5 = res.data.results[4].image;
            $('#Name5').text(H5);
            $('#IMG5').attr('src', IMG5)







            //  IMG = res.data.resultes[i].img;


            // change the p tags => quoteAuthor + quoteText

            //  $('').text(quoteText);

        })
        .catch(err => {
            // WHEN FAILED
            console.log(err);
        });
}