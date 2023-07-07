const characterList = [];

function searchCharacters(searchTerm) {
    const filteredCharacters = characterList.filter(
      (character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.id.startsWith(searchTerm)
    );
  
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";
  
    if (filteredCharacters.length === 0) {
      const noResultsItem = document.createElement("li");
      noResultsItem.textContent = "Aucun résultat trouvé";
      searchResults.appendChild(noResultsItem);
    } else {
      filteredCharacters.forEach((character) => {
        const characterItem = document.createElement("li");
        characterItem.textContent = `${character.name} (ID: ${character.id})`;
        characterItem.addEventListener("click", () => {
          const id = character.id;
          window.location.href = `singleCharacter.html?id=${id}`;
        });
        searchResults.appendChild(characterItem);
      });
    }
  }
  
  

function fetchCharacters() {
  fetch("https://character-database.becode.xyz/characters/")
    .then((response) => response.json())
    .then((data) => {
      characterList.push(...data);

      const searchInput = document.getElementById("search-input");
      searchInput.addEventListener("input", (event) => {
        const searchTerm = event.target.value;
        searchCharacters(searchTerm);
      });
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des personnages depuis l'API :", error);
    });
}

fetchCharacters();