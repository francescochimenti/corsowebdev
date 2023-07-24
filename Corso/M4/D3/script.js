const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");

let inputData = "";

function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.pexels.com/v1/search?query=${inputData}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'C7wlLfQMIpo0pu4jMPEeuzuT9gRinnM3ev9qOeGr9EO6PbOymVL5cSPY'
        }
    })
    .then(response => response.json())
    .then(data => {
        const results = data.photos;

        searchResults.innerHTML = "";
        
        results.filter((result, indice) => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add("search-result");
            imageWrapper.style.animationDelay = `${indice * 0.05}s`;
            const image = document.createElement("img");
            image.src = result.src.large;
            image.alt = result.photographer;
            const imageLink = document.createElement('a');
            imageLink.href = result.url;
            imageLink.target = "_blank";
            imageLink.textContent = result.photographer;

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper);
        });
    })
    .catch(err => {
        console.error('An error occurred:', err);
    });
}

formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    searchImages();
})
