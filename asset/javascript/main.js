/*========== COUNTDOWN TIMER ==========*/
// script.js
function countdown() {
  const countdownDate = new Date("2023-09-24 00:00:00").getTime(); // Set your target date and time here
  const timer = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
          clearInterval(timer);
          document.getElementById("hours").innerText = "00";
          document.getElementById("minutes").innerText = "00";
          document.getElementById("seconds").innerText = "00";
      } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Calculate days
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          document.getElementById("hours").innerText = (days * 24 + hours < 10 ? "0" : "") + (days * 24 + hours); /*convert days to hours*/  
          document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
          document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
      }
  }, 1000);
}

countdown();

