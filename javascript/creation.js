
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const formData = new FormData(form);

  console.log(formData)
});


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const $file = document.getElementById("file-upload");
  const selectedFile = $file.files[0];

  if (selectedFile) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const base64Data = fileReader.result;
      const characterData = {
        name: formData.get("name"),
        description: formData.get("description"),
        shortDescription: formData.get("shortDescription"),
        image: base64Data.split(',')[1],
      };

      fetch("https://character-database.becode.xyz/characters/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(characterData),
      })
        .then((response) => response.json())
        .then((data) => {
          const characterId = data.id;
          alert("ID du personnage : " + characterId);
        });
    };

    fileReader.readAsDataURL(selectedFile);
  }
});