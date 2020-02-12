
    axios({ 
        method: 'get', 
        url:`https://ghibliapi.herokuapp.com/films`
     })
    
      .then(res => {
        // WHEN SUCCESS
    
        let array_Studio_Ghibli = res.data ;
        let container = document.querySelector('#container');
    
        for (let i = 0; i < array_Studio_Ghibli.length; i++) {
    
            let element = array_Studio_Ghibli[i]; 
    
            let div = document.createElement('div');
            div.setAttribute('id','boxs') ; 
            div.style.border = '2px solid rgba(199, 235, 238, 0.904)';
            div.style.textAlign =  'center';
    
            let h1_title = document.createElement('h1');
            h1_title.innerText=element.title;
            div.appendChild(h1_title);



            let description = document.createTextNode(element.description);
            div.appendChild(description);
    
    
            container.appendChild(div);
    
            
        }
    
      })
      .catch(err => {
        // WHEN FAILED
        console.log(err);
      });
    
    