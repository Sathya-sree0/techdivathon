document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
  
      question.addEventListener("click", function () {
        const currentlyActive = document.querySelector(".faq-item.active");
        if (currentlyActive && currentlyActive !== item) {
          currentlyActive.classList.remove("active");
          currentlyActive.querySelector(".faq-answer").style.display = "none";
        }
  
        if (item.classList.contains("active")) {
          answer.style.display = "none";
          item.classList.remove("active");
        } else {
          answer.style.display = "block";
          item.classList.add("active");
        }
      });
    });
  });

var countDownDate = new Date("Feb 3,2025 00:00:00:00").getTime();
var x=setInterval(function(){
  var now = new Date().getTime();
  var distance = countDownDate-now;

  var days= Math.floor(distance / (1000 * 60 * 60 * 24 ));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML=days;
  document.getElementById("hours").innerHTML=hours;
  document.getElementById("minutes").innerHTML=minutes;
  document.getElementById("seconds").innerHTML=seconds;
},1000);
let scrollContainer=document.querySelector(".domains");
        let backbtn=document.getElementById("backbtn");
        let nextbtn=document.getElementById("nextbtn");
        scrollContainer.addEventListener("wheel",(evt)=>{
            evt.preventDefault();
            scrollContainer.scrollLeft+=evt.deltaY;
        });
        nextbtn.addEventListener("click",()=>{
            scrollContainer.style.scrollBehavior="smooth";
            scrollContainer.scrollLeft+=250;
        });
        backbtn.addEventListener("click",()=>{
            scrollContainer.style.scrollBehavior="smooth";
            scrollContainer.scrollLeft-=250;
        });


function toggleMenu() {
  document.getElementById("myTopnav").classList.toggle("active");
}
// guidlines
$.fn.commentCards = function () {
  return this.each(function () {
    var $this = $(this),
      $cards = $this.find(".card"),
      $current = $cards.filter(".card--current"),
      $next;

    $cards.on("click", function () {
      if (!$current.is(this)) {
        $cards.removeClass("card--current card--out card--next");
        $current.addClass("card--out");
        $current = $(this).addClass("card--current");
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass("card--next");
      }
    });

    if (!$current.length) {
      $current = $cards.last();
      $cards.first().trigger("click");
    }

    $this.addClass("cards--active");
  });
};

$(".cards").commentCards();
//popupvedio
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("videoPopup");
  const closePopup = document.getElementById("closePopup");
  const video = document.getElementById("popupVideo");
  const toggleMuteButton = document.getElementById("toggleMute");

  // Show the popup when the page loads
  popup.style.display = "flex";

  // Close the popup when the close button is clicked
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";

    // Automatically unmute the video when closing the popu
      video.muted = true;
    toggleMuteButton.textContent = "🔊"; // Update the button symbol to show unmuted state
  });

  // Close the popup if the user clicks outside the popup content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";

      // Automatically unmute the video when closing the popup

        video.muted = true;
      toggleMuteButton.textContent = "🔊"; // Update the button symbol to show unmuted state
    }
  });

  // Toggle mute/unmute when the button is clicked
  toggleMuteButton.addEventListener("click", () => {
    if (video.muted) {
      video.muted = false;
      toggleMuteButton.textContent = "🔊"; // Unmute symbol
    } else {
      video.muted = true;
      toggleMuteButton.textContent = "🔇"; // Mute symbol
    }
  });
});

