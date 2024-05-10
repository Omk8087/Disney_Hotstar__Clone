
// Movies-card-Start
let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

// Function to scroll the card container to the left
function scrollLeft(container) {
  container.scrollLeft -= container.clientWidth;
}

// Function to scroll the card container to the right
function scrollRight(container) {
  container.scrollLeft += container.clientWidth;
}

// Attach click event listeners to previous and next buttons
preBtns.forEach((preBtn, index) => {
  preBtn.addEventListener("click", () => {
    scrollLeft(cardContainers[index]);
  });
});

nxtBtns.forEach((nxtBtn, index) => {
  nxtBtn.addEventListener("click", () => {
    scrollRight(cardContainers[index]);
  });
});
// Movies-card-End



//Video-card-start
const videoCards = document.querySelectorAll(".video-card");
        videoCards.forEach((item) => {
          item.addEventListener("mouseover", () => {
          let video = item.children[1];
            video.play();
        });
          item.addEventListener("mouseleave", () => {
            let video = item.children[1];
            video.pause();
          });
        })
//Video-card-end        



