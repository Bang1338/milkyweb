function playAudio(e){new Audio(e).play()}const mouseoverClick=()=>playAudio("https://cdn.pixabay.com/download/audio/2022/12/29/audio_257d21d95b.mp3?filename=click-button-131479.mp3");function displayAlt(e){"none"!=document.getElementById(e).style.display?document.getElementById(e).style.display="none":document.getElementById(e).style.display=""}function shuffleArray(e){for(var n=e.length-1;0<n;n--){var t=Math.floor(Math.random()*(n+1)),o=e[n];e[n]=e[t],e[t]=o}return e}