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
const volumeInput = document.getElementById("volume-bar");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


//INITIALLY HIDE PAUSE BUTTON
pauseButton.style.display = "none";

const audioElement = new Audio();
audioElement.src = songs[0].src;

let sound = new Howl({
    src: [songs[0].src],
    volume: 0.5
});

let currentSongIndex = 0;


//EQUALIZER CONSTANTS
const audioContext = new (window.AudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

const source = audioContext.createMediaElementSource(audioElement);
source.connect(analyser);
analyser.connect(audioContext.destination);


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

            tableRows.forEach((otherRow) => {
                otherRow.classList.remove("focus-played-song", "selected-song");
            });

            row.classList.add("focus-played-song", "selected-song");

            if (sound) {
                sound.stop();
            }

            sound = new Howl({
                src: [selectedSong.src],
                volume: 0.5
            })
            sound.play();

            playButton.style.display = "none";
            pauseButton.style.display = "block";

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
        format: ['mp3'],
        autoplay: true
    });
    sound.play();

    sound.on('play', function () {
        requestAnimationFrame(updateProgressBar);
    });

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
//FUNCTION TO CHANGE THE SONG
function changeSong(index) {
    if (sound) {
        sound.stop();
        sound.unload();
    }

    currentSongIndex = (index + songs.length) % songs.length;

    const selectedSong = songs[currentSongIndex];

    sound = new Howl({
        src: [selectedSong.src],
        volume: 0.5
    });

    sound.play();

    playButton.style.display = "none";
    pauseButton.style.display = "block";

    songImage.src = selectedSong.img;
    songTitle.textContent = selectedSong.title;
    songArtist.textContent = selectedSong.artist;

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

        ctx.fillStyle = `rgb(${barHeight + 100},50,50)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }

    requestAnimationFrame(drawEqualizer);
}

listSongs();
playSelectedSong();
drawEqualizer();


//LISTENERS
playButton.addEventListener("click", function () {
    if (!sound) {
        sound = new Howl({
            src: [songs[0].src],
            volume: 0.5
        });
    }
    sound.play();

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


//LISTENERS FOR RADIO STATIONS BUTTONS
document.getElementById("radio-station1").addEventListener("click", function () {
    playRadio(0);
});
document.getElementById("radio-station2").addEventListener("click", function () {
    playRadio(1);
});
document.getElementById("radio-station3").addEventListener("click", function () {
    playRadio(2);
});
document.getElementById("radio-station4").addEventListener("click", function () {
    playRadio(3);
});