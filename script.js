// List of color names you want
const colors = [
  "red", "blue", "green", "yellow",
  "purple", "orange", "pink", "brown",
  "cyan", "magenta"
];

function newRound() {
  const correctColor = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById('colorBox').style.background = correctColor;

  let options = [correctColor];

  while (options.length < 4) {
    let c = colors[Math.floor(Math.random() * colors.length)];
    if (!options.includes(c)) options.push(c);
  }

  // Shuffle
  options.sort(() => Math.random() - 0.5);

  const btnDiv = document.getElementById('buttons');
  btnDiv.innerHTML = "";

  options.forEach(color => {
    const btn = document.createElement("button");
    btn.textContent = color;

    btn.onclick = () => {
      if (color === correctColor) {
        document.getElementById("result").textContent = "Correct! 🎉";
        setTimeout(newRound, 1000);
      } else {
        document.getElementById("result").textContent = "Wrong ❌";
      }
    };

    btnDiv.appendChild(btn);
  });

  document.getElementById("result").textContent = "";
}

newRound();
