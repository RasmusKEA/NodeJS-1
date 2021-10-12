function getRandom(){ fetch("http://www.boredapi.com/api/activity")
.then(response => response.json())
.then(result => {
    //const catFactsDiv = document.getElementById("cat-facts");
    //catFactsDiv.innerText = result.fact;
    alert(result.activity)
});}

const getRandomBtn = document.getElementById("rndBtn")
getRandomBtn.addEventListener('click', getRandom)

function getGenreActivity(chosenactivity){ fetch(`http://www.boredapi.com/api/activity?type=${chosenactivity}`)
.then(response => response.json())
.then(result => {
    //const catFactsDiv = document.getElementById("cat-facts");
    //catFactsDiv.innerText = result.fact;
    alert(result.activity)
});}

let getGenre = document.querySelector('#genre').value;

const getGenreButton = document.getElementById('genreBtn')
getGenreButton.addEventListener('', getGenreActivity)

document.querySelector('#genreBtn').addEventListener('click', ()=> {
    var chosenactivity = document.querySelector('#genre').value;
    getGenreActivity(chosenactivity)
  })