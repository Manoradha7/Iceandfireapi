// create a container div 
const main = document.createElement("div");
main.className = "main";
document.body.append(main);

//create title for the api
document.querySelector(".main").innerHTML=`
<div class="title">
<h1 class="head-title">Ice  And  Fire</h1>
</div>`;

//create a main div in container div for displaying details
const container = document.createElement("div");
container.className = "container";
document.body.querySelector(".main").append(container);



//get book details from th data url
async function bookdetaills(){
  const data = await fetch("https://anapioficeandfire.com/api/books");
  //converting the api data into json and store in book
  const book = await data.json();
   
  const books = document.querySelector(".container");
  // Get requires details stored in the fetched url using foreach     
  book.forEach((book)=>{
    books.innerHTML +=`
      <div class="books">
      <h5 class="book-details"><span class="material-icons">
      book</span><b>Name:</b>${book.name}</h5>
      <p class="book-details"><span class="material-icons">
      person</span><b>Authors  :</b>${book.authors}</p>
      <p class="book-details"><span class="material-icons">
      pin</span><b>ISBN:</b>${book.isbn}</p>
      <p class="book-details"><span class="material-icons">
      auto_stories</span><b>Pages :</b>${book.numberOfPages}</p>
      <p class="book-details"><span class="material-icons">
      store</span><b>Publisher:</b>${book.publisher}</p>
      <p class="book-details"><span class="material-icons">
      new_releases</span><b>Released:</b>${book.released}</p>
      </div>
      `;
    })   
}
bookdetaills();