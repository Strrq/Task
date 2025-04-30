const cards = [
    { front: "i", back: "число, выраженное через квадратный корень отрицательного числа, обычно квадратный корень из −1." },
    { front: "Сколько градусов в прямом угле?", back: "90°" },
    { front: "Чему равна площадь квадрата со стороной 5 см?", back: "25 см²" },
    { front: "Что такое π (пи) в математике?", back: "Приблизительно 3.14" }
  ];
  
  let currentCard = 0;
  let flipped = false;
  
  const flashcard = document.getElementById("flashcard");
  flashcard.addEventListener("click", () => {
    flipped = !flipped;
    flashcard.textContent = flipped ? cards[currentCard].back : cards[currentCard].front;
  });
  
  function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    flipped = false;
    flashcard.textContent = cards[currentCard].front;
  }
  
  function prevCard() {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    flipped = false;
    flashcard.textContent = cards[currentCard].front;
  }
  