const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
const ratingNum = document.querySelector(".rating-num");
const numItem = Array.from(document.querySelectorAll(".num-item"));
let reviewNum = 0;

const handleNum = (e)=>{
   reviewNum = e.target.textContent;

}

numItem.map((item)=>{
    item.onclick = handleNum;
})


const handleSubmit = () => {
  ratingCard.style.display = "none";
  thanksCard.style.display = "flex";
  ratingNum.textContent = reviewNum;
};
