const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate stars
const numStars = 100;
const stars = [];
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speed: Math.random() * 0.5 + 0.1,
  });
}

// Draw stars
function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw stars
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];
    ctx.fillRect(star.x, star.y, star.size, star.size);
  }

  // Move stars
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];
    star.x -= star.speed;
    if (star.x < -star.size) {
      star.x = canvas.width + star.size;
    }
  }

  // Repeat animation
  requestAnimationFrame(draw);
}

// Start animation
draw();
