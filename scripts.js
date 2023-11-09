const songs = [{
    src: '../music/song1.mp3',
    img: 'https://imgs.search.brave.com/4utU7dd-hTGeLy0FOv2ujN0voiRqcby1h2xuKRsvifw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTRkMmEw/Y2NmLWFkYjctNGYz/Yy1hYzg4LWE2MGFm/ZWJmMDg1Yi0wLXQ1/MDB4NTAwLmpwZw',
    title: 'Quizás, Tal vez',
    artist: 'Eladio Carrión',
    duration: '3:00'
},
{
    src: '../music/song2.mp3',
    img: 'https://imgs.search.brave.com/LK4SUuPdNZwxcT49dN4PODU6kCnj3Dxs1O_gqIFR7jE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC9x/X2dsb3NzeSxyZXRf/aW1nLHdfMzAwL2h0/dHBzOi8vd3d3LnBv/bGFybmlnaHRzLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMi9iZW55LWpy/LTMwLTMwMHgzMDAu/anBn',
    title: '8 a.m',
    artist: 'Beny Jr',
    duration: '3:00'
},
{
    src: '../music/song3.mp3',
    img: 'https://imgs.search.brave.com/PUqBgf0DgsOHM4GknS1K7uA_466AnxCLqe9SfWb5Adg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLUZ4anRk/MmhKelkxVi0wLXQ1/MDB4NTAwLmpwZw',
    title: 'No estuviste en lo malo',
    artist: 'Morad',
    duration: '3:00'
},
{
    src: '../music/song4.mp3',
    img: 'https://imgs.search.brave.com/HozeEts6DC5xmaiwE8f9Vn1d1o9dDwbbeDi7XMqW_zo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLXZSdGd6/ZW9jYmZaczhXWTct/RDBCOVFnLXQ1MDB4/NTAwLmpwZw',
    title: 'Columbia',
    artist: 'Quevedo',
    duration: '3:00'
},
{
    src: '../music/song5.mp3',
    img: 'https://imgs.search.brave.com/nAZkPX7pmfze_u8eC9nzP2MDAbhuefw0OEyCUEasthQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tcDN0/ZWNhLmFwcC9pbWFn/ZXMvOTcyNjBfMzUw/XzIwMjEwODIzMTYy/MjU4LmpwZw',
    title: '23 Preguntas',
    artist: 'Anuel AA',
    duration: '3:00'
},
{
    src: '../music/song6.mp3',
    img: 'resources/albumBlackTho.png',
    title: 'Ten Cuidado',
    artist: 'Blackthoven',
    duration: '3:00'
},
{
    src: '../music/song7.mp3',
    img: 'https://imgs.search.brave.com/lryUZe9amOE5Re8LsA1yQzPBRE2Bwe_PXL0mn7P0FQI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jYS9MaWxfQmFi/eV8tX1RoZV9CaWdn/ZXJfUGljdHVyZS5w/bmcvMjIwcHgtTGls/X0JhYnlfLV9UaGVf/QmlnZ2VyX1BpY3R1/cmUucG5n',
    title: 'The Bigger Picture',
    artist: 'Lil Baby',
    duration: '3:00'
},
{
    src: '../music/song8.mp3',
    img: 'https://imgs.search.brave.com/lVZQwIMDMZA8hWzgnbaT8uYEbPCduYm6xBesXVtVzGQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxcHloSkIwWmRM/Ll9BQ19VTDIwMF9T/UjIwMCwyMDBfLmpw/Zw',
    title: 'Black & White',
    artist: 'Juice Wrld',
    duration: '3:00'
}];

// const radioStations = [
//     {
//         name: "Los 40 FM",
//         url: "http://flaix.stream.flumotion.com/flaix/FLAIXfm.mp3"
//     }
// ];

//QUERY SELECTORS
const songTitle = document.querySelector(".song-name");
const songArtist = document.querySelector(".author-name");
const songImage = document.querySelector(".cover-song");
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const returnButton = document.querySelector(".return-button");
const nextButton = document.querySelector(".next-button");
const progressBar = document.getElementById("progress");
const progressBarPos = document.getElementById("progress-bar");

