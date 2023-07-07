const imagediv = document.getElementById("character_picture");
const postName = (new URLSearchParams(window.location.search)).get('id'); //window.location.search = URL actuel de ma page
fetch("https://character-database.becode.xyz/characters/" + postName )
.then(response => response.json())
.then (data => displayData(data));
//the function displayData is to display the information contained in the object (array)
function displayData(data){
    console.log(data["name"])
    //for image
    const image = "data:image/png;base64," + data["image"];
    const imageDiv = document.getElementById("image_character_div");
    const characterImage = document.createElement('img');
    characterImage.src = image;
    imageDiv.appendChild(characterImage);
    //for name
    const name = data['name'];
    let nameHeader = document.getElementById("name_character");
    nameHeader.textContent = name;
    //for long description
    const longDescription = data['description'];
    let descriptionParagraph = document.getElementById('description_character');
    descriptionParagraph.textContent = longDescription;
}

const buttonDelete=document.getElementById("buttonDeleteCharater");
buttonDelete.addEventListener("click", deleteCharacter);

function deleteCharacter(){
    if(confirm("Are you sure you want to delete this character?")){
        fetch("https://character-database.becode.xyz/characters/" +postName ,{method: 'DELETE'})
        .then(response => {
            if (response.ok){
                console.log("DELETED")
            }
            else{console.log("not deleted")}
        })
    }
    else{
        console.log("You did not delete this character");
    }
    

}

//linking with the edit page

const buttonEdit=document.getElementById("buttonEditCharacter");
buttonEdit.setAttribute("href", "editCharacter.html?id=" + postName);  

