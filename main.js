// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
console.log('TEST');
//Rick and Morty API
//this function to create image and name of it
function getinfo(){
axios({
 method: 'get',
     url: 'https://rickandmortyapi.com/api/character/'
 })
 .then(res => {
         for(let i=0;i<5;i++){
             const imgch = res.data.results[i].image;
             const name = res.data.results[i].name;
             //create image and text
             const txt = $("<h4> </h4>").text(name);
             const img = $("<img/>").attr('src', imgch);
            //$('.container').append(txt,img);
            //create div .
            var div = $('<div/>');
            div.append(txt, img);
            div.css({
                     'border-bottom': '2px solid grey',
                     'border-right': '2px solid grey',
                // 'display':'flex',
                'width':'25%',
                'text-align':'center',
                // 'content':'" "',
                // 'clear':'both',
            })
            div.appendTo($('.container'));
         console.log("infoooo : " + res.data.results[i].name); 
         }
         $('#random').hide();
     })
     //if there is an error
     .catch(err => {
         console.log('error ' + err);
     });
      //hide button after click
      $('#random').hide ();

    }
    //studio ghibli api 
//this function to disply title and sescription of the films .
    function getFilminfo(){
        axios({
                method: 'get',
                url: 'https://ghibliapi.herokuapp.com/films/'
            })
            .then(res => {
                let a = res.data.length;
                console.log(a);
                for (let i = a-1; i >= 1; i--) {
                    const titl = res.data[i].title;
                    const des = res.data[i].description;
                    const txt = $("<h1> </h1>").text(titl);
                    const desc = $("<p> </p>").text(des);
                    $('.containerf').append(txt, desc, '<br>')
                    console.log("infoooo : " + titl);
                }
            })
            .catch(err => {
                console.log('error ' + err);
            });
            //hide button after click
            $('#randomf').hide();
    }

