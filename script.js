// Плавна прокрутка меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Прямі посилання на .mp4 файли або локальні шляхи
const playlist = [
  {
    title: "Вертикальне відео 1",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549401050342236300/ssstik.io_1784114742055.mp4?ex=6aaa8fac&is=6aa93e2c&hm=0e300d8b41ed1402a0dea34ad9268a8adab06e08e10a440de9e143cc02929c9c&"
  },
  {
    title: "Вертикальне відео 2",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549401050895614065/ssstik.io_1784114847685.mp4?ex=6aaa8fad&is=6aa93e2d&hm=1518362b68fa33136102241d3038a808a47dfe8ab9447a1ac36a4b5a25aba452&"
  },
  {
    title: "Вертикальне відео 3",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549401051579416616/ssstik.io_1784114922391.mp4?ex=6aaa8fad&is=6aa93e2d&hm=ca17a0c1f701094784c4e7d9567eac46d0ff637366fe446bcf6a4b383b82bc34&"
  },
  {
    title: "Вертикальне відео 4",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549379045551112313/video_2026-09-15_14-18-54.mp4?ex=6aaa7b2e&is=6aa929ae&hm=db760da98347cae0ce0406c001049523bbdee08441a1472da59378b0ff81d04a&"
  },
  {
    title: "Вертикальне відео 5",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549376884498759731/video_2026-09-15_14-00-14.mp4?ex=6aaa792b&is=6aa927ab&hm=2c0f1307d1a1079cbec04017a6aa282edb9b0f7f3c88c61bc8a1b59e63d3e7df&"
  },
  {
    title: "Вертикальне відео 6",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549377491897155654/video_2026-09-15_14-12-45.mp4?ex=6aaa79bc&is=6aa9283c&hm=8118fc18dadc676336aae55fac3215ab239d02df6beba0433996ade4d66b8bea&"
  },
];

let currentIndex = 0;

const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoCounter = document.getElementById('videoCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function loadVideo(index) {
  const currentVideo = playlist[index];
  videoPlayer.src = currentVideo.src;
  videoPlayer.load();
  videoTitle.textContent = currentVideo.title;
  videoCounter.textContent = `Відео ${index + 1} з ${playlist.length}`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadVideo(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadVideo(currentIndex);
});

// Завантаження першого відео
loadVideo(currentIndex);