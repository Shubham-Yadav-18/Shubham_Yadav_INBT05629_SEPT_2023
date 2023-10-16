const unsplashAccessKey = "OwzHgSE3Dhm7q6_nbLiCHbp487rutI8akMlnR8YltXU";
const searchInput = document.getElementById("image-search-input");
const searchResultsContainer = document.getElementById(
  "search-results-container"
);
const showMoreButton = document.getElementById("show-more-button");
const loadingSpinner = document.getElementById("loading-spinner");
const searchForm = document.getElementById("search-form");
let currentKeyword = "";
let currentPage = 1;

function clearSearchResults() {
  searchResultsContainer.innerHTML = "";
}

function showLoadingSpinner() {
  loadingSpinner.classList.remove("hidden");
}

function hideLoadingSpinner() {
  loadingSpinner.classList.add("hidden");
}

async function fetchImages() {
  try {
    currentKeyword = searchInput.value;
    const apiUrl = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${currentKeyword}&client_id=${unsplashAccessKey}&per_page=12`;

    showLoadingSpinner();

    const response = await fetch(apiUrl);
    const imageData = await response.json();

    hideLoadingSpinner();

    if (currentPage === 1) {
      clearSearchResults();
    }

    const results = imageData.results;

    results.map((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description || "Image";

      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";

      imageLink.appendChild(image);
      searchResultsContainer.appendChild(imageLink);
    });

    showMoreButton.style.display = "block";
  } catch (error) {
    hideLoadingSpinner();
    console.error("Error fetching images:", error);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentPage = 1;
  clearSearchResults();
  fetchImages();
});

showMoreButton.addEventListener("click", () => {
  currentPage++;
  fetchImages();
});
