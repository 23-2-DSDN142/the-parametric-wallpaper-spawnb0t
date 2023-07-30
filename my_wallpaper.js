//your parameter variables go here!

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background('#c9dfc8'); //pastelGreen #c9dfc8 //lightOrange #ffeeda
}

function my_symbol() { // do not rename this function. Draw below:
  
    let black = (0);
    let mainFur = (50); // 50 dark grey //'#b97e43' tan // #a9b6bb light grey
    let noseHoles = (40);
    let white = (250);
    let pink = ('#FDA2C6');
    let eyeColour = ('#67443b'); // brown eyes
  
    let headTop = (40);
    let headL = (80);
      let headR = (headL+40);
    let snoutBottom = (150);

    let earTop = (headTop-8);
      let earTriangleDroop = (headTop+25); //+25
    let earLstart = (72);
    let earRstart = (127);

    let eyeL = (85);
    let eyeR = (115);
      let eyeHeight = (headTop+25); //+25
    let eyeDiameter = (23); 
    let pupilDiameter = (4); //4
    let eyeColourDiameter = (8); //8

    // tongue - mouth
    noStroke();
    fill(pink);
    beginShape();
    curveVertex(100, 130);
    curveVertex(100, 130);
    curveVertex(120, 138);
    curveVertex(130, 148);
    curveVertex(105, 140);
    curveVertex(105, 140);
    endShape();
    stroke(black);
    beginShape();
    curveVertex(100, 138);
    curveVertex(100, 138);
    curveVertex(110, 137);
    curveVertex(120, 142);
    curveVertex(120, 142);
    endShape();

    
    // head & snout
    fill(mainFur);
    noStroke();
    beginShape(); 
    vertex(headL, headTop);
    vertex(headR, headTop);
    vertex(headR-15, snoutBottom);
    vertex(headL+15, snoutBottom);
    vertex(headL, headTop);
    endShape(CLOSE);


    // face markings
    // bottom R snout
    noStroke();
    fill(white);
    beginShape();
    curveVertex(100, 120);
    curveVertex(100, 120);
    curveVertex(108, 125);
    curveVertex(107, 140);
    curveVertex(105, 150);
    curveVertex(100, 150);
    curveVertex(100, 150);
    endShape();
    // bottom L snout
    noStroke();
    fill(white);
    beginShape();
    curveVertex(100, 130);
    curveVertex(100, 130);
    curveVertex(93, 135);
    curveVertex(93, 140);
    curveVertex(94, 148)
    curveVertex(100, 150);
    curveVertex(100, 150);
    endShape();
    // long middle snout stroke
    noStroke();
    fill(white);
    beginShape();
    curveVertex(100, 41);
    curveVertex(100, 41);
    curveVertex(101, 40);
    curveVertex(103, 40);
    curveVertex(104, 48);
    curveVertex(104, 131);
    curveVertex(100, 131);
    curveVertex(100, 131);
    endShape();




    // nose
    fill(black);
    ellipse(100, snoutBottom, 10, 8); 
    fill(noseHoles);
    ellipse(98, snoutBottom+1, 3, 2); 
    ellipse(102, snoutBottom+1, 3, 2); 


    // earLeft
    fill(mainFur);
    noStroke();
    beginShape(); 
    // L parallelogram
    vertex(earLstart, earTop);
    vertex(earLstart+13, earTop);
    vertex(earLstart+20, headTop);
    vertex(earLstart-2, headTop);
    endShape(CLOSE);
    // L triangle ear droop
    beginShape(); 
    vertex(earLstart, earTop);
    vertex(earLstart+11, headTop)
    vertex(earLstart-6, earTriangleDroop)
    vertex(earLstart-9, earTriangleDroop-6)
    endShape(CLOSE);
    // L ear hole
    fill(black);
    beginShape();
    vertex(earLstart+3, earTop+7);
    vertex(earLstart+1, earTop+13);
    vertex(earLstart+10, earTop+7);
    endShape(CLOSE);


    // earRight
    fill(mainFur);
    beginShape(); 
    // R parallelogram
    vertex(earRstart, earTop);
    vertex(earRstart-13, earTop);
    vertex(earRstart-16, headTop);
    vertex(earRstart+2, headTop);
    endShape(CLOSE);
    // R triangle ear droop
    beginShape(); 
    vertex(earRstart, earTop);
    vertex(earRstart-11, headTop)
    vertex(earRstart+6, earTriangleDroop)
    vertex(earRstart+9, earTriangleDroop-4)
    endShape(CLOSE);
    // R ear hole
    fill(black);
    beginShape();
    vertex(earRstart-3, earTop+7);
    vertex(earRstart-1, earTop+13);
    vertex(earRstart-10, earTop+7);
    endShape(CLOSE);


    // eyes
    fill(white);
    stroke(black);
    ellipse(eyeL, eyeHeight, eyeDiameter, eyeDiameter);
    ellipse(eyeR, eyeHeight, eyeDiameter, eyeDiameter);
     noStroke();
    fill(eyeColour);
    ellipse(eyeL+3, eyeHeight, eyeColourDiameter, eyeColourDiameter);
    ellipse(eyeR-3, eyeHeight, eyeColourDiameter, eyeColourDiameter);
    fill(black);
    ellipse(eyeL+3, eyeHeight, pupilDiameter, pupilDiameter);
    ellipse(eyeR-3, eyeHeight, pupilDiameter, pupilDiameter);
   
    
}

// fill
// stroke (colour)
// strokeWeight
// strokeJoin (ROUND)

