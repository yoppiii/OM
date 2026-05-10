const tracks = [
  {
    title: "퍼즐이 어디있지",
    filename: "1.S1.mp3",
    background: "#e53935",
    color: "#ffffff",
  },
  {
    title: "과거로 이동",
    filename: "2.T1.wav",
    background: "#fb8c00",
    color: "#ffffff",
  },
  {
    title: "공룡 시대",
    filename: "3.S2.mp3",
    background: "#fdd835",
    color: "#111111",
  },
  {
    title: "미래로 이동",
    filename: "4.T2.mp3",
    background: "#43a047",
    color: "#ffffff",
  },
  {
    title: "로봇 시대",
    filename: "5.S3.mp3",
    background: "#1e88e5",
    color: "#ffffff",
  },
  {
    title: "다시 현재로 이동",
    filename: "6.T3.wav",
    background: "#283593",
    color: "#ffffff",
  },
  {
    title: "퍼즐을 찾았다!",
    filename: "7.S4.mp3",
    background: "#8e24aa",
    color: "#ffffff",
  },
];

const audio = new Audio();
audio.loop = true;

let currentIndex = null;
let isPaused = false;

const trackList = document.querySelector("#track-list");
const stopButton = document.querySelector("#stop-button");

function render() {
  trackList.innerHTML = "";

  tracks.forEach((track, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `track-button${currentIndex === index ? " is-active" : ""}`;
    button.style.background = track.background;
    button.style.color = track.color;
    button.setAttribute("aria-pressed", currentIndex === index ? "true" : "false");

    const title = document.createElement("span");
    title.className = "track-title";
    title.textContent = `${index + 1}. ${track.title}`;

    const state = document.createElement("span");
    state.className = "track-state";
    state.textContent =
      currentIndex === index
        ? isPaused
          ? "⏸ 일시정지"
          : "▶ 재생중(반복)"
        : "";

    button.append(title, state);
    button.addEventListener("click", () => playOrToggle(index));
    trackList.append(button);
  });
}

async function playOrToggle(index) {
  const selectedTrack = tracks[index];
  const nextSource = `./assets/audio/${encodeURIComponent(selectedTrack.filename)}`;

  if (currentIndex === index) {
    if (!audio.paused) {
      audio.pause();
      isPaused = true;
    } else {
      try {
        await audio.play();
        isPaused = false;
      } catch (error) {
        console.error("Audio resume error:", error);
      }
    }
    render();
    return;
  }

  audio.pause();
  audio.currentTime = 0;
  audio.src = nextSource;

  try {
    await audio.play();
    currentIndex = index;
    isPaused = false;
  } catch (error) {
    console.error("Audio play error:", error);
    currentIndex = null;
    isPaused = false;
  }

  render();
}

function stopPlayback() {
  audio.pause();
  audio.currentTime = 0;
  audio.removeAttribute("src");
  audio.load();
  currentIndex = null;
  isPaused = false;
  render();
}

stopButton.addEventListener("click", stopPlayback);

render();
