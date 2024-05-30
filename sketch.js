var r;
var g;
var b;
var a;

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

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
  r = random(10,255); // r is a random number between 0 - 255
  g = random(10,255); // g is a random number betwen 100 - 205
  b = random(20,255); // b is a random number between 0 - 100
  a = random(20,100); // a is a random number between 200 - 255
  
  for(let i=0;i<5000;i++) {
    
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    fill(pix);

    if(mask[0] > 128) {
      let pointSize = 20;
      push()
       stroke(r,g,b,a)
       rect(x, y, pointSize*2, pointSize/3);  
       pop()
      
      if (i <= 1000){
        fill(r,g,b,50)
        let pointSize = 10;
       push()
       stroke(255)
       ellipse(x, y, pointSize*2, pointSize/3);
       pop() //allows the stroke to only occur for this specified ellipses and no other pixels 
      
      } 
     
    }
    else { // unmasked area - ocean 
      fill(pix)
      let pointSize = 1;
      rect(x, y, pointSize*5, pointSize*5);
       
      if (i <= 2000){
          fill(r/2,g/5,b*5,55)
          let pointSize = 15;
          rect(x, y, pointSize/2, pointSize/3);
      }
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1000) { //increased the counter so that the image continues to 'move/ (can be seen as some sort of GIF)
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

  function keyTyped() {
    if (key == '!') {
      saveBlocksImages();
    }
  
}