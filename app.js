const boxes = document.querySelectorAll(".box");

function randomChangeColor(box) {
  const letter = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  //改變box顏色
  box.style.backgroundColor = color;

  //設定2秒後變回黑灰色
  setTimeout(() => {
    box.style.backgroundColor = "rgb(29, 29, 29)";
  }, 1000);
}

boxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    randomChangeColor(box);
  });
});
