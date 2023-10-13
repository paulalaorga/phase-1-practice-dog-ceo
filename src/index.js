document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById("dog-image-container");

    fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
        const images = data.message;
        images.forEach((imgUrl) => {
            const img = document.createElement("img");
            img.src = imgUrl;
            dogImageContainer.appendChild(img);
        });
    });

});

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogBreedsList = document.getElementById("dog-breeds");

fetch(breedUrl)
.then((response) => response.json())
.then((data) => {
    const breeds = Object.keys(data.message);
    breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        dogBreedsList.appendChild(li);
    });
});

dogBreedsList.addEventListener("click", (event) => {
    if (event.target.tagName === "Li") {
        event.target.style.color = "red";
    }
});

const breedDropdown = document.getElementById("breed-dropdown");

breedDropdown.addEventListener("change", (event) => {
    const selectedLetter = event.target.value;
    const breedLis = dogBreedsList.getElementsByTagName("li");

    for (const breedLi of breedLis) {
        if (breedLi.textContent.charAt(0) === selectedLetter) {
            breedLi.style.display = "list-item";
        } else {
            breedLi.style.display = "none;"
        }
        }
    });



