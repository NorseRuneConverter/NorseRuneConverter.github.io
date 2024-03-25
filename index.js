const runeMap = {
    'a': 'ᚨ', 'v': 'ᛒ', 'b': 'ᛒ', 'q': 'ᚲ', 'c': 'ᚲ', 'k': 'ᚲ', 'd': 'ᛞ',
    'e': 'ᛖ', 'f': 'ᚠ', 'h': 'ᚺ', 'g': 'ᚷ', 'i': 'ᛁ', 'j': 'ᛃ', 'l': 'ᛚ',
    'm': 'ᛗ', 'n': 'ᚾ', 'ñ': 'ᛜ', 'o': 'ᛟ', 'p': 'ᛈ', 'r': 'ᚱ', 's': 'ᛊ',
    't': 'ᛏ', 'u': 'ᚢ', 'w': 'ᚹ', 'z': 'ᛉ', 'y': 'ᛉ', 'x': 'ᚲᛊ',
    // Capital letters
    'A': 'ᚨ', 'V': 'ᛒ', 'B': 'ᛒ', 'Q': 'ᚲ', 'C': 'ᚲ', 'K': 'ᚲ', 'D': 'ᛞ',
    'E': 'ᛖ', 'F': 'ᚠ', 'H': 'ᚺ', 'G': 'ᚷ', 'I': 'ᛁ', 'J': 'ᛃ', 'L': 'ᛚ',
    'M': 'ᛗ', 'N': 'ᚾ', 'Ñ': 'ᛜ', 'O': 'ᛟ', 'P': 'ᛈ', 'R': 'ᚱ', 'S': 'ᛊ',
    'T': 'ᛏ', 'U': 'ᚢ', 'W': 'ᚹ', 'Z': 'ᛉ', 'Y': 'ᛉ', 'X': 'ᚲᛊ'
};

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

inputText.addEventListener('input', function() {
    let input = this.value;
    let output = '';
    for (let char of input) {
        output += runeMap[char.toLowerCase()] || char;
    }
    outputText.textContent = output;
});
