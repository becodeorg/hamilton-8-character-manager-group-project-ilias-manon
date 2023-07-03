/*const idCharacter = (new URLSearchParams(window.location.search)).get('id'); //window.location.search = URL actuel de ma page

fetch("https://character-database.becode.xyz/characters/" + idCharacter)
.then(response => response.json())
.then (data => editData(data));

function editData(data){
    console.log(data["name"]);
    document.getElementById("username").value = data["name"];
    document.getElementById("passwordConfirmation").value = data["shortDescription"];
    document.getElementById("textarea").value = data["description"];
}*/

// Fetch Character Data
const idCharacter = (new URLSearchParams(window.location.search)).get('id');
fetch("https://character-database.becode.xyz/characters/" + idCharacter)
  .then(response => response.json())
  .then(data => {
    populateForm(data);
    setupFormSubmission(data);
  });

// Populate Form Fields
function populateForm(data) {
    console.log(data["name"]);
    document.getElementById("username").value = data["name"];
    document.getElementById("passwordConfirmation").value = data["shortDescription"];
    document.getElementById("textarea").value = data["description"];
}

// Form Submission
function setupFormSubmission(characterData) {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const updatedCharacterData = {
      id: characterData.id,
      name: formData.get("name"),
      description: formData.get("description"),
      shortDescription: formData.get("shortDescription"),
      image: characterData.image, // Preserve the existing image or update it if needed
    };

    fetch("https://character-database.becode.xyz/characters/" + characterData.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCharacterData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Character data updated successfully!");
      });
  });
}

