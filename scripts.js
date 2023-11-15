//ARRAY OBJECTS
const songs = [
    {
        src: '../music/song1.mp3',
        img: 'https://imgs.search.brave.com/4utU7dd-hTGeLy0FOv2ujN0voiRqcby1h2xuKRsvifw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTRkMmEw/Y2NmLWFkYjctNGYz/Yy1hYzg4LWE2MGFm/ZWJmMDg1Yi0wLXQ1/MDB4NTAwLmpwZw',
        title: 'Quizás, Tal vez',
        artist: 'Eladio Carrión',
        duration: '2:27'
    },
    {
        src: '../music/song2.mp3',
        img: 'https://imgs.search.brave.com/LK4SUuPdNZwxcT49dN4PODU6kCnj3Dxs1O_gqIFR7jE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC9x/X2dsb3NzeSxyZXRf/aW1nLHdfMzAwL2h0/dHBzOi8vd3d3LnBv/bGFybmlnaHRzLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMi9iZW55LWpy/LTMwLTMwMHgzMDAu/anBn',
        title: '8 a.m',
        artist: 'Beny Jr',
        duration: '3:12'
    },
    {
        src: '../music/song3.mp3',
        img: 'https://imgs.search.brave.com/PUqBgf0DgsOHM4GknS1K7uA_466AnxCLqe9SfWb5Adg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLUZ4anRk/MmhKelkxVi0wLXQ1/MDB4NTAwLmpwZw',
        title: 'No estuviste en lo malo',
        artist: 'Morad',
        duration: '4:07'
    },
    {
        src: '../music/song4.mp3',
        img: 'https://imgs.search.brave.com/HozeEts6DC5xmaiwE8f9Vn1d1o9dDwbbeDi7XMqW_zo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLXZSdGd6/ZW9jYmZaczhXWTct/RDBCOVFnLXQ1MDB4/NTAwLmpwZw',
        title: 'Columbia',
        artist: 'Quevedo',
        duration: '3:06'
    },
    {
        src: '../music/song5.mp3',
        img: 'https://imgs.search.brave.com/nAZkPX7pmfze_u8eC9nzP2MDAbhuefw0OEyCUEasthQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tcDN0/ZWNhLmFwcC9pbWFn/ZXMvOTcyNjBfMzUw/XzIwMjEwODIzMTYy/MjU4LmpwZw',
        title: '23 Preguntas',
        artist: 'Anuel AA',
        duration: '4:11'
    },
    {
        src: '../music/song6.mp3',
        img: 'resources/albumBlackTho.png',
        title: 'Ten Cuidado',
        artist: 'Blackthoven',
        duration: '2:39'
    },
    {
        src: '../music/song7.mp3',
        img: 'https://imgs.search.brave.com/lryUZe9amOE5Re8LsA1yQzPBRE2Bwe_PXL0mn7P0FQI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jYS9MaWxfQmFi/eV8tX1RoZV9CaWdn/ZXJfUGljdHVyZS5w/bmcvMjIwcHgtTGls/X0JhYnlfLV9UaGVf/QmlnZ2VyX1BpY3R1/cmUucG5n',
        title: 'The Bigger Picture',
        artist: 'Lil Baby',
        duration: '4:12'
    },
    {
        src: '../music/song8.mp3',
        img: 'https://imgs.search.brave.com/lVZQwIMDMZA8hWzgnbaT8uYEbPCduYm6xBesXVtVzGQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxcHloSkIwWmRM/Ll9BQ19VTDIwMF9T/UjIwMCwyMDBfLmpw/Zw',
        title: 'Black & White',
        artist: 'Juice Wrld',
        duration: '3:06'
    }
];
const radioStations = [
    {
        name: "Mirchi",
        url: "http://peridot.streamguys.com:7150/Mirchi"
    },
    {
        name: "Antenne Bayern",
        url: "http://play.antenne.de/antenne.m3u"
    },
    {
        name: "Bayer 3",
        url: "https://streams.br.de/bayern3_1.m3u"
    },
    {
        name: "Rock Antenne",
        url: "http://play.rockantenne.de/rockantenne.m3u"
    }
];


