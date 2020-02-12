// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

const randomButton = document.querySelector("#random");


const API_URL = 'https://rickandmortyapi.com/api/character/[1,2,3,4,5]';


function getRandom () {
axios({
    method: "get",
url: API_URL,

})
.then(res => {

    res.data.forEach(character =>{
    const div= document.querySelector('.container')
        const name = document.createElement('p')
        const img = document.createElement('img')

        
                   document.body.appendChild(div)
                   
              div.appendChild(name)

          div.appendChild(img)

            name.innerText =character.name
             img.setAttribute( 'src',character.image)
             img.style.width = '30%';
             img.style.backgroundcolor =' white';
             img.style.boxShadow= '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
             img.style.marginbottom = '25px';
            //  img.style.float ='left';
             img.style.display ='inline-block';
             img.style.backgroundcolor = 'blue';
             img.style.marginright = '10px';
             img.style.justifyContent = "center";
             img.style.borderRadius ='5px';
             img.style.border = '1px  1px dotted white'
            //  img.style.width ="100px"
            //  img.style.height ="100px"




    
            })
            
})
.catch(err => {
    console.log(err);
    });
    }