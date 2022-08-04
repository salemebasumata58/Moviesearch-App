let api = "e5028808"; // api key
let val 

let container = document.getElementById("container");

let data;
function getMovie(){
// e.preventDefault();
val = document.getElementById("movie").value;

// url = `http://www.omdbapi.com/?apikey=${api}&t=${val}`;
getData(val);
// console.log("val :", val);

}



async function getData(){
   
    try{
      let res = await fetch(`http://www.omdbapi.com/?apikey=${api}&t=${val}`);
      data = await res.json();
  // console.log("data :" ,data.Response);
   if(data.Response == "False"){
    getError();
   }else {
   appendData(data);
  }
}catch(err){
       console.log(err);
    }
}
function getError(){
    container.innerHTML= null
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = "https://c.tenor.com/hwe3vkln0_UAAAAM/error-x-error.gif";
    div.append(img);
    container.append(div);
    console.log("hello");
}
//    
function appendData(data){
console.log(data)
container.innerHTML = null;

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = data.Poster;
    let title = document.createElement("h4");
    title.innerText ="Title : "+ data.Title;
    let release_date = document.createElement("p");
    release_date.innerText ="Released : "+ data.Released;
    let ratings = document.createElement("p");
    ratings.innerText = "Imdb Ratings : "+data.Ratings[0].Value;
    let genre = document.createElement("p");
    genre.innerText ="Genre : "+ data.Genre;

    div.append(img, title, genre, release_date, ratings);
    container.append(div);

    


}