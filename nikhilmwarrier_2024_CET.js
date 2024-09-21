const W = 800;
const H = 800;
const C_X = W / 2;
const C_Y = H / 2;

function setup() {
  createCanvas(W, H);
  angleMode(DEGREES);
  colorMode(HSL);
}

function draw() {
  translate(C_X, C_Y); // Sets origin to centre of screen
  background(0, 0, 100);

  // outer concentric circles
  fill(160, 80, 20);
  circle(0, 0, 500);
  fill(90, 80, 30);
  circle(0, 0, 450);
  fill(90, 80, 40);
  circle(0, 0, 400);

  // inner concentric circles
  const d = 150;
  for (let i = 0; i < 360; i += 45) {
    fill(0, 70, 50);
    circle(...p2r(d, i % 360), 150);

    fill(30, 100, 50);
    circle(...p2r(d, i % 360), 120);

    fill(50, 100, 60);
    circle(...p2r(d, i % 360), 90);

    fill(50, 100, 80);
    circle(...p2r(d, i % 360), 60);

    fill(50, 100, 100);
    circle(...p2r(d, i % 360), 30);
  }

  // SKY (inner window background)
  fill(180, 60, 60);
  strokeWeight(20);
  stroke(0, 50, 50);
  circle(...p2r(0, 0), 200);
  strokeWeight(0);

  // UMBRELLA
  fill(30, 30, 30);
  rotate(20);
  ellipse(10, -10, 100, 20);
  rect(5, 0, 5, 80);

  // SUN
  fill(50, 100, 100, 0.7);
  circle(10, -60, 35);

  // MAVELI
  rotate(-20);

  // hair
  fill(0, 0, 0, 1);
  triangle(-40, 60, -10, -10, 20, 60);

  // torso
  fill(50, 100, 50);
  circle(-10, 80, 50);
  rotate(30);

  // cloth
  fill(30, 100, 50);
  rect(30, 50, 20, 45);
  rotate(-30);

  // crown-rear
  fill(50, 100, 40);
  circle(-10, 20, 40);

  // head
  fill(50, 100, 80);
  circle(-10, 40, 40);

  // crown-front
  fill(50, 100, 50);
  triangle(-30, 35, -10, -10, 10, 35);

  // 'stache
  fill(0, 0, 0, 1);
  // // left
  rect(-20, 47, 10, 3);
  rect(-20, 47, 3, 10);

  // // right
  rect(-8, 47, 10, 3);
  rect(-1, 47, 3, 10);

  // Re-Drawing the circle outline
  fill(0, 0, 0, 0);
  strokeWeight(20);
  stroke(0, 70, 50);
  circle(...p2r(0, 0), 200);
  strokeWeight(0);
}

/**
 * Convert from polar to rectangular coordinates
 * @param {number} r Radius
 * @param {number} theta Angle
 */
function p2r(r, theta) {
  const x = r * cos(theta);
  const y = r * sin(theta);
  return [x, y];
}
