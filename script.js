// Variables 
let currentIndex = 0;
let showingTerm = true;
const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];
// Variables 

// Instances
let card = document.getElementById("flashcard")
let nextButton = document.getElementById("next-btn")
let prevButton = document.getElementById("prev-btn")
let addCardButton = document.getElementById("add-card-btn")
// Instances



// Display card based on definition or term
function displayCard() {
    if (showingTerm == true) {
        let card = document.getElementById("flashcard")
        card.innerText = flashcards[currentIndex].term
    }
    else {
        let card = document.getElementById("flashcard")
        card.innerText = flashcards[currentIndex].definition
    }
}

// Create a new card then add it to flascards table
function addCard() {
    let termValue = document.getElementById("new-term").value
    let defValue = document.getElementById("new-definition").value
    let tble = {term: termValue, definition: defValue}
    flashcards.push(tble)

    document.getElementById("new-term").value = ""
    document.getElementById("new-definition").value = ""
}



// Listening Events
addCardButton.addEventListener("click", addCard)

card.addEventListener("click", () => (
    showingTerm = (showingTerm == true) ? false : true,
    displayCard()
))


nextButton.addEventListener("click", function() {
    // Advance the flashcared
    currentIndex += 1
    currentIndex = (currentIndex >= flashcards.length) ? 0 : currentIndex

    // Reset so that term is showing and display card
    showingTerm = true
    displayCard()
})

prevButton.addEventListener("click", function() {
    // Advance the flashcared
    currentIndex -= 1
    currentIndex = (currentIndex < 0) ? flashcards.length - 1 : currentIndex

    showingTerm = true
    displayCard()
})
// Listening Events



// This line will display the card when the page is refreshed
window.onload = displayCard;