// let sourceImg=null;
// let maskImg=null;

// // change these three lines as appropiate
// let sourceFile = "input_new1.jpg";
// let maskFile   = "mask_new1.png";
// let outputFile = "output_1.png";

// function preload() {
//   sourceImg = loadImage(sourceFile);
//   maskImg = loadImage(maskFile);
// }

// function setup () {
//   let main_canvas = createCanvas(1920, 1080);
//   main_canvas.parent('canvasContainer');

//   imageMode(CENTER);
//   noStroke();
//   background(0, 0, 128);
//   sourceImg.loadPixels();
//   maskImg.loadPixels();
//   colorMode(HSB);
// }

// // let X_STOP = 640;
// // let Y_STOP = 480;
// let X_STOP = 1920;
// let Y_STOP = 1080;
// let OFFSET = 20;

// let renderCounter=0;
// function draw () {
//   angleMode(DEGREES);
//   let num_lines_to_draw = 40;
//   let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix = sourceImg.get(x, y);
//     //let mask = maskImg.get(x, y);
//     fill(pix);
//   // get one scanline
//   for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
//     for(let i=0; i<X_STOP; i++) {
//       colorMode(RGB);
//       let mask = maskImg.get(i, j);
//       if (mask[1] < 128) {
//         let wave = sin(j*8);
//         let slip = map(wave, -1, 1, -OFFSET, OFFSET);
//         pix = sourceImg.get(i+slip, j);
//       }
//       else {
//         let pointSize = 200;
//         rect(x, y, pointSize, pointSize);    

//         // let brt = map(wave, -1, 1, 0, 255);
//         // for(let c=0; c<3; c++) {
//         //   pix[c] = brt;
//         // }
//       }

//       set(i, j, pix);
//     }
//   }
//   renderCounter = renderCounter + num_lines_to_draw;
//   updatePixels();

//   // print(renderCounter);
//   if(renderCounter > Y_STOP) {
//     console.log("Done!")
//     noLoop();
//     // uncomment this to save the result
//     // saveArtworkImage(outputFile);
//   }
// }

// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   }
// }

var r;
var g;
var b;
var a;

let sourceImg=null;
let maskImg=null;
let renderCounter=10;

// change these three lines as appropiate
let sourceFile = "input_new2.jpg";
let maskFile   = "mask_new2.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  r = random(0,255); // r is a random number between 0 - 255
  g = random(100,205); // g is a random number betwen 100 - 205
  b = random(150,255); // b is a random number between 0 - 100
  a = random(20,255); // a is a random number between 200 - 255
  
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    if(mask[0] > 128) {
      //fill(34,23,143)
      let pointSize = 20;
      rect(x, y, pointSize*2, pointSize/3);  
      if (i <= 2000){
        fill(r,g,b,50)
        let pointSize = 10;
        push()
        stroke(255)
      ellipse(x, y, pointSize*2, pointSize/3);  
      pop()
      } 
     // ellipse(x, y, pointSize*5, pointSize);  
    }
    else {
      
      fill(pix)
      

      let pointSize = 1;
      rect(x, y, pointSize*5, pointSize*5);
      if (i <= 2000){
        fill(r/2,g/5,b*5,55)
        let pointSize = 25;
      rect(x, y, pointSize/2, pointSize/3);  
      }
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 100) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}