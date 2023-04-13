// Create one object named `photoSlideShow`. This object will represent the functionality of a picture slideshow.

// There should be no variables declared outside the object.

// The object should have properties for:
// // // An array called photoList that contains the names of the photos as strings
// // // An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
// // // A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
// // // A prevPhoto() function that does the same thing, but backwards.
// // // A function getCurrentPhoto() that returns the current photo from the list.

const photoSlideShow = {
  photoList: ["cow pic", "chicken pic", "horse pic", "goat pic", "pig pic", "cat pic",],
  currentPhotoIndex: 0,
  nextPhoto() {
    if (this.currentPhotoIndex < this.photoList.length - 1) {
      this.currentPhotoIndex++;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("End of slideshow.");
    }
  },

  prevPhoto() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("Back to the beginning.");
    }
  },

  getCurrentPhoto() {
    return this.photoList[this.currentPhotoIndex];
  },
};

console.log("Start of the slideshow")
console.log(photoSlideShow.getCurrentPhoto());
console.log(" ");

console.log("Next pic");
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
console.log(" ");

console.log("Previous pic");
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
console.log(" ");

console.log("Current pic");
console.log(photoSlideShow.getCurrentPhoto());
