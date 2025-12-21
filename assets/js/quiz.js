const posts = [
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/dandemonium',
    title: 'Ukraine is rioting over the new set of laws...',
    body: 'People are saying things such as: how come the Ukrainians are hailed...',
    correct: 'Yes'
  },
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/tonystark',
    title: 'New AI model released',
    body: 'The new AI model can predict stock trends better than ever.',
    correct: 'No'
  },
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/clarkkent',
    title: 'Weather is unusual today',
    body: 'It seems like the weather patterns are shifting drastically.',
    correct: 'Yes'
  },
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/dianaprince',
    title: 'Mars rover finds new evidence',
    body: 'Scientists report a new mineral that might indicate past water.',
    correct: 'No'
  },
  {
    avatar: '/assets/img/batman.svg',
    user: 'u/peterparker',
    title: 'Local news: park event',
    body: 'A local park held a community event with many participants.',
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
  if (answer === correct) {
    document.getElementById(answer.toLowerCase() + 'Btn').style.backgroundColor = 'green';
    document.getElementById(answer.toLowerCase() === 'yes' ? 'noBtn' : 'yesBtn').style.backgroundColor = 'red';
  } else {
    document.getElementById(answer.toLowerCase() + 'Btn').style.backgroundColor = 'red';
    document.getElementById(answer.toLowerCase() === 'yes' ? 'noBtn' : 'yesBtn').style.backgroundColor = 'green';
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
