// Array of emoticons to cycle through
const emoticons = ['≽^•⩊•^≼', 'ฅ^>⩊<^ ฅ', '(˶˃ᆺ˂˶)', '/ᐠ｡‸｡ᐟ\\', '(˶˃⤙˂˶)','(╥﹏╥)'];

// Get all elements with the emoticon class
const emoticonElements = document.querySelectorAll('.emoticon');

// Function to change emoticons at regular intervals
function rotateEmoticons() {
    let index = 0; // Starting index for the array
    
    setInterval(() => {
        // Update each emoticon element with the current emoticon
        emoticonElements.forEach(el => {
            el.textContent = emoticons[index];
        });
        
        // Move to the next emoticon, loop back to the first if at the end
        index = (index + 1) % emoticons.length;
    }, 300); // Change emoticon every 2 seconds (adjust as needed)
}

// Start rotating emoticons when the page loads
window.addEventListener('DOMContentLoaded', rotateEmoticons);
