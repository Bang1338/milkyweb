function getCurrentUnixTimeHex(){return Math.floor(Date.now()/1e3).toString(16).toUpperCase()}function updateUnixTime(){var e=document.getElementById("unix-time-placeholder"),t=getCurrentUnixTimeHex();e.textContent=t}updateUnixTime(),setInterval(updateUnixTime,1e3);