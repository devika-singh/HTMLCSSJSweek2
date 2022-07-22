const API_KEY = 'api_key=e4f5e2540ff979501d260c6515d92ad3';
 const BASE_URL ='https://api.themoviedb.org/3/';
 const API_URL = BASE_URL+'discover/movie?sort_by=popularity.desc&'+API_KEY;
 const IMG_URL='https://image.tmdb.org/t/p/w500';
 const searchURL= BASE_URL +'/search/movie?'+API_KEY;


const main=document.getElementById('main');

 const form=document.getElementById('form');
 const search=document.getElementById('search');

 const card = document.getElementsByClassName('card');
 const type = document.getElementsByClassName('Type');
 const stars = document.getElementsByClassName('stars');
 const movTitle = document.getElementsByClassName('Title');
 const img = document.getElementsByTagName('img');
/*
let text = 'images/Avatar.png';
img[0].setAttribute('src',text);
console.log(img[0].getAttribute('src'));*/
var i = 0;
setQuickSearch();
getMovies(API_URL);

search.addEventListener('change', searchMovie);
search.addEventListener('click', ()=>{search.value = "";});
search.addEventListener('mouseout', ()=>{search.value = "Quick Search";});

  function setQuickSearch(){
   search.value = "Quick Search";
  }

 function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
         showMovies(data.results);
    })
 }

function searchMovie(){
   console.log(search.value);
   let p = 0;
   while(p < i){
      card[p++].style.visibility = "hidden";
   }
   fetch(API_URL).then(res => res.json()).then(data =>{
        searchMovieInList(data.results, search.value);
   })
   
}

function searchMovieInList(data, movieName){
   let p = 0;
   data.forEach(movie => {
      let {title, poster_path}= movie ;
      //console.log("works" + movieName + title);
      title = title.toLowerCase();
      movieName = movieName.toLowerCase();
      if(title.includes(movieName)){
      card[p].style.visibility = "visible";
      let url = "url('"+IMG_URL+poster_path +"')";
      card[p].style.backgroundImage = url;
      card[p].style.backgroundSize = "cover";
      card[p].style.backgroundOrigin = "content-box"; 
      //console.log();
      movTitle[p].innerHTML = title;
      i++;
      }
   }
   )
}
function showMovies(data){

     data.forEach(movie => {
        const {title, poster_path}= movie ;
        let url = "url('"+IMG_URL+poster_path +"')";
        card[i].style.backgroundImage = url;
        card[i].style.backgroundSize = "cover";
        card[i].style.backgroundOrigin = "content-box"; 
        //console.log();
        movTitle[i].innerHTML = title;
        i++;
     })
    }
    