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

//#region HTML ELEMENTS VARIABLES DECLARATION
const songTitle = document.querySelector(".song-name");
const songArtist = document.querySelector(".author-name");
const songImage = document.querySelector(".cover-song");
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const returnButton = document.querySelector(".return-button");
const nextButton = document.querySelector(".next-button");
const progressBar = document.getElementById("progress-bar");
const progressBarContainer = document.getElementById("progress-container");
const row = document.getElementById("row");
const row2 = document.getElementById("row2");
const volumeInput = document.getElementById("volume-bar");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const artistsContainer = document.getElementById('artists-container');
const artistSearcher = document.getElementById('artist-name');
const allArtists = Array.from(artistsContainer.getElementsByTagName('img'));
const songTotalDuration = document.getElementById('total-duration');
const songActualDuration = document.getElementById('actual-duration');
const artistsImg = document.querySelectorAll('.artist');
//#endregion

//INITIALLY HIDING
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
let progressUpdateInterval;
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
                sound.unload();
            }

            sound = new Howl({
                src: [selectedSong.src],
                volume: 0.5,
                onend: function () {
                    // Automatically play the next song when the current song ends
                    changeSong(currentSongIndex + 1);
                },
                onload: function () {
                    resetProgressBar();
                    progressUpdateInterval = setInterval(updateProgressBar, 1000);  // Update every second
                }
            });

            sound.play();

            playButton.style.display = "none";
            pauseButton.style.display = "block";
            progressBar.style.display = "block";
            progressBarContainer.style.display = "block";

            songImage.src = selectedSong.img;
            songTitle.textContent = selectedSong.title;
            songArtist.textContent = selectedSong.artist;
            songTotalDuration.textContent = selectedSong.duration;
        });
    });
}
function updateProgressBar() {
    const progress = (sound.seek() / sound.duration()) * 100;
    progressBar.style.width = progress + '%';

    // Update the actual duration
    const minutes = Math.floor(sound.seek() / 60);
    const seconds = Math.floor(sound.seek() % 60);
    songActualDuration.innerHTML = `${minutes}:${seconds}`;
}
//RESET THE PROGRESS BAR
function resetProgressBar() {
    // Reset progress bar to 0% and actual duration to 0:00
    progressBar.style.width = '0%';
    songActualDuration.innerHTML = '0:00';
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

        // Update the actual duration
        const minutes = Math.floor(sound.seek() / 60);
        const seconds = Math.floor(sound.seek() % 60);
        songActualDuration.innerHTML = `${minutes}:${seconds}`;
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

    requestAnimationFrame(updateProgressBar);
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
//FUNCTIONS ONMOUSE FOR SIDEBAR
var mini = true;
document.getElementById("mySidebar").style.width = "115px";
document.getElementById("row").style.marginLeft = "115px";
row2.style.marginLeft = "102px";
document.getElementById("row3").style.marginLeft = "115px";
function toggleSidebar() {
    if (mini) {
        document.getElementById("mySidebar").style.width = "255px";
        document.getElementById("row").style.marginLeft = "255px";
        row2.style.marginLeft = "240px";
        document.getElementById("row3").style.marginLeft = "255px";
        mini = false;
    }
    else {
        document.getElementById("mySidebar").style.width = "115px";
        document.getElementById("row").style.marginLeft = "115px";
        row2.style.marginLeft = "102px";
        document.getElementById("row3").style.marginLeft = "115px";
        mini = true;
    }
}
//GET ARTISTS JSON DATA
async function getArtistsData() {
    try {
        const response = await fetch('artists.json');

        if (!response.ok) {
            throw new Error("Error-HTTP: " + response.status);
        }

        const jsonArtists = await response.json();

        const artistImages = document.querySelectorAll('.artist');

        artistImages.forEach((artistImg, index) => {
            artistImg.addEventListener("click", function () {
                const artist = jsonArtists[index];
                Swal.fire({
                    title: `${artist.artistName}`,
                    imageUrl: `${artist.img}`,
                    html: `<b>Real Name:</b> ${artist.realName}<br><b>Gender:</b> 
                    ${artist.gender}<br><b>Hit:</b> ${artist.hit}`,
                    imageWidth: 280,
                    imageHeight: 300,
                    customClass: {
                        title: 'custom-title-size',
                        html: 'custom-font-size'
                    }
                });
            });
        });
    } catch (error) {
        console.error(error);
    }
}
//GET ALBUM JSON DATA
async function getAlbumsData() {
    try {
        const response = await fetch('albums.json');

        if (!response.ok) {
            throw new Error("Error-HTTP: " + response.status);
        }

        const jsonAlbums = await response.json();

        const albumsImages = document.querySelectorAll('.album');

        albumsImages.forEach((artistImg, index) => {
            artistImg.addEventListener("click", function () {
                const album = jsonAlbums[index];
                Swal.fire({
                    title: `${album.name}`,
                    imageUrl: `${album.img}`,
                    html: `<b>Artists involved:</b> 
                      ${album.artistsInvolved[0].artist1}, 
                      ${album.artistsInvolved[0].artist2},<br>
                      ${album.artistsInvolved[0].artist3},
                      ${album.artistsInvolved[0].artist4},
                      ${album.artistsInvolved[0].artist5},<br>
                      ${album.artistsInvolved[0].artist6},
                      ${album.artistsInvolved[0].artist7},<br>
                      <b>Publish date:</b> ${album.publishDate}<br>
                      <b>Number of songs:</b> ${album.numberOfSongs}`,
                    imageWidth: 300,
                    imageHeight: 300,
                    customClass: {
                        title: 'custom-title-size',
                        html: 'custom-font-size'
                    }
                });
            });
        });
    } catch (error) {
        console.error(error);
    }
}

listSongs();
playSelectedSong();
drawEqualizer();
getArtistsData();
getAlbumsData();

//LISTENERS
playButton.addEventListener("click", function () {
    if (!sound) {
        sound = new Howl({
            src: [songs[0].src],
            volume: 0.5,
            onplay: function () {
                requestAnimationFrame(updateProgressBar);
            }
        });
    }
    sound.play();

    sound.on("end", function () {
        changeSong(currentSongIndex + 1);
        updateProgressBar();
    })

    playButton.style.display = "none";
    pauseButton.style.display = "block";
    requestAnimationFrame(updateProgressBar);
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
artistSearcher.addEventListener("input", function () {
    const searchTerm = artistSearcher.value.trim().toLowerCase();

    // Loop through each artist image
    allArtists.forEach(artistImage => {
        const artistName = artistImage.alt.toLowerCase(); // Assuming the alt attribute contains the artist name

        // Show or hide the artist image based on the search term
        if (artistName.includes(searchTerm)) {
            artistImage.style.display = "inline-block"; // Show the artist image
        } else {
            artistImage.style.display = "none"; // Hide the artist image
        }
    });
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


/*NAVIGATION PROGRAM*/
document.addEventListener("DOMContentLoaded", function () {

    const homeContainer = document.getElementById("row3");
    const myMusicContainer = document.getElementById("row");
    const exploreContainer = document.getElementById("row2");
    const aboutContainer = document.getElementById("row4");

    const homeMenu = document.getElementById("mainMenu");
    const myMusicMenu = document.getElementById("myMusicMenu");
    const exploreMenu = document.getElementById("exploreMenu");
    const aboutMenu = document.getElementById("aboutMenu");

    homeContainer.style.display = "block";
    myMusicContainer.style.display = "none";
    exploreContainer.style.display = "none";
    aboutContainer.style.display = "none";

    function showContainer(container) {
        homeContainer.style.display = "none";
        myMusicContainer.style.display = "none";
        exploreContainer.style.display = "none";
        aboutContainer.style.display = "none";

        container.style.display = "block";
    }

    // Add click event listeners to menu items
    homeMenu.addEventListener("click", function (e) {
        e.preventDefault();
        showContainer(homeContainer);
    });

    myMusicMenu.addEventListener("click", function (e) {
        e.preventDefault();
        showContainer(myMusicContainer);
    });

    exploreMenu.addEventListener("click", function (e) {
        e.preventDefault();
        showContainer(exploreContainer);
    });

    aboutMenu.addEventListener("click", function (e) {
        e.preventDefault();
        showContainer(aboutContainer);
    });
});