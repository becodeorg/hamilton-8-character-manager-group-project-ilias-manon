
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const formData = new FormData(form);

  console.log(formData)
});


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  
  const $file = document.querySelector(".local");
  $file.addEventListener("change", (event) => {
    const selectedfile = event.target.files;
    if (selectedfile.length > 0) {
      const [imageFile] = selectedfile;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const srcData = fileReader.result;
        console.log('base64:', srcData)
      };
      fileReader.readAsDataURL(imageFile);
    }
  });
  
  
  const characterData = {
    name: formData.get("name"),
    description: formData.get("description"),
    shortDescription: formData.get("shortDescription"),
    Image: $file,
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
});