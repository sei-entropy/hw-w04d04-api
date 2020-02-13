// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const API_URL = 'https://rickandmortyapi.com/api/character/'


axios({
        method: 'get',
        url: API_URL
    })
    .then(res => {
        console.log(res)
        let results = res.data.results;
        let firstImg = results[0].image;
        let firstName = results[0].name;
        let secoundImg = results[1].image;
        let secoundName = results[1].name;
        let thirdImg = results[2].image;
        let thirdName = results[2].name;
        let fourthImg = results[3].image;
        let fourthName = results[3].name;
        let fifthImg = results[4].image;
        let fifthName = results[4].name;

        $('#1st').attr('src', firstImg)
        $('#1').text(firstName)
        $('#2nd').attr('src', secoundImg)
        $('#2').text(secoundName)
        $('#3rd').attr('src', thirdImg)
        $('#3').text(thirdName)
        $('#4th').attr('src', fourthImg)
        $('#4').text(fourthName)
        $('#5th').attr('src', fifthImg)
        $('#5').text(fifthName)
    })
    .catch(err => {
        console.log(err)
    })