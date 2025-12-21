const posts = [
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/lju1977',
    title: 'Fearing the truth',
    body: 'r/christianity4real The truth shall set you free. Why are christians afraid of telling the truth? The truth set s people free from sin, including the sin of homosexuality.',
    correct: 'No'
  },
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/dandemonium',
    title: 'Moronic Monday, January 20th',
    body: 'r/hiphopheads Have a question that you need answered? Was it not answered last week, or did not get a satisfying answer? Or a question that you feel is too small to make a new thread for? Maybe something you think everyone but you knows? Ask that question in this thread. Questions must be on topic, concise, and answerable. Answers must be a real answer that solves the question. Do not ask a question that can be covered in the resources section. Some other resources for any terms you may not understand: for specific lyric questions, for questions about songs and sampling, to look through previous mm threads. An infograph explaining how albums leak. What are the different parts of a song? What are the different parts of a song? Thanks to u for more general questions. For questions on making hiphop, subscribe to this pronunciation guide: rza gza jiz zah jhen aiko juh nay ahh ee ko danny brown s ad lib style nujabes new jah bes.',
    correct: 'Yes'
  },
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/Miathermopolis',
    title: 'Think of the most embarrassing, hilarious, nasty, etc., fart story of your life. What happened, and were you able to recover?',
    body: 'I was reading [httplink]. Would love to hear more funny or crazy fart stories. Everyone farts, and they are often hilarious, and sometimes they come at the worst possible time. Please help me enjoy farts even more by sharing.',
    correct: 'No'
  },
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/PacSan300',
    title: 'Is Applebee’s really as awful as redditors describe?',
    body: 'I have actually never eaten at Applebee’s at all in my life, so I am surprised to see so much hate for it on Reddit, including on [httplink].',
    correct: 'Yes'
  },
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/throwoneawayagain',
    title: 'Post in suggests to recycle spoiled milk. Explain why this is possible, or just wrong.',
    body: 'r/askscience So I was reading a post in which linked, saying that if you added yogurt to a gallon of milk, which is going bad, you would wake up the next day to a gallon of edible yogurt. I’ve seen recipes detailing the use of sour milk to make cottage cheese and such, but to my knowledge they are using raw u milk. When pasteurized milk starts to go bad, isn’t it the result of bad bacteria and pathogens leaving waste by-products, resulting in the bad taste? Could the prescribed method actually be viable for making yogurt, or is it a potentially dangerous mix of pathogens? Original post below.',
    correct: 'No'
  },
];

let currentIndex = 0;

const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const postTitle = document.getElementById('postTitle');
const postBody = document.getElementById('postBody');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function loadPost(index) {
  const post = posts[index];
  userAvatar.src = post.avatar;
  userName.textContent = post.user;
  postTitle.textContent = post.title;
  postBody.textContent = post.body;

  yesBtn.style.backgroundColor = '';
  noBtn.style.backgroundColor = '';
  yesBtn.disabled = false;
  noBtn.disabled = false;
}

function handleAnswer(answer) {
  const correct = posts[currentIndex].correct;
  const clickedBtn = document.getElementById(answer.toLowerCase() + 'Btn');
  const otherBtn = answer.toLowerCase() === 'yes' ? noBtn : yesBtn;

  if (answer === correct) {
    clickedBtn.style.backgroundColor = 'green';
    otherBtn.style.backgroundColor = ''; // stays neutral
  } else {
    clickedBtn.style.backgroundColor = 'red';
    otherBtn.style.backgroundColor = 'green';
  }

  yesBtn.disabled = true;
  noBtn.disabled = true;

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < posts.length) {
      loadPost(currentIndex);
    } else {
      alert('Quiz finished!');
      currentIndex = 0;
      loadPost(currentIndex);
    }
  }, 1000);
}


yesBtn.addEventListener('click', () => handleAnswer('Yes'));
noBtn.addEventListener('click', () => handleAnswer('No'));

loadPost(currentIndex);