//INITIALLY HIDE PAUSE BUTTON
pauseButton.style.display = "none";

let sound;

//FUNCTION TO DISPLAY SONGS DATASET
function listSongs() {
    const table = document.querySelector("table");

    songs.forEach((element, index) => {
        const row = table.insertRow();

        //NEW CELL FOR EACH COLUMN
        const cell = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        //CREATE THE ELEMENTS
        const cov = document.createElement("img");
        const tit = document.createElement("td");
        const art = document.createElement("td");
        const dur = document.createElement("td");

        //ASSIGN CELLS TO THE ARRAY ELEMENTS
        cov.src = element.img;
        tit.innerHTML = element.title;
        art.innerHTML = element.artist;
        dur.innerHTML = element.duration;

        //APPEND CHILD IN ALL TABLE TD'S
        cell.appendChild(cov);
        cell2.appendChild(tit);
        cell3.appendChild(art);
        cell4.appendChild(dur);

        //ASSIGN UNIQUE ID TO EACH ROW
        row.dataset.songId = index;
    });
}


//FUNCTION TO PLAY A SELECTED SONG FROM PLAYLIST
function playSelectedSong() {
    const tableRows = document.querySelectorAll("table tr");

    tableRows.forEach((row) => {
        row.addEventListener("click", function () {
            const songId = row.dataset.songId;
            const selectedSong = songs[songId];

            if (sound) {
                sound.stop();
            }

            sound = new Howl({
                src: [selectedSong.src],
                volume: 0.5
            })

            sound.play();

            const durationSongs = sound.duration();

            setInterval(() => {
                const currentTime = sound.seek();
                const progress = (currentTime / durationSongs) * 100;

                progressBar.style.width = `${progress}%`;
            })

            playButton.style.display = "none";
            pauseButton.style.display = "block";

            songImage.src = selectedSong.img;
            songTitle.textContent = selectedSong.title;
            songArtist.textContent = selectedSong.artist;
        });
    });
}


function playRadio(stationIndex) {
    const station = radioStations[stationIndex];

    if (sound) {
        sound.stop();
    }

    sound = new Howl({
        src: [station.url],
        format: ['mp3'],
        autoplay: true
    });

    sound.play();
}


//FUNCTIONS CALLING
listSongs();
playSelectedSong();


//LISTENERS
playButton.addEventListener("click", function () {
    if (!sound) {
        sound = new Howl({
            src: [songs[0].src],
            volume: 0.5
        });
    }

    sound.play();

    const durationSongs = sound.duration();

    setInterval(() => {
        const currentTime = sound.seek();
        const progress = (currentTime / durationSongs) * 100;

        progressBar.style.width = `${progress}%`;
    })

    playButton.style.display = "none";
    pauseButton.style.display = "block";
});

pauseButton.addEventListener("click", function () {
    sound.pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
});

progressBarPos.addEventListener('click', (event) => {
    const durationSongs = sound.duration();

    //GET THE CLICK POS INSIDE PROGRESS BAR
    const progressBarRect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - progressBarRect.left;

    //CALCULE THE % AT THE CLICKED POS
    const newProgress = (clickX / progressBar.offsetWidth) * 100;

    //UPDATE THE POSITION
    document.getElementById('progress').style.width = `${newProgress}%`;

    const newPosition = (newProgress / 100) * durationSongs;
    sound.stop();

    const finalPosition = Math.min(newPosition, durationSongs);

    //DEFINE THE NEW POSITION AND PLAY SOUND AGAIN
    sound.seek(finalPosition);
    sound.play();

    //RECURSIVE FUNCTION TO UPDATE THE PROGRESS BAR
    function updateProgress() {
        const currentTime = sound.seek();
        const progress = (currentTime / durationSongs) * 100;

        document.getElementById('progress').style.width = `${progress}%`;

        if (!sound.playing()) {
            return;
        }

        requestAnimationFrame(updateProgress);
    }
    updateProgress();

});

