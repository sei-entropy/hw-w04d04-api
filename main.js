// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

function getInfo(){
axios({
    method:"get",
    url:'https://ghibliapi.herokuapp.com/films'
})
.then(res =>{
    let title = "";
    let description = "";
    for(let i=0; i< res.data.length;i++){
        title = $("<h3></h3>").addClass("title").text(res.data[i].title)
        description = $("<p></p>").addClass("para").text(res.data[i].description);
          $('.container').append(title);
          $('.container').append(description);
    }
    // document.querySelector('#title').innerText =res.data.title;
    // document.querySelector('#des').innerText =res.data.description;

})
.catch(error =>{
    console.log(error);
})
};

//////////////////////////////////////// rick ////////////////////

function getInfo2(){
    axios({
        method:"get",
        url:'https://rickandmortyapi.com/api/character/1,2,3,4,5'
    })
    .then(res =>{
        console.log(res);
        let name = "";
         let img ="";
         let charector = "";
        // 
        
        for (let i=0; i < 5;i++){
            console.log(res.data[i].name)
            charector = $('<div id="div'+ i +'" />');
            name =  $("<h3></h3>").text(res.data[i].name)
            img = $("<img>").attr('src', res.data[i].image);
            console.log(charector);
            console.log(name);
            console.log(img);
            
            $(".list").append(charector);
            $(charector).append(name);
            $(charector).append(img); 
            
        }
            
             
              
        
        
    })
    .catch(error =>{
        console.log(error);
    })  
}