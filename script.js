document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("color-board-container");

    // Generate 800 squares dynamically
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add mouseover and mouseout event listeners
        square.addEventListener("mouseover", handleMouseOver);
        square.addEventListener("mouseout", handleMouseOut);

        container.appendChild(square);
    }
});

function handleMouseOver(event) {
    // Change background color on hover
    event.target.style.backgroundColor = 'lightcoral';

    // Revert the color after 1 second
    setTimeout(() => {
        event.target.style.backgroundColor = 'lightblue';
    }, 1000);
}

function handleMouseOut(event) {
    // Revert the color on mouseout
    event.target.style.backgroundColor = 'lightblue';
}
