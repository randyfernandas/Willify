let bar = document.getElementById("bar");
    let song = document.getElementById("song");
    let icons = document.getElementById("icons");

    song.onloadedmetadata = function(){
        bar.max = song.duration;
        bar.value = song.currentTime;
    }

    function playPause(){
        if(icons.classList.contains("fa-pause")){
            song.pause();
            icons.classList.remove("fa-pause");
            icons.classList.add("fa-play");
        } else {
            song.play();
            icons.classList.add("fa-pause");
            icons.classList.remove("fa-play");
        }
    }

    song.addEventListener("timeupdate", function(){
        bar.value = song.currentTime
    })

    bar.onchange = function(){
        song.play();
        song.currentTime = bar.value;
        icons.classList.add("fa-pause");
        icons.classList.remove("fa-play");
    }