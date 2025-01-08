
// like toggle
function toggleLike(icon) {
    if (icon.classList.contains('liked')) {
        icon.classList.remove('liked');
    } else {
        icon.classList.add('liked');
    }
}

// pop-up
const popup = document.getElementById("popup");

function openPopup() {
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}

// Close popup
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

// change text content based on the image

// Get the elements inside the popup for dynamic content
const headerContent = document.getElementById("header-content");
const paragraphContent = document.getElementById("paragraph-content");

// Function to open the popup with dynamic content
function openPopup(type) {
    // Update content based on the `type` parameter
    if (type === "dog") {
        headerContent.textContent = "The Bristolian Dogs";
        paragraphContent.textContent = "Dogs are definitely Bristolians' best friends. There's literally no day you won't see one";
    } else if (type === "cat") {
        headerContent.textContent = "Sneaky Cats";
        paragraphContent.textContent = "These graceful creatures are very agile and you won't often see them in the mornings or evenings.";
    } else if (type === "swan") {
        headerContent.textContent = "Avonmouth Swans";
        paragraphContent.textContent = "Residing in Avonmouth, these birds are very cheeky. Please take heed to the swan signs you see on the roads to Severn Beach or Avonmouth Wraehouse regions!";
    }else if( type === "horse") {
        headerContent.textContent = "The Valley-side Horses";
        paragraphContent.textContent = "These valiant creatures can be seen in fields and little farms alongside Yate, Henbury, Almondsbury, Thornbury and Emersons Green";
    }else if(type=== "rabbit"){
        headerContent.textContent = "Cute bunnies";
        paragraphContent.textContent = "These cuties hide in bushes every where, you can find them in parks, forest or non-residential areas such as warehouse distribution centres in Emerson Greens, Avonmouth. Bunnies need to be treated right.";
    }else if(type=== "seagulls"){
        headerContent.textContent = "Our everyday seagulls";
        paragraphContent.textContent= "These birds are Bristolian's everyday birds, protected by law. Do not under any circumstances trouble this species.";
    }else if(type=== "snail"){
        headerContent.textContent = "Rainy day Sanils";
        paragraphContent.textContent = "Snails are prominent in our rainy ecosystem. These creatures are very shy and less argumentative- please be careful not to step on random snail shells in Bristol.";
    }else if(type=== "fox"){
        headerContent.textContent = "Stray foxes";
        paragraphContent.textContent = "This is the most discriminated species in the Bristol ecosystem. Foxes are meant to also be protected and taken care of by animal specialists.";
    }else if(type=== "squirrel"){
        headerContent.textContent = "Squirrels";
        paragraphContent.textContent = "Say no to squirrel killing in Bristol!!!";
    }else if(type=== "pigeons"){
        headerContent.textContent = "Pigeons";
        paragraphContent.textContent = "The friendly neighbour to seagulls. The second most prominent birds in Bristol";
    }else if(type=== "ducks"){
        headerContent.textContent = "Ducks";
        paragraphContent.textContent = "Ducks, ducks, ducks, let's leave em to swim. Feed them crumbles that aren't expired!!";
    }
    
    // put the remaining dynamic text here!!!

    // Show the popup
    popup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
    popup.style.display = "none";
}

// Close popup when clicking outside of it
window.onclick = function (event) {
    if (event.target === popup) {
        closePopup();
    }
};
