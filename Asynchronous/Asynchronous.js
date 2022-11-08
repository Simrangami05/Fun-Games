// const orderSoup = () => console.log("Soup is ready");
// console.log("You start the conversation with your friend");

// setTimeout(orderSoup, 2000);

// console.log("Still Speaking");

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("Soup is ready ✔") : reject("No soup today ❌");
  }, 2000);
});
// console.log(
//   promise1
//     .then((success) => console.log({ success }))
//     .catch((error) => console.log({ error }))
// );
// const getSoup = async () => {
//   try {
//     const soup = await promise1;
//     console.log(soup);
//   } catch(error) {
//     console.log(error);
//   }
// };
// getSoup();

const getSoup = async () => {
  // Lull/ undefined
  const data = { rating: 0, tip: 0, pay: 0, review: 0 };
  try {
    const soup = await promise1;
    console.log(soup);
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.review = 5;
    return data;
  } catch (error) {
    console.log(error);
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data;
  }
};

getSoup().then((value) => console.log(value));

const sum = async (a, b) => a + b
console.log(sum(1, 2).then(value => console.log(value)), 'sum');

// const getDog = async () => {
//   const url = "https://dog.ceo/api/breeds/image/random";
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };
// getDog();
