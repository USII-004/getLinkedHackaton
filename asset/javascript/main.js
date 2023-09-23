/*========== COUNTDOWN TIMER ==========*/
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

/*========== STICKY NAV ==========*/
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("nav");
    const section2 = document.getElementById("introduction");
    const section2Top = section2.getBoundingClientRect().top;

    const offset = section2.clientHeight * 0.05;
  
    if (section2Top <= offset) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
    
});

/* how to make the section2 offset by 25% before the section top */ 
  

