const images = document.querySelectorAll(".img");
const buttons = document.querySelectorAll(".btn");

const imagesArray = ["./A.png", "./J.png", "./Q.png", "./K.png"];

var numbersArray = [0, 0, 1, 1, 2, 2, 3, 3];

// ===========================================================================================

const generateRandomNumber = () => {
  var x = 0;
  while (x <= 7) {
    var rnum = Math.floor(Math.random() * numbersArray.length);
    const temp = numbersArray[rnum];
    numbersArray[rnum] = numbersArray[x];
    numbersArray[x] = temp;
    x = x + 1;
  }
  return numbersArray;
};

// ===============================================================================================

const randomNumberArray = generateRandomNumber();

// ==================================================================================================
var answers = [];
// when user clicks any two card, those value of two card will be stored in answers
var divelementArray = [];
// divelementArray will store the div element of the card and when the user clicks two time and the ans doesnot matches we will use the
// divelementArray array to hide the image again
var correctanswer = 0;
// to keep record of the cards that has been matched
const checkAnswer = (divelement, index) => {
  divelement.classList.add("noClick");
  answers.push(index);
  divelementArray.push(divelement);
  if (answers.length == 2) {
    if (randomNumberArray[answers[0]] != randomNumberArray[answers[1]]) {
      divelementArray[0].children[0].classList.add("prop");
      divelementArray[1].children[0].classList.add("prop");
      divelementArray[0].classList.remove("noClick");
      divelementArray[1].classList.remove("noClick");
    } 
    else {
      correctanswer = correctanswer + 1;}
    if (correctanswer == 4) {
      setTimeout(() => {
        alert("WELL DONE");
        window.location.reload();
      }, 50);
    }
     divelementArray = [];
    answers = [];
  }
};
// ==================================================================================================

const divelements = document.querySelectorAll(".div-element");
divelements.forEach((divelement, index) => {
  divelement.addEventListener("click", () => {
    divelement.children[0].classList.remove("prop");
    checkAnswer(divelement, index);
  });
});


// ====================================================================================================


// ==========================DISPLAYING IMAGES=================================================================
const addImage = () => {
  images.forEach((img, index) => {
    var randomNumber = randomNumberArray[index];
    img.src = imagesArray[randomNumber];
  });
};
addImage();

// =========================================================================================================
//
