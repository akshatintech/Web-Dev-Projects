console.log("Welcome To SPotify ");

//Intializing the Variables
let songIndex =0;
let audioElement  = new Audio("song/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName : "Salam E Ishq" , filepath : "song/1.mp3" , coverPath : "covers/1.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/2.mp3" , coverPath : "covers/2.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/3.mp3" , coverPath : "covers/3.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/4.mp3" , coverPath : "covers/4.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/5.mp3" , coverPath : "covers/5.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/6.mp3" , coverPath : "covers/6.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/7.mp3" , coverPath : "covers/7.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/8.mp3" , coverPath : "covers/8.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/9.mp3" , coverPath : "covers/9.jpg"},
    {songName : "Salam E Ishq" , filepath : "song/9.mp3" , coverPath : "covers/10.jpg"}

]

songItems.forEach((element ,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src  =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//audioElement



//Handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
//Listen to the event
audioElement.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');  
    //Update SeeKBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})



const makeAllPlay = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle'); 

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id) ; 
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle'); 
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;   
        audioElement.play;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;

    }
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;   
        audioElement.play;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songInde<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;

    }
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;   
        audioElement.play;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})