function main() {
  const elem = document.querySelector(".caja-roja");

  var leftRigth = 0;
  document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") {
      leftRigth += 10;
      elem.style.marginLeft = leftRigth + "px";
    }
    if (e.key == "ArrowLeft") {
      leftRigth += -10;
      elem.style.marginLeft = leftRigth + "px";
    }
  });
}

main();
