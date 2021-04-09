console.log('init');
let chars = [
    'ੳ', 'ਅ', 'ੲ', 'ਸ', 'ਹ',
    'ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ',
    'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਞ',
    'ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 
    'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ', 
    'ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ',
    'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ੜ',
    'ਸ਼', 'ਖ਼', 'ਗ਼', 'ਜ਼', 'ਫ਼',
    'ਲ਼'
]
const parentContainer = document.getElementsByClassName('grid-container')[0];
const audioElem = document.getElementById('audio-elem');

parentContainer.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;

chars.forEach((char) => {
    handleChar(char);
})

function handleChar(char) {
    let newDiv = document.createElement('div');
    newDiv.textContent = char;
    newDiv.addEventListener('click', function () {
        audioElem.setAttribute("src", `sounds/${char}.m4a`);
        audioElem.play();
    })
    parentContainer.appendChild(newDiv);
}