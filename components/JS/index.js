function getMemoryCards() {
    const memoryCards = [];
    for(let i = 1; i <= 6; i++) {
        let memoryCard = document.getElementById(`memory-card-${i}`);
        memoryCards.push(memoryCard);
    }
    let test = memoryCards[3]
    if(test.style.display == "none") {
        test.style.display = "block";
    } else {
        test.style.display = "none";
    }
}