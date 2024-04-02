

// Carousel


const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const intervalTime = 3000;

function showSlide(index) {
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });
  carouselItems[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Function to automatically change slides 
function autoSlide() {
  nextSlide();
}

// Start the automatic slide show
const slideInterval = setInterval(autoSlide, intervalTime);

// Stop the automatic slide show when the page loses focus
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    clearInterval(slideInterval);
  } else {
    // Restart the automatic slide show when the page is visible again
    slideInterval = setInterval(autoSlide, intervalTime);
  }
});


// Hamburger menu
function toggleNavList() {
  var backgroundPage = document.getElementById("backgroundPage");
  backgroundPage.style.display =  "flex";

  var head = document.getElementById("fixed-row2")
  head.style.display =  "none";
  
}

//close nav in mobile
function closeNav() {
  var backgroundPage = document.getElementById("backgroundPage");
  backgroundPage.style.display =  "none";

  var head = document.getElementById("fixed-row2")
  head.style.display =  "flex";
}


// Header fix
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var headerRow1 = document.querySelector('.header-row1');
  var headerRow2 = document.getElementById('fixed-row2');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    headerRow1.style.display = 'none';
    var headerRow2Offset = headerRow2.offsetTop;
    if (scrollTop >= headerRow2Offset) {
      headerRow2.classList.add('fixed');
      headerRow2.classList.add('full-width');
    } else {
      headerRow2.classList.remove('fixed');
      headerRow2.classList.remove('full-width');
    }
  } else {
    // Scrolling up
    headerRow1.style.display = 'flex';
    if (scrollTop <= 0) {
      headerRow1.style.display = 'flex';
      headerRow2.classList.remove('fixed');
      headerRow2.classList.remove('full-width');
    }
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});


// Section 1



// Initialize content visibility
document.getElementById('container').style.display = 'block';
document.getElementById('text').style.display = 'block';
document.getElementById('text1').style.display = 'block';

//  array of text options
const textOptions = ["Cylindrical Roller Bearings", "Wheel Hub Bearings", "Taper Roller Bearings"];
let textIndex = 1; // Initialized index to track the current text, starting from the second text

const textOptions2 = ["Versatility and Efficiency", "Smooth Rolling,Enhanced Safety", "Built For Power And Durability"];
let textIndex2 = 1;

// array of image options
const imageOptions = ["assets/bearing1.png", "assets/TR.png", "assets/WH.png"];
let imageIndex = 1; 

// Function to update the text and image
function updateTextAndImage() {
  // Update the text element with the current text option
  document.getElementById('text').textContent = textOptions[textIndex];
  document.getElementById('text1').textContent = textOptions2[textIndex2];

  // Update the image element with the current image option
  document.getElementById('image').src = imageOptions[imageIndex];

  // Increment the indices, and loop back to the start if necessary
  textIndex = (textIndex + 1) % textOptions.length;
  textIndex2 = (textIndex2 + 1) % textOptions2.length;
  imageIndex = (imageIndex + 1) % imageOptions.length;

  // Trigger animation
  const container1 = document.getElementById('container');
  container1.classList.remove('animation-trigger');
  void container1.offsetWidth; 
  container1.classList.add('animation-trigger');

  const container2 = document.getElementById('text');
  container2.classList.remove('animation-trigger');
  void container2.offsetWidth; 
  container2.classList.add('animation-trigger');

  const container3 = document.getElementById('text1');
  container3.classList.remove('animation-trigger');
  void container3.offsetWidth; 
  container3.classList.add('animation-trigger');

  const container4 = document.getElementById('btn');
  container4.classList.remove('animation-trigger');
  void container4.offsetWidth; 
  container4.classList.add('animation-trigger');
}

setInterval(updateTextAndImage, 2000); 