const idCharacter = (new URLSearchParams(window.location.search)).get('id'); //window.location.search = URL actuel de ma page

fetch("https://character-database.becode.xyz/characters/" + idCharacter)
.then(response => response.json())
.then (data => editData(data));

function editData(data){
    console.log(data["name"]);
    document.getElementById("username").value = data["name"];
    document.getElementById("passwordConfirmation").value = data["shortDescription"];
    document.getElementById("textarea").value = data["description"];
}