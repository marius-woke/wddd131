const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description: "A new novel by Rick Riordan featuring Norse mythology.",
    imgSrc: "https://books.google.com/books/content?id=xWuyBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  }
];

const articleSection = document.querySelector(".articles");

if (articleSection) {
  articles.forEach(article => {
    const articleElement = document.createElement("article");

    articleElement.innerHTML = `
      <div class="article-meta">
        <p><strong>Date:</strong> ${article.date}</p>
        <p><strong>Ages:</strong> ${article.ages}</p>
        <p><strong>Genre:</strong> ${article.genre}</p>
        <p><strong>Rating:</strong> ${article.stars}</p>
      </div>
      <div class="article-content">
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description}</p>
        <a href="#">Read More...</a>
      </div>
    `;

    articleSection.appendChild(articleElement);
  });
} else {
  console.error("No element with class '.articles' found in the DOM.");
}
