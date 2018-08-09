var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var song = document.querySelector('.track');
var audioDuration = document.querySelector('.audio-duration');
var seek = document.querySelector('.seek');
var volume = document.querySelector('.volume');
var replay = document.querySelector('.replay');


play.addEventListener("click", function() {
        song.play();
        play.classList.add("hidden");
        pause.classList.remove("hidden");
});

pause.addEventListener("click", function() {
        song.pause();
        play.classList.remove("hidden");
        pause.classList.add("hidden");
});

        volume.addEventListener("click", function() {
            if (song.volume>=0) {
            song.volume-=0.1;
        } else {
            song.volume = 0.9;
        }
    })

        replay.addEventListener("click", function() {
            song.currentTime = 0;
        })

// user-click-position
        seek.addEventListener ("change", function() {
        song.currentTime = seek.value;
        seek.style.max = song.duration;
        seek.style.outline = 'none';
    });


// song-position
        song.addEventListener('timeupdate',function () {
        var seconds = parseInt(song.currentTime % 60);
        var minutes = parseInt((song.currentTime / 60) % 60);

        if(seconds < 10){
            seconds = '0' + seconds;
        }

        seek.max = song.duration;
        seek.value = song.currentTime;
        audioDuration.innerHTML = minutes + ':' + seconds;
    });

    //smooth-navigation-scroll-section
    $(".main-nav-list a").on("click", function(e) {
        e.preventDefault();
        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;
            $("html, body").animate({
                scrollTop: currentBlockOffset - 50
            }, 500);
    })

        //Делаем липкое меню
    $(document).on("scroll", function() {
    var headerH = $(".main-header").height();
    var documentScroll = $(document).scrollTop(); //получаем высоту скролла от верха браузера

        if (documentScroll>headerH) {
            $(".main-nav-list").addClass("nav-fixed");
        } else {
            $(".main-nav-list").removeClass("nav-fixed");
        };

    })



    // wow.js
     new WOW().init({
         offset: -200,
         delay: -200
     });
