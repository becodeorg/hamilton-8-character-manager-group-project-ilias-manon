
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const formData = new FormData(form);

  console.log(formData)
});



form.addEventListener("submit", (event) => {

    event.preventDefault();
  
    const formData = new FormData(form);
  
    fetch("https://character-database.becode.xyz/characters/", {
  
      method: "POST",
  
      description: formData[3],
  
      shortdescription: formData[2],
  
      name: formData[1],
  
    }).then((response) =>
  
      response.text().then((data) => console.log(data))
  
    );
  
  });