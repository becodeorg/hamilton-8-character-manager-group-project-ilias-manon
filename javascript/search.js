async function searchBar() {
    const response = await fetch("https://character-database.becode.xyz/characters");
    const jsonData = await response.json();
    console.log(jsonData.length);
    console.log(jsonData);
  
    const nameId = jsonData.map(({ name, id }) => ({ name, id }));
  
    console.log(nameId);

    let list = document.getElementById('list');
    nameId.forEach((nameId)=>{
        let a = document.createElement("a");
        a.innerText = nameId;
        a.classList.add("listItem");
    list.appendChild(a);
    })
  }
  
  searchBar();

