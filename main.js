// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button



let url1 = "https://rickandmortyapi.com/api/character/[1,2,3,4,5]";



function namesAndImages() {
    axios({
            method: 'get',
            url: url1
        })
        .then(res => {
            // WHEN SUCCESS
            console.log(res);
      
         const info= res.data
    
            for (let i =0; i<= info.length ; i++) {
            const images = info[i].image;
            const names = info[i].name;
            console.log(images);
            console.log(names);
             

            const allImg = document.querySelectorAll('.image')
            allImg[i].src  = images;
    
           
            const allActors = document.querySelectorAll('.actors')
            allActors[i].innerText = names;
         


            } 
         
        })
        .catch(err => {
            // WHEN FAILED
            console.log(err);
        })

    }
     
  
