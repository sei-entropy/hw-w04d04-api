// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
console.log('ooo');
//Rick and Morty API
//this function to create image and name of it
function getinfo(){
axios({
 method: 'get',
     url: 'https://rickandmortyapi.com/api/character/'
 })
 .then(res => {
         for(let i=1;i<5;i++){
             const imgch = res.data.results[i].image;
             const name = res.data.results[i].name;
             //create image and text
             const txt = $("<h4> </h4>").text(name);
             const img = $("<img/>").attr('src', imgch);
            //$('.container').append(txt,img);
            //create div .its easy to work with div for each response 
            var div = $('<div/>');
            div.append(txt, img);
            div.css({
                    // 'border - bottom': '1 px solid black',
                    // 'border - right': '1 px solid black',
                 'border':'1px solid black',
                'width':'30%',
                'text-align':'center',
                // 'content':'" "',
                // 'clear':'both',
            })
            div.appendTo($('.container'));
         console.log("infoooo : " + res.data.results[i].name); 
         }
     })
     //if there is an error
     .catch(err => {
         console.log('error ' + err);
     });

    }
    //studio ghibli api 
//this function to disply title and sescription of the films .
    function getFilminfo(){
        axios({
                method: 'get',
                url: 'https://ghibliapi.herokuapp.com/films/'
            })
            .then(res => {
                for (let i = 5; i >= 1; i--) {
                    const titl = res.data[i].title;
                    const des = res.data[i].description;
                    const txt = $("<h1> </h1>").text(titl);
                    const desc = $("<p> </p>").text(des);
                    $('.container').after(txt, desc, '<br>')
                    console.log("infoooo : " + titl);
                }
            })
            .catch(err => {
                console.log('error ' + err);
            });
    }