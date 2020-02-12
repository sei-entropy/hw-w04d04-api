// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button

function getInfo() {
    

axios({ 
    method: 'get', 
    url:`https://rickandmortyapi.com/api/character`
 })

  .then(res => {
    // WHEN SUCCESS

    let array_RickAndMorty = res.data.results ;

    let container = document.querySelector('#container');

    for (let i = 0; i < array_RickAndMorty.length; i++) {

        let element = res.data.results[i]; 

        let div_RickAndMorty = document.createElement('div');
        div_RickAndMorty.setAttribute('id','boxs') ; 
        div_RickAndMorty.style.width = "150px";
        div_RickAndMorty.style.height = "150px";
        div_RickAndMorty.style.backgroundColor = 'rgba(199, 235, 238, 0.904)';
        div_RickAndMorty.style.textAlign =  'center';

        let p_RickAndMorty = document.createTextNode(element.name);
        div_RickAndMorty.appendChild(p_RickAndMorty);

        
        let img_RickAndMorty = document.createElement('img');
        img_RickAndMorty.setAttribute('src',element.image) ; 
        img_RickAndMorty.style.width = "100px";
        img_RickAndMorty.style.height = "100px";
        div_RickAndMorty.appendChild(img_RickAndMorty);


        container.appendChild(div_RickAndMorty);

        
    }

  })
  .catch(err => {
    // WHEN FAILED
    console.log(err);
  });

}

