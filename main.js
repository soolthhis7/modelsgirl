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
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549383000200847360/video_2026-09-15_14-34-09.mp4?ex=6aaa7edd&is=6aa92d5d&hm=d7a99d969fd3c204abd04128df8b1c51fefe77b4bfbf489e69abf3753c88026d&"
  },
  {
    title: "Вертикальне відео 2",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549382797641121893/video_2026-09-15_14-33-54.mp4?ex=6aaa7ead&is=6aa92d2d&hm=16682c8569a127002d4708dfbef5797854c755d206c054d3f10cc43044d5a2ee&"
  },
  {
    title: "Вертикальне відео 3",
    src: "https://cdn.discordapp.com/attachments/1549376815435485315/1549384009107382332/video_2026-09-15_14-38-41.mp4?ex=6aaa7fcd&is=6aa92e4d&hm=3a9a0ef0c8212928493424e84c2da5f098b67b917782db3310db55286fcca949&"
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