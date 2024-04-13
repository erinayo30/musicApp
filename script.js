let progressBar = document.getElementById("progress");
let songs = document.getElementById("songs");
let ctrlICON = document.getElementById("ctrlICON");

songs.onloadedmetadata = function () {
  progressBar.max = songs.duration;
  //   progressBar.value = songs.currentTime;
};
function playPause() {
  if (ctrlICON.classList.contains("fa.pause")) {
    songs.pause();
    ctrlICON.classList.remove("fa.pause");
    ctrlICON.classList.add("fa.play");
  } else {
    songs.play();
    ctrlICON.classList.add("fa.pause");
    ctrlICON.classList.remove("fa.play");
  }
}
setInterval(() => {
  if (!songs.paused) {
    progressBar.value = songs.currentTime;
  }
}, 500);
progressBar.onchange = function () {
  songs.play();
  songs.currentTime = progressBar.value;
  ctrlICON.classList.add("fa-pause");
  ctrlICON.classList.remove("fa.play");
};

// let progressBar = document.getElementById("progress");
// let songs = document.getElementById("songs");
// let ctrlICON = document.getElementById("ctrlICON");

// songs.onloadedmetadata = function () {
//   progressBar.max = songs.duration;
//   //   progressBar.value = songs.currentTime;
// };

// function playPause() {
//   if (ctrlICON.classList.contains("fa-pause")) {
//     songs.pause();
//     ctrlICON.classList.remove("fa-pause");
//     ctrlICON.classList.add("fa-play");
//   } else {
//     songs.play();
//     ctrlICON.classList.add("fa-pause");
//     ctrlICON.classList.remove("fa-play");
//   }
// }

// setInterval(() => {
//   if (!songs.paused) {
//     progressBar.value = songs.currentTime;
//   }
// }, 500);

// progressBar.oninput = function () {
//   songs.currentTime = progressBar.value;
// };

// songs.onended = function () {
//   ctrlICON.classList.remove("fa-pause");
//   ctrlICON.classList.add("fa-play");
// };
