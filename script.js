const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let card = document.getElementById("flashcard")
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    if (showingTerm == true) {
        let card = document.getElementById("flashcard")
        card.innerText = flashcards[currentIndex].term
    }
    else {
        let card = document.getElementById("flashcard")
        card.innerText = flashcards[currentIndex].definition
        // showingTerm = false
    }
}

displayCard()

// The rest of the code you will write is apart of event listeners
card.addEventListener("click", () => (
    showingTerm = (showingTerm == true) ? false : true,
    // console.log("Hello world!"+showingTerm)
    displayCard()
    // console.log(showingTerm + "He")
))

// This line will display the card when the page is refreshed
window.onload = displayCard;