//const node = document.getElementById("test");
//const clone = node.cloneNode(true);

//document.getElementById("charactercontainer").appendChild(clone); 


async function test() {
    const response = await fetch("https://character-database.becode.xyz/characters");
    const jsonData = await response.json();
    console.log(jsonData.length);
    console.log(jsonData)
}

test()


//async function cards() {
//    const node = document.getElementById("test");
//    const clone = node.cloneNode(true);
//    const getname = document.getElementById("charactername");
//    const getimg = document.getElementById("characterimg");
//    const getdesc = document.getElementById("shortdescription");
//    const response = await fetch("https://character-database.becode.xyz/characters");
//    const jsonData = await response.json();
//    const getcontainer = document.getElementById("charactercontainer")
    
    
    
    
//    jsonData.forEach(function(objet) {
//        var carteClone = document.getElementById("charactercontainer").appendChild(clone);
      
//        carteClone.querySelector("#charactername").innerText = objet.name;
//        carteClone.querySelector("#shortdescription").innerText = objet.shortDescription;
//        carteClone.querySelector("#characterimg").setAttribute("src", "data:image/png;base64," + objet.image);
      
//        getcontainer.appendChild(carteClone);
//      });
//};


//cards()


async function cards() {
    const response = await fetch("https://character-database.becode.xyz/characters");
    const jsonData = await response.json();
    const getcontainer = document.getElementById("charactercontainer");
  
    jsonData.forEach(function(objet) {
      const clone = document.getElementById("test").cloneNode(true);
  
      clone.querySelector("#charactername").innerText = objet.name;
      clone.querySelector("#shortdescription").innerText = objet.shortDescription;
      clone.querySelector("#characterimg").setAttribute("src", "data:image/png;base64," + objet.image);
      clone.querySelector("#newpage").setAttribute("href", "/html/singleCharacter.html?id=" + objet.id);  
      clone.querySelector("#newpage").setAttribute("href", "src/html/singleCharacter.html?id=" + objet.id);  
      // Ajoutez la carte clonée au parent
      getcontainer.appendChild(clone);
    });


    const removefirst = document.getElementById("charactercontainer");
    removefirst.removeChild(removefirst.firstElementChild);
}
  
cards();


  