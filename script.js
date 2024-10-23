// Variables 
const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];
let currentIndex = 0;
let showingTerm = true;
let maxCards = flashcards.length
let card = document.getElementById("flashcard")
let nextButton = document.getElementById("next-btn")
let prevButton = document.getElementById("prev-btn")

// Variables 



// Helpers

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


// Listening Events
card.addEventListener("click", () => (
    showingTerm = (showingTerm == true) ? false : true,
    displayCard()
))

nextButton.addEventListener("click", function() {
    // Advance the flashcared
    currentIndex += 1
    currentIndex = (currentIndex >= maxCards) ? 0 : currentIndex

    // Reset so that term is showing and display card
    showingTerm = true
    displayCard()
})

prevButton.addEventListener("click", function() {
    // Advance the flashcared
    currentIndex -= 1
    currentIndex = (currentIndex < 0) ? maxCards-1 : currentIndex

    // Reset so that term is showing and display card
    showingTerm = true
    displayCard()
})
// Listening Events


// This line will display the card when the page is refreshed
window.onload = displayCard;