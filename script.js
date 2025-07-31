let scrollIndex = 0;
const cardWidth = 251; 
const maxVisible = 3;

const container = document.getElementById("popular_items");
const totalCards = container?.querySelectorAll(".popular_card").length || 0;

function scrollRight() {
  if (scrollIndex < totalCards - maxVisible) {
    scrollIndex++;
    updateScroll();
  }
}

function scrollLeft() {
  if (scrollIndex > 0) {
    scrollIndex--; 
    updateScroll();
  }
}

function updateScroll() {
  const offset = scrollIndex * cardWidth;
  container.style.transform = `translateX(-${offset}px)`;
}

