// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button
console.log("working!");

const urlPage='https://rickandmortyapi.com/api/character/';
const photoList = $('.container');
function getPhoto(){
axios({
    method:'get',
    url:urlPage
})
.then(function(res){
  for(let i=0;i<5;i++){ 
      console.log(res.data.results[i]);  
    let namech=res.data.results[i].name;
    const currentName = $(photoList[i+1].children[0]);
    const currentImage = $(photoList[i+1].children[1]);
    const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${i +1}.jpeg`;
    currentName.text(namech);
    currentImage.attr('src', imageUrl);
  }

})
.catch(function(error){
    console.log(error);
})

}