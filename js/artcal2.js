
//音樂==================================================================
const musicplay=document.getElementById('bkgm_pic_play');
const audio_a2=new Audio('..\\music\\山口百惠 - ありがとう あなた.flac');
musicplay.addEventListener("click", playStopMusic);
function playStopMusic() {
    if (audio_a2.paused) {
      //If it is paused, we can then play the audio
        audio_a2.play();           
    }else {
        //Otherwise, if it is already playing, we can then pause it
        audio_a2.pause(); 
    }  
  }
 







