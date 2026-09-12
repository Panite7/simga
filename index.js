const images = ["images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png"];


function createFallingMessage() {
  const message = document.createElement("div");
  message.classList.add("falling-message");
  message.innerHTML = `<img src="${images[Math.floor(Math.random() * images.length)]}" alt="Image">`;

  const randomX = Math.random() * window.innerWidth;
  message.style.left = randomX + "px";
  
  const duration = Math.random() * 3 + 2;
  message.style.animationDuration = duration + "s";
  
  document.body.appendChild(message);
  
  
 setTimeout(() => message.remove(), duration * 4000);
}


setTimeout(() => {
  setInterval(createFallingMessage, 250);
});