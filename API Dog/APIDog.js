console.log("Hello");
// https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById("dogImage");
const dogButtonDiv = document.getElementById("dogButton");
// stuff you have to wait for

const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      dogImageDiv.innerHTML = `<img src='${json.message}' height=500 width=500 />`;
    });
};

dogButton.onclick = () => getNewDog();

console.log("run 3rd");