//QUERY SELECTORS
const songTitle = document.querySelector(".song-name");
const songArtist = document.querySelector(".author-name");
const songImage = document.querySelector(".cover-song");
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const returnButton = document.querySelector(".return-button");
const nextButton = document.querySelector(".next-button");
const progressBar = document.getElementById("progress-bar");
const progressBarContainer = document.getElementById("progress-container");
const volumeInput = document.getElementById("volume-bar");
const canvas = document.getElementById("equalizer");
const ctx = canvas.getContext("2d");


//INITIALLY HIDE PAUSE BUTTON
pauseButton.style.display = "none";

//HOWLER INTIAL DECLARATION
const audioElement = new Audio();
audioElement.src = songs[0].src;

let sound = new Howl({
    src: [songs[0].src],
    volume: 0.5
});
let currentSongIndex = 0;


//EQUALIZER CONSTANTS
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

const source = audioContext.createMediaElementSource(audioElement);
source.connect(analyser);
analyser.connect(audioContext.destination);


function initializeHowler(songIndex) {
    if (sound) {
        sound.stop();
        sound.unload();
    }

    const selectedSong = songs[songIndex];

    sound = new Howl({
        src: [selectedSong.src],
        volume: 0.5,
        onplay: function () {
            requestAnimationFrame(updateProgressBar);
        },
    });

    sound.play();
}
//FUNCTION TO DISPLAY SONGS DATASET
function listSongs() {
    const table = document.querySelector("table");

    //List the array songs and display a row for each one
    songs.forEach((element, index) => {
        const row = table.insertRow();

        const cell = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        //Cell creation
        const cov = document.createElement("img");
        const tit = document.createElement("td");
        const art = document.createElement("td");
        const dur = document.createElement("td");

        //Assign them to each key value
        cov.src = element.img;
        tit.innerHTML = element.title;
        art.innerHTML = element.artist;
        dur.innerHTML = element.duration;

        //Append to to his child cell
        cell.appendChild(cov);
        cell2.appendChild(tit);
        cell3.appendChild(art);
        cell4.appendChild(dur);

        //Assign unique ID
        row.dataset.songId = index;
    });
}
//FUNCTION TO PLAY A SELECTED SONG FROM PLAYLIST
function playSelectedSong() {
    const tableRows = document.querySelectorAll("table tr");

    //List the rows for the table above
    tableRows.forEach((row) => {
        row.addEventListener("click", function () {
            const songId = row.dataset.songId;
            const selectedSong = songs[songId];

            //Empthatize the selected song
            tableRows.forEach((otherRow) => {
                otherRow.classList.remove("focus-played-song", "selected-song");
            });

            row.classList.add("focus-played-song", "selected-song");

            //If other song is playing stop it
            if (sound) {
                sound.stop();
            }

            sound = new Howl({
                src: [selectedSong.src],
                volume: 0.5,
                onplay: function () {
                    requestAnimationFrame(updateProgressBar);
                    drawEqualizer();
                }
            })
            sound.play();

            //On end song go for the next in the list
            sound.on('end', function () {
                changeSong(currentSongIndex + 1);
                updateProgressBar();
            });

            //HTML Display updates
            playButton.style.display = "none";
            pauseButton.style.display = "block";
            progressBar.style.display = "block";
            progressBarContainer.style.display = "block";

            songImage.src = selectedSong.img;
            songTitle.textContent = selectedSong.title;
            songArtist.textContent = selectedSong.artist;
        });
    });
}
//FUNCTION FOR PLAYING RADIO
function playRadio(stationIndex) {
    const station = radioStations[stationIndex];

    if (sound) {
        sound.stop();
        sound.unload();
    }

    sound = new Howl({
        src: [station.url],
        html5: true,
        format: ['mp3', 'm3u'],
        autoplay: true
    });
    sound.play();

    //HTML Display updates
    playButton.style.display = "none";
    pauseButton.style.display = "block";

    songImage.src = "resources/cdSample.png";
    songTitle.textContent = station.name;
    songArtist.textContent = "Emisora de radio local";
}
//FUNCTION TO UPDATE THE VOLUME
function updateVolume() {
    if (sound) {
        const newVolume = volumeInput.value;
        sound.volume(newVolume);
    }
}
//FUNCTION TO UPDATE THE PROGRESS BAR
function updateProgressBar() {
    const progress = (sound.seek() / sound.duration()) * 100;
    progressBar.style.width = progress + '%';

    if (sound.playing()) {
        requestAnimationFrame(updateProgressBar);
    }
}
//FUNCTION TO CHANGE THE SONG
function changeSong(index) {
    if (sound) {
        sound.stop();
        sound.unload();
    }

    //Move to the next song by his index
    currentSongIndex = (index + songs.length) % songs.length;

    const selectedSong = songs[currentSongIndex];

    sound = new Howl({
        src: [selectedSong.src],
        volume: 0.5
    });

    sound.play();

    //HTML Display updates
    playButton.style.display = "none";
    pauseButton.style.display = "block";

    songImage.src = selectedSong.img;
    songTitle.textContent = selectedSong.title;
    songArtist.textContent = selectedSong.artist;

    //Emphatize the song actually playing
    tableRows.forEach((otherRow) => {
        otherRow.classList.remove("focus-played-song", "selected-song");
    });
    tableRows[currentSongIndex].classList.add("focus-played-song", "selected-song");
}
//FUNCTION TO DRAW THE EQUALIZER
function drawEqualizer() {
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;

        ctx.fillStyle = 'red';
        ctx.fillStyle = `rgb(${barHeight + 100},50,50)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }
}

//FUNCTIONS CALLING
listSongs();
playSelectedSong();
drawEqualizer();

//LISTENERS
playButton.addEventListener("click", function () {
    if (!sound) {
        sound = new Howl({
            src: [songs[0].src],
            volume: 0.5,
            onplay: function () {
                requestAnimationFrame(updateProgressBar);
                drawEqualizer();
            }
        });
    }
    sound.play();

    //On end song, go for next
    sound.on('end', function () {
        changeSong(currentSongIndex + 1);
        updateProgressBar();
    });

    playButton.style.display = "none";
    pauseButton.style.display = "block";
});
pauseButton.addEventListener("click", function () {
    sound.pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
});
volumeInput.addEventListener("input", function () {
    updateVolume();
});
returnButton.addEventListener("click", function () {
    changeSong(currentSongIndex - 1);
});
nextButton.addEventListener("click", function () {
    changeSong(currentSongIndex + 1);
});
progressBarContainer.addEventListener("click", function (e) {
    const clickPosition = e.clientX - progressBarContainer.getBoundingClientRect().left;
    const percentage = clickPosition / progressBarContainer.clientWidth;
    const newPosition = percentage * sound.duration();

    sound.seek(newPosition);
});


//ONLY UPDATE PROGRESS BAR WHILE MUSIC IS PLAYING
if (sound.playing()) {
    initializeHowler(0);
}


//LISTENERS FOR RADIO STATIONS BUTTONS
document.getElementById("radio-station1").addEventListener("click", function () {
    playRadio(0);
    progressBar.style.display = "none";
    progressBarContainer.style.display = "none";
});
document.getElementById("radio-station2").addEventListener("click", function () {
    playRadio(1);
    progressBar.style.display = "none";
    progressBarContainer.style.display = "none";
});
document.getElementById("radio-station3").addEventListener("click", function () {
    playRadio(2);
    progressBar.style.display = "none";
    progressBarContainer.style.display = "none";
});
document.getElementById("radio-station4").addEventListener("click", function () {
    playRadio(3);
    progressBar.style.display = "none";
    progressBarContainer.style.display = "none";
});