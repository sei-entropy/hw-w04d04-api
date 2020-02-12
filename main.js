// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

// const API_URL = 'https://ghibliapi.herokuapp.com/'

// const END_POINT = 'species/'

// const API_KEY = '603428ba-8a86-4b0b-a9f1-65df6abef3d3'


// https://ghibliapi.herokuapp.com
// let url1 = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
// https://ghibliapi.herokuapp.com/films
let url1 = "https://ghibliapi.herokuapp.com/films"
const randomT = document.querySelectorAll("#randomTitle")
const randomP = document.querySelectorAll("#randomParagraph")

function getInfo() {


    for (let i = 0; i < 6; i++) {
        axios({
                method: 'get',
                url: url1
            })

            .then(res => {

                let p1 = res.data[i].title

                let p2 = res.data[i].description
                console.log(res);

                console.log(randomT[1]);


                randomT[i].innerText = p1;
                randomP[i].innerText = p2;





            })

            .catch(err => {

                console.log(err);
            })


    }


}