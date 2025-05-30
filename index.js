const coin = document.querySelector("#coin");
const img = document.querySelector(".imgCoin");
const btns = document.querySelector(".btns");

const randomCoin = () => {
  const random = Math.floor(Math.random() * 10);
  console.log(random);
  random > 5
    ? (img.src = "./resources/tails.svg")
    : (img.src = "./resources/heads.svg");
};

coin.addEventListener("click", () => {
  randomCoin();
});
btns.addEventListener("click", () => {
  randomCoin();
});
