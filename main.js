// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
const getInfo = function (){

    axios({
        method: 'get',
        url:'https://rickandmortyapi.com/api/character/'
    })
    
    .then(res => {
    
        for(let i=0 ; i<5 ; i++){
            const name = document.createElement("p");
            name.innerText = res.data.results[i].name;
            const newname = document.querySelector(".container");
            newname.append(name);
            const img = document.createElement("img");
            img.setAttribute("src", res.data.results[i].image);
            const newImg = document.querySelector(".container");
            newImg.append(img);
    
        }
      })
      .catch(err => {
        console.log(err);
      }); 
    
    
    
    
    
    } 