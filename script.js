const questions = [
  {
      question: "Siapakah Presiden Indonesia pertama?",
      options: ["Soekarno", "Soeharto", "Megawati", "Jokowi"],
      answer: "Soekarno"
  },
  {
      question: "Siapakah penemu gravitasi?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: "Isaac Newton"
  },
  {
      question: "Apa ibukota Jepang?",
      options: ["Tokyo", "Kyoto", "Osaka", "Seoul"],
      answer: "Tokyo"
  },
  {
      question: "Berapa banyak planet di tata surya kita?",
      options: ["7", "8", "9", "10"],
      answer: "8"
  },
  {
      question: "Siapakah penulis Romeo dan Juliet?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare"
  },
  {
      question: "Apa nama samaran dari Vladimir Ilyich Ulyanov?",
      options: ["Lenin", "Stalin", "Trotsky", "Khrushchev"],
      answer: "Lenin"
  },
  {
      question: "Apa nama benua terbesar di dunia?",
      options: ["Asia", "Eropa", "Amerika", "Afrika"],
      answer: "Asia"
  }
];

let currentQuestion = 0;
let score = 0;
let leaderboard = [];

function startQuiz() {
  const loginForm = document.getElementById('loginForm');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');

  const name = document.getElementById('name').value;
  const className = document.getElementById('class').value;

  if (name && className) {
      loginForm.style.display = "none";
      questionElement.style.display = "block";
      optionsElement.style.display = "block";
      loadQuestion();
  } else {
      alert("Silakan isi nama dan kelas Anda!");
  }
}

function showLeaderboard() {
  if (leaderboard.length === 0) {
      alert("Skor tidak tersedia.");
  } else {
      let leaderboardMessage = "Leaderboard:\n";
      for (let i = 0; i < leaderboard.length; i++) {
          leaderboardMessage += `${i+1}. ${leaderboard[i].name} - ${leaderboard[i].score}/${questions.length}\n`;
      }
      alert(leaderboardMessage);
  }
}

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');

  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.innerHTML = '';

  for (const option of questions[currentQuestion].options) {
      const optionElement = document.createElement('div');
      optionElement.textContent = option;
      optionElement.classList.add('option');
      optionElement.setAttribute('onclick', 'checkAnswer(this)');
      optionsElement.appendChild(optionElement);
  }

  resultElement.textContent = '';
}

function checkAnswer(option) {
  const userAnswer = option.textContent.trim();
  const correctAnswer = questions[currentQuestion].answer;
  const resultElement = document.getElementById('result');

  if (userAnswer === correctAnswer) {
      score++;
      resultElement.textContent = "Jawaban Anda benar!";
      resultElement.style.color = "green";
  } else {
      resultElement.textContent = "Jawaban Anda salah. Jawaban yang benar adalah: " + correctAnswer;
      resultElement.style.color = "red";
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
      loadQuestion();
  } else {
      displayResult();
  }
}

function displayResult() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');

  questionElement.style.display = "none";
  optionsElement.style.display = "none";

  resultElement.textContent = `Quiz selesai. Skor Anda adalah: ${score}/${questions.length}.`;
  resultElement.style.display = "block";

  // Tambahkan tombol kembali
  const backButton = document.createElement('button');
  backButton.textContent = "Kembali";
  backButton.onclick = function() {
      window.location.reload(); // Muat ulang halaman
  };

  // Tambahkan tombol "Save Score"
  const saveButton = document.createElement('button');
  saveButton.textContent = "Save Score";
  saveButton.onclick = function() {
      saveScore();
  };

  resultElement.appendChild(backButton);
  resultElement.appendChild(saveButton);
}

function saveScore() {
  // Simpan skor ke dalam local storage atau database
  alert("Skor Anda telah disimpan!");
}

function redirectToLeaderboard() {
  window.location.href = "leaderboard.html";
}


