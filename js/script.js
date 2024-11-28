const button = document.querySelector('#button');

button.addEventListener('click', () => {
    
ads.classList.add("remove");
genre.textContent = "Comedy";
bg.style.backgroundImage = "url(./img/1.jpg)";
seriesList.innerHTML = "";

seriesDB.series.forEach((item, index) => {
  seriesList.innerHTML += `
        <li class="promo__interactive-item">
              ${index}. ${item}
              <div class="delete"></div>
        </li>
        `;
});

    
})

const ads = document.querySelector(".promo__adv");
genre = document.querySelector(".promo__genre");
bg = document.querySelector(".promo__bg");
seriesList = document.querySelector(".promo__interactive-list");
seriesDB = {
  series: [
    "Omar",
    "The final legacy",
    "Erturgul",
    "Magnificent century",
    "The great suljuks: Guardians...",
  ],
};
