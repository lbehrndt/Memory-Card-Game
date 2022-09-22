// Store images in their given order
const images = getMemoryImages();
/**
 * The function shuffle() will swap the current image with a randomly selected image.
 * This is achieved by swapping the src attribute.
 */
function shuffle() {
  let size = images.length;
  // swap with randomly calculated item
  while (size > 0) {
    // calcualte random index
    rand = Math.floor(Math.random() * size);
    // decrease size
    size--;
    // swap item at current index with item at random index
    [images[size].src, images[rand].src] = [images[rand].src, images[size].src];
  }
  reset();
}

/**
 * The function reset() will set the image's opacity to 0, so they will not be seen.
 */
function reset() {
  // Set opacity of all images to 0
  for (const image of images) {
    image.style.opacity = "0%";
  }
}

/**
 * The function show will display the image of the clicked div-element (card) and call 
 * the memorize function.
 */
function show() {
  window.onclick = (e) => {
    image = e.target;
    image.style.opacity = "100%";
  };
  // TODO: memorize function
}

/**
 * The function getMemoryImages() will retrieve all memory images and put them into an array
 * @returns  the array of found images
 */
function getMemoryImages() {
  // Select image elements by the class name and transform them into an array
  let imageArray = Array.from(
    document.getElementsByClassName("hidden-memory-image")
  );
  return imageArray;
}
