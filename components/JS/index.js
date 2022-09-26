
// Store all images in a global array
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
}

/**
 * The function reset() will set the image's opacity to 0 when the reset button is being clicked.
 * It will also reset the lastImage variable, since the reset button can be pressed at any time 
 * during the game and therefore distrub the game that will be played after.
 */
function reset() {
  // set every image's opacity to 0%.
  images.forEach((image) => (image.style.opacity = "0%"));
  // If 
  lastImage = "";
}

/**
 * The function resetSpecific(image) will take an image name as an input and reset the specific 
 * image object with a timeout of 0.6 seconds.
 * 
 * @param image the given image that will be resetted.
 */
function resetSpecific(image) {
  // find the image object by name
  for (const img of images) {
    // when found
    if (image == img.src.substring(img.src.lastIndexOf("/") + 1)) {
      new Promise(() => {
        // set a timeout of .6s and change the image's opacity to 0%, so it won't be displayed.
        setTimeout(() => {
          img.style.opacity = "0%";
        }, "600");
      });
    }
  }
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

/**
 * The show() function will display an image on the screen.
 * Depending on the last displayed image it will either continue being displayed or disappear again.
 */
async function show(image) {
  // Display the image
  image.style.opacity = "100%";
  imageName = image.src.substring(image.src.lastIndexOf("/") + 1);
  // If there is a last image to compare the current image to
  if (!(lastImage == "")) {
    // check if the last image is not the same as the current image
    // reset both
    if (lastImage != imageName) {
      await resetSpecific(lastImage);
      resetSpecific(imageName);
    }
    // set lastImage back to default
    lastImage = "";
  } else {
    // save the current image for the next comparison
    lastImage = imageName;
  }
}
