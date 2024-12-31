let currentIndex = 0;

function updateCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper');
  const totalItems = document.querySelectorAll('.carousel-item').length;

  // Calculate offset for the current index
  const offset = -currentIndex * 100; // Move by 100% per slide
  wrapper.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first slide
  updateCarousel();
}

function prevSlide() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last slide
  updateCarousel();
}







// // Select elements
// const track = document.querySelector('.carousel-wrapper'); // Corrected selector for the wrapper
// const prevButton = document.querySelector('.prev'); // Correct selector for the Prev button
// const nextButton = document.querySelector('.next'); // Correct selector for the Next button

// // Get dimensions
// const itemWidth = document.querySelector('.carousel-item').offsetWidth; // Width of each carousel item
// const totalItems = document.querySelectorAll('.carousel-item').length; // Total number of items

// // Variables to track the current position
// let currentPosition = 0;

// // Maximum scrollable distance
// const maxScroll = (totalItems * itemWidth) - track.offsetWidth;

// // Event listener for the Next button
// nextButton.addEventListener('click', () => {
//   // Move forward by the width of the visible items
//   const shift = Math.min(track.offsetWidth, maxScroll - currentPosition);
//   currentPosition += shift;
//   track.style.transform = `translateX(-${currentPosition}px)`;
//   updateButtons();
// });

// // Event listener for the Prev button
// prevButton.addEventListener('click', () => {
//   // Move backward by the width of the visible items
//   const shift = Math.min(track.offsetWidth, currentPosition);
//   currentPosition -= shift;
//   track.style.transform = `translateX(-${currentPosition}px)`;
//   updateButtons();
// });

// // Update button states
// function updateButtons() {
//   prevButton.disabled = currentPosition === 0;
//   nextButton.disabled = currentPosition >= maxScroll;
// }

// // Initialize button states
// updateButtons();






// // Select elements
// const track = document.querySelector('.carousel-wrapper'); // The wrapper holding the items
// const prevButton = document.querySelector('.prev'); // Previous button
// const nextButton = document.querySelector('.next'); // Next button

// // Get dimensions
// const itemWidth = document.querySelector('.carousel-item').offsetWidth; // Width of each item
// const totalItems = document.querySelectorAll('.carousel-item').length; // Total number of items
// const visibleWidth = track.offsetWidth; // Visible width of the carousel

// // Variables to track the current position
// let currentPosition = 0;

// // Maximum scrollable distance (ensures the last item is fully visible)
// const maxScroll = (totalItems * itemWidth) - visibleWidth;

// // Event listener for the Next button
// nextButton.addEventListener('click', () => {
//   // Check if there is space to scroll
//   if (currentPosition < maxScroll) {
//     // Move by the width of one item or stop at the end
//     currentPosition = Math.min(currentPosition + itemWidth, maxScroll);
//     track.style.transform = `translateX(-${currentPosition}px)`;
//   }
//   updateButtons();
// });

// // Event listener for the Prev button
// prevButton.addEventListener('click', () => {
//   // Check if there is space to scroll backward
//   if (currentPosition > 0) {
//     // Move by the width of one item or stop at the beginning
//     currentPosition = Math.max(currentPosition - itemWidth, 0);
//     track.style.transform = `translateX(-${currentPosition}px)`;
//   }
//   updateButtons();
// });

// // Update button states
// function updateButtons() {
//   prevButton.disabled = currentPosition === 0; // Disable Prev button at the start
//   nextButton.disabled = currentPosition === maxScroll; // Disable Next button at the end
// }

// // Initialize button states
// updateButtons();


