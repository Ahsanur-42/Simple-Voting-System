let henVotes = 0;
let speakerVotes = 0;
let handFanVotes = 0;

document.getElementById("hen-button").addEventListener("click", ()=>{
    henVotes++;
    document.getElementById("hen-votes").innerHTML = henVotes;
});

document.getElementById("speaker-button").addEventListener("click", ()=>{
    speakerVotes++;
    document.getElementById("speaker-votes").innerHTML = speakerVotes;
});

document.getElementById("hand-fan-button").addEventListener("click", ()=>{
    handFanVotes++;
    document.getElementById("hand-fan-votes").innerHTML = handFanVotes;
});


document.getElementById("hen-button2").addEventListener("click", ()=>{
    henVotes--;
    document.getElementById("hen-votes").innerHTML = henVotes;
});

document.getElementById("speaker-button2").addEventListener("click", ()=>{
    speakerVotes--;
    document.getElementById("speaker-votes").innerHTML = speakerVotes;
});

document.getElementById("hand-fan-button2").addEventListener("click", ()=>{
    handFanVotes--;
    document.getElementById("hand-fan-votes").innerHTML = handFanVotes;
});