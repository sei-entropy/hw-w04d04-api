
//API ==> " Ghibli studio "
const URL_API = 'https://ghibliapi.herokuapp.com/films';
axios({
    method: 'get',
    url: `${URL_API}`
})


.then(res => {

    let ghibliArr = res.data;
    let container = document.querySelector('#container');

    // for (let i=0; i < ghibliArr.length; i++){
    //     let element = ghibliArr[i];
        ghibliArr.forEach((element, index) => {
            

        let div = document.createElement('div');
        div.setAttribute('id', 'boxs');
        div.style.border = '1px solid gray';
        div.style.textAlign =  'center';
        div.style.boxShadow = '2px 2px gray';
        div.style.padding = '5px 5px'


        let titleH1 = document.createElement('h1');
        titleH1.innerText = element.title;
        div.appendChild(titleH1);


        let description= document.createTextNode(element.description);
        div.appendChild(description);


        container.appendChild(div);
    });
})

.catch(err => {
    console.log(err);
})