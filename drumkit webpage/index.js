$(document).ready(function () {

    function playAudio(selectedAudio) {

        $('.card').css({'border': "2px solid white", "padding": "30px", "border-radius":"10px", "transition": "0.3s"});
        $('#'+selectedAudio).css({'border': "2px solid brown", "padding": "40px", "transition": "0.3s"});
        $('#audio-player').attr("src", "./assets/" +selectedAudio+ ".wav");
        $('#audio-player')[0].play();      

    }

    $('body').keypress(function(e){
        keyVal = e.key.toLowerCase();
        if(keyVal == 'a'){
            playAudio("clap");
        }
        if(keyVal == 's'){
            playAudio("hihat");
        }
        if(keyVal == 'd'){
            playAudio("kick");
        }
        if(keyVal == 'f'){
            playAudio("openhat");
        }
        if(keyVal == 'g'){
            playAudio("boom");
        }
        if(keyVal == 'h'){
            playAudio("ride");
        }
        if(keyVal == 'j'){
            playAudio("snare");
        }
        if(keyVal == 'k'){
            playAudio("tom");
        }
        if(keyVal == 'l'){
            playAudio("tink");
        }
    })

    $('#clap').click(function(){
        playAudio("clap");
    })
    $('#hihat').click(function(){
        playAudio("hihat");
    })
    $('#kick').click(function(){
        playAudio("kick");
    })
    $('#openhat').click(function(){
        playAudio("openhat");
    })
    $('#boom').click(function(){
        playAudio("boom");
    })
    $('#ride').click(function(){
        playAudio("ride");
    })
    $('#snare').click(function(){
        playAudio("snare");
    })
    $('#tom').click(function(){
        playAudio("tom");
    })
    $('#tink').click(function(){
        playAudio("tink");
    })
    
})



