var character = document.getElementById("character");
var block = document.getElementById("block");
var h1 = document.createElement("h1");
var score = 0;
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
    score = score + 100;
  }
  setTimeout(function() {
    character.classList.remove("animate");
  }, 500);
}
var checkDead = setInterval(function() {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 120 && blockLeft > 100 && characterTop >= 130) {
    block.style.animation = "none";
    character.style.animation = "none";
    window.alert(score);

    /* h1.textContent = score;
    document.body.appendChild(h1);
    /*swal.fire("score");*/
  }
});
