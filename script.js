script.js
let lang = "pt";
const adminMode = true; // ← MUDE PARA false quando publicar

const beats = Array.from({ length: 15 }, (_, i) => ({
  title: `Beat ${i + 1}`,
  bpm: 140,
  genre: "Trap",
  preview: "beats/sample.mp3",
  basic: "#",
  exclusive: "#"
}));

function renderBeats() {
  const list = document.getElementById("beatList");
  list.innerHTML = "";
  beats.forEach(b => {
    list.innerHTML += `
      <div class="beat">
        <h3>${b.title}</h3>
        <p>${b.genre} • ${b.bpm} BPM</p>
        <audio controls src="${b.preview}"></audio>
        <div class="buttons">
          <a href="${b.basic}">Basic</a>
          <a href="${b.exclusive}">Exclusive</a>
        </div>
      </div>
    `;
  });
}

function setLang(l) {
  lang = l;
  document.querySelectorAll("[data-pt]").forEach(el => {
    el.textContent = el.dataset[l];
  });
}

if (adminMode) {
  document.getElementById("addBeatBtn").style.display = "block";
  document.getElementById("addBeatBtn").onclick = () => {
    alert("Modo criador: adicione o beat no script.js");
  };
}

renderBeats();
setLang("pt");
