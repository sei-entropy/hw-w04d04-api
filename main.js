// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


const API_URL = 'https://rickandmortyapi.com/api/'
//const END_POINT='/character/1,2,3,4,5'
const END_POINT = '/character'
const API_KEY = '1,2,3,4,5'
//let url1 = 'https://rickandmortyapi.com/api//character/1,2,3,4,5';
//let url1 = API_URL + END_POINT

function getInfo() {
    for (i=0 ; i<=5 ;i++){
    axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api//character/1,2,3,4,5'
        })
        .then(res => {

            // WHEN SUCCESS
            console.log(res);
            //  let randomSrc = res.data.urls.regular;
            
            const randomSrc = res.data[i].image
            const x = document.getElementsByClassName("container");
            const image=document.createElement('img')
            image.setAttribute("src", randomSrc);
            document.body.appendChild(x);

            const returnName = res.data[i].name
            const y = document.getElementsByClassName("container");
            // const text=document.createElement('p')
            // document.getElementById("Name").textContent = returnName;
            var p = document.getElementById("p")
             p.innerText = p.innerText+returnName;
             document.body.appendChild(y);

           // $('#Name').text(returnName);
            console.log(returnName);
           
            //document.getElementById("Name").textContent = "This is som text";


        })
    
        .catch(err => {

            console.log(err);
        });
}}