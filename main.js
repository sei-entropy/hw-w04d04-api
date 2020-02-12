// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
let content = $(".content");
function getRandom() {
    for(let i =0;i<5;i++)
        {
    axios({ method: 'get', url: 'https://ghibliapi.herokuapp.com/films/' })
      .then(res => {
        
            console.log(res);
            const title = res.data[i].title;
            const description = res.data[i].description;
            content.prepend(`<h2>${title}</h2><p>${description}</p>`);
       
       
      })
      .catch(err => {
        // WHEN FAILED
        console.log(err);
      });
  }
}