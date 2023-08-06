//your parameter variables go here!

let midX = 100

let black = (0);
    let mainFur = (220); // 50 dark grey //'#b97e43' tan // #a9b6bb light grey
    let noseHoles = (40);
    let white = (250);
    let tonguePink = ('#d37074');
    let eyeColour = ('#67443b'); // brown eyes
    let turquoise = ('#4aa38f');

    let headTop = (40);
    let headL = (80);
      let headR = (headL+40);
    let snoutBottom = (140);

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

    let motif = false;

    let colourPallete = "greyscale";
      let shadeBackground;
      let shadeOne;
      let shadeTwo;
      let shadeThree;
      let shadeFour;
      let shadeFive;
      let shadeSix;

      let pattern = (2);
        // pattern 1 = long irregular blobs 
        // pattern 2 = big circular blobs
        // pattern 3 = square pixels


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); // DEVELOP_GLYPH or GLIDE_/GRID_WALLPAPER 
  pWallpaper.resolution(NINE_LANDSCAPE); // NINE_LANDSCAPE/PORTRAIT
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(255);
}

function my_symbol() { // do not rename this function. Draw below:

    if(colourPallete == "pink") {
      
      shadeBackground = color('#FFEEEC')
      shadeOne = color('#E8B4B8');
      shadeTwo = color('#F4D5D4'); 
      shadeThree = color('#A49393'); 
      shadeFour = color('#E1B5C3'); 
      shadeFive = color('#3B0404'); 
      shadeSix = color('#E9A79D'); 
    }

    else if(colourPallete == "green") {
      shadeBackground = color('#ebefec')
      shadeOne = color('#c5e1a5');
      shadeTwo = color('#94c973');
      shadeThree = color('#d2fba4');
      shadeFour = color('#aafcab');
      shadeFive = color('#aafcab');
      shadeSix = color('#479f8b');
    }

    else if(colourPallete == "retro") {
      shadeBackground = color('#fef7e2');
      shadeOne = color('#ca9a7e');
      shadeTwo = color('#708990');
      shadeThree = color('#a16b56');
      shadeFour = color('#e0a370');
      shadeFive = color('#dec584');
      shadeSix = color('#94808B');

    }

    else if(colourPallete == "greyscale") {
      shadeBackground = color(220);
      shadeOne = color(200);
      shadeTwo = color(120);
      shadeThree = color(90);
      shadeFour = color(160);
      shadeFive = color(240);
      shadeSix = color(50);

    }

    // irregular blobs
    if(pattern == 1) {

      fill(shadeBackground);
      noStroke();
      rect(0, 0, 200);

      fill(shadeFour);
      ellipse(50, 184, 96, 30);

      fill(shadeFive);
      beginShape();
      curveVertex(150, 20);
      curveVertex(150, 20);
      curveVertex(160, 12);
      curveVertex(180, 6);
      curveVertex(197, 10);
      curveVertex(189, 32);
      curveVertex(155, 34);
      curveVertex(155, 24);
      curveVertex(155, 24);
      endShape();

      fill(shadeFive);
      beginShape();
      curveVertex(47, 30);
      curveVertex(47, 30);
      curveVertex(55, 20);
      curveVertex(65, 10);
      curveVertex(75, 8);
      curveVertex(90, 14);
      curveVertex(96, 35);
      curveVertex(105, 58);
      curveVertex(60, 56);
      curveVertex(44, 34);
      curveVertex(44, 34);
      endShape();

      fill(shadeOne);
      beginShape();
      curveVertex(5, 30);
      curveVertex(5, 30);
      curveVertex(30, 50);
      curveVertex(60, 24);
      curveVertex(46, 5);
      curveVertex(30, 10);
      curveVertex(16, 10);
      curveVertex(7, 23);
      curveVertex(7, 23);
      endShape();

      fill(shadeThree);
      beginShape();
      curveVertex(30, 80);
      curveVertex(30, 80);
      curveVertex(40, 60);
      curveVertex(60, 55);
      curveVertex(100, 40);
      curveVertex(110, 20);
      curveVertex(150, 10);
      curveVertex(160, 15);
      curveVertex(180, 40);
      curveVertex(160, 70);
      curveVertex(120, 130);
      curveVertex(70, 160);
      curveVertex(50, 140);
      curveVertex(20,130);
      curveVertex(8, 95);
      curveVertex(25, 85);
      curveVertex(25, 85);
      endShape();

      fill(shadeOne);
      beginShape();
      curveVertex(165, 30);
      curveVertex(165, 30);
      curveVertex(172, 26);
      curveVertex(180, 20);
      curveVertex(185, 19);
      curveVertex(190, 25);
      curveVertex(186, 36);
      curveVertex(187, 40);
      curveVertex(190, 50);
      curveVertex(172, 60);
      curveVertex(150, 55);
      curveVertex(150, 45);
      curveVertex(162, 32);
      curveVertex(162, 32);
      endShape();

      fill(shadeFive);
      beginShape();
      curveVertex(6, 155);
      curveVertex(6, 155);
      curveVertex(15, 150);
      curveVertex(25, 145);
      curveVertex(40, 150);
      curveVertex(50, 160);
      curveVertex(55, 180);
      curveVertex(35, 188);
      curveVertex(20, 183);
      curveVertex(10, 178);
      curveVertex(5, 168);
      curveVertex(4, 157);
      curveVertex(4, 157);
      endShape();

      fill(shadeTwo);
      beginShape();
      curveVertex(80, 115);
      curveVertex(80, 115);
      curveVertex(90, 110);
      curveVertex(110, 90);
      curveVertex(116, 85);
      curveVertex(128, 76);
      curveVertex(122, 60);
      curveVertex(130, 48);
      curveVertex(117, 40);
      curveVertex(80, 85);
      curveVertex(60, 78);
      curveVertex(40, 100);
      curveVertex(30, 133)
      curveVertex(32, 153);
      curveVertex(20, 178);
      curveVertex(40, 176);
      curveVertex(50, 160);
      curveVertex(55, 130);
      curveVertex(60, 122);
      curveVertex(60, 122);
      endShape();

      fill(shadeOne);
      beginShape();
      curveVertex(98, 141);
      curveVertex(98, 141);
      curveVertex(120, 122);
      curveVertex(175, 122);
      curveVertex(180, 137);
      curveVertex(170, 152);
      curveVertex(140, 177);
      curveVertex(120, 172);
      curveVertex(100, 175);
      curveVertex(95, 170);
      curveVertex(90, 152);
      curveVertex(99, 140);
      curveVertex(99, 140);
      endShape();

      fill(shadeThree);
      beginShape();
      curveVertex(79, 160);
      curveVertex(79, 160);
      curveVertex(82, 162);
      curveVertex(90, 164);
      curveVertex(94, 178);
      curveVertex(100, 180);
      curveVertex(108, 175);
      curveVertex(112, 168);
      curveVertex(115, 162);
      curveVertex(122, 165);
      curveVertex(125, 174);
      curveVertex(117, 185);
      curveVertex(105, 190);
      curveVertex(85, 195);
      curveVertex(70, 175);
      curveVertex(75, 162);
      curveVertex(75, 162);
      endShape();

      fill(shadeFour);
      beginShape();
      curveVertex(120, 190);
      curveVertex(120, 190);
      curveVertex(132, 182);
      curveVertex(140, 184);
      curveVertex(142, 194);
      curveVertex(130, 196);
      curveVertex(122, 194)
      curveVertex(120, 192);
      curveVertex(120, 192);
      endShape();

      fill(shadeSix);
      beginShape();
      curveVertex(156, 88);
      curveVertex(156, 88);
      curveVertex(160, 100);
      curveVertex(168, 113);
      curveVertex(180, 115);
      curveVertex(190, 105);
      curveVertex(192, 90);
      curveVertex(175, 94);
      curveVertex(169, 85);
      curveVertex(162, 78);
      curveVertex(156, 82);
      curveVertex(156, 82);
      endShape();

      fill(shadeFive);
      beginShape();
      curveVertex(155, 185);
      curveVertex(155, 185);
      curveVertex(170, 196);
      curveVertex(195, 190);
      curveVertex(188, 170);
      curveVertex(168, 140);
      curveVertex(158, 108);
      curveVertex(142, 110);
      curveVertex(145, 125);
      curveVertex(143, 170);
      curveVertex(148, 182);
      curveVertex(148, 182);
      endShape();

      fill(shadeTwo);
      beginShape();
      curveVertex(176, 70);
      curveVertex(176, 70);
      curveVertex(186, 62);
      curveVertex(195, 70);
      curveVertex(183, 80);
      curveVertex(176, 76);
      curveVertex(175, 71);
      curveVertex(175, 71);
      endShape();

      fill(shadeSix);
      beginShape();
      curveVertex(6, 55);
      curveVertex(6, 55);
      curveVertex(15, 40);
      curveVertex(25, 30);
      curveVertex(32, 40);
      curveVertex(29, 50);
      curveVertex(32, 70);
      curveVertex(38, 78);
      curveVertex(26, 95);
      curveVertex(14, 85);
      curveVertex(9, 80);
      curveVertex(7, 70);
      curveVertex(4, 60);
      curveVertex(4, 60);
      endShape();

      fill(shadeSix);
      beginShape();
      curveVertex(112, 8);
      curveVertex(112, 8);
      curveVertex(125, 3);
      curveVertex(135, 6);
      curveVertex(138, 26);
      curveVertex(133, 28);
      curveVertex(113, 10);
      curveVertex(113, 10);
      endShape();



      // // fill(shadeFour);
      // // beginShape();
      // curveVertex(150, 20);
      // curveVertex(150, 20);
      // curveVertex(160, 12);
      // // curveVertex(180, 6);
      // // curveVertex(197, 10);
      // // curveVertex(189, 32);
      // // curveVertex(155, 34);
      // curveVertex(155, 24);
      // curveVertex(155, 24);
      // endShape();


    }

    // big circular blobs
    else if(pattern == 2) {

      fill(shadeBackground);
      noStroke();
      rect(0, 0, 200);

      fill(shadeFour);
      noStroke();
      beginShape();
      curveVertex(20, 160);
      curveVertex(20, 160);
      curveVertex(50, 50);
      curveVertex(90, 40);
      curveVertex(140, 50);
      curveVertex(180, 40);
      curveVertex(190, 100);
      curveVertex(150, 190);
      curveVertex(13, 185);
      curveVertex(13, 185);
      endShape();

      fill(shadeSix);
      ellipse(80, 118, 145, 80)

      fill(shadeFive);
      noStroke();
      beginShape();
      curveVertex(40, 10);
      curveVertex(40, 10);
      curveVertex(60, 15);
      curveVertex(160, 20);
      curveVertex(90, 120);
      curveVertex(60, 125);
      curveVertex(30, 100);
      curveVertex(28, 80);
      curveVertex(24, 60);
      curveVertex(20, 20);
      curveVertex(25, 8);
      curveVertex(25, 8);
      endShape();


      fill(shadeOne);
      noStroke();
      beginShape();
      curveVertex(20, 50);
      curveVertex(20, 50);
      curveVertex(40, 40);
      curveVertex(60, 20);
      curveVertex(80, 30);
      curveVertex(80, 60);
      curveVertex(50, 85);
      curveVertex(20, 65);
      curveVertex(17, 55);
      curveVertex(17, 55);
      endShape();


      fill(shadeThree);
      noStroke();
      beginShape();
      curveVertex(120, 120);
      curveVertex(120, 120);
      curveVertex(130, 140);
      curveVertex(150, 150);
      curveVertex(160, 135);
      curveVertex(180, 100);
      curveVertex(140, 100);
      curveVertex(122, 110);
      curveVertex(140, 100);
      endShape();

      
      
      // fill(0);
      // ellipse(20, 160, 2, 2);
      // ellipse(150, 180, 2, 2);

    }

    // square pixels
    else {

      noStroke();

      fill(shadeBackground);
      rect(0, 0, 200);

      //line 1
      fill(shadeOne);
      rect(0, 0, 20);

      fill(shadeThree);
      rect(40, 0, 20);

      fill(shadeFive);
      rect(80, 0, 20);

      fill(shadeTwo);
      rect(120, 0, 20);

      fill(shadeTwo);
      rect(160, 0, 20);

      //line 2
      fill(shadeSix);
      rect(20, 20, 20);

      fill(shadeFive);
      rect(60, 20, 20);

      fill(shadeThree);
      rect(100, 20, 20);

      fill(shadeFour);
      rect(140, 20, 20);

      fill(shadeOne);
      rect(180, 20, 20);

      //line 3
      fill(shadeFive);
      rect(0, 40, 20);

      fill(shadeSix);
      rect(40, 40, 20);

      fill(shadeTwo);
      rect(80, 40, 20);

      fill(shadeThree);
      rect(120, 40, 20);

      fill(shadeThree);
      rect(120, 40, 20);

      fill(shadeOne);
      rect(160, 40, 20);

      //line 4
      fill(shadeFive);
      rect(20, 60, 20);

      fill(shadeFive);
      rect(60, 60, 20);

      fill(shadeTwo);
      rect(100, 60, 20);

      fill(shadeFour);
      rect(140, 60, 20);

      fill(shadeSix);
      rect(180, 60, 20);

      //line 5
      fill(shadeTwo);
      rect(0, 80, 20);

      fill(shadeOne);
      rect(40, 80, 20);

      fill(shadeFive);
      rect(80, 80, 20);

      fill(shadeTwo);
      rect(120, 80, 20);

      fill(shadeOne);
      rect(120, 80, 20);

      fill(shadeThree);
      rect(160, 80, 20);

      //line 6
      fill(shadeThree);
      rect(20, 100, 20);

      fill(shadeTwo);
      rect(60, 100, 20);

      fill(shadeSix);
      rect(100, 100, 20);

      fill(shadeThree);
      rect(140, 100, 20);

      fill(shadeTwo);
      rect(180, 100, 20);

      //line 7
      fill(shadeFive);
      rect(0, 120, 20);

      fill(shadeTwo);
      rect(40, 120, 20);

      fill(shadeOne);
      rect(80, 120, 20);

      fill(shadeFive);
      rect(120, 120, 20);

      fill(shadeTwo);
      rect(120, 120, 20);

      fill(shadeThree);
      rect(160, 120, 20);

      //line 8
      fill(shadeThree);
      rect(20, 140, 20);

      fill(shadeTwo);
      rect(60, 140, 20);

      fill(shadeTwo);
      rect(100, 140, 20);

      fill(shadeSix);
      rect(140, 140, 20);

      fill(shadeFive);
      rect(180, 140, 20);

       //line 9
       fill(shadeFour);
       rect(0, 160, 20);
 
       fill(shadeFour);
       rect(40, 160, 20);
 
       fill(shadeSix);
       rect(80, 160, 20);
 
       fill(shadeTwo);
       rect(120, 160, 20);
 
       fill(shadeOne);
       rect(120, 160, 20);
 
       fill(shadeFive);
       rect(160, 160, 20);

       //line 10
      fill(shadeThree);
      rect(20, 180, 20);

      fill(shadeTwo);
      rect(60, 180, 20);

      fill(shadeSix);
      rect(100, 180, 20);

      fill(shadeFive);
      rect(140, 180, 20);

      fill(shadeTwo);
      rect(180, 180, 20);

    }

    


// greyhound motif:

if(motif == true) {
    // tongue - mouth
    strokeWeight(1);
    noStroke();
    fill(tonguePink);
    beginShape();
    curveVertex(midX, snoutBottom-20);
    curveVertex(midX, snoutBottom-20);
    curveVertex(midX+20, snoutBottom-12);
    curveVertex(midX+30, snoutBottom-2);
    curveVertex(midX+5, snoutBottom-10);
    curveVertex(midX+5, snoutBottom-10);
    endShape();
    stroke(black);
    beginShape();
    curveVertex(midX, snoutBottom-12);
    curveVertex(midX, snoutBottom-12);
    curveVertex(midX+10, snoutBottom-13);
    curveVertex(midX+20, snoutBottom-8);
    curveVertex(midX+20, snoutBottom-8);
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


    // // // face markings
    // // // bottom R snout
    // // noStroke();
    // // fill(white);
    // // beginShape();
    // // curveVertex(midX-20, 120);
    // // curveVertex(midX-20, 120);
    // // curveVertex(108, 125);
    // // curveVertex(107, 140);
    // // curveVertex(105, 150);
    // // curveVertex(110, 150);
    // // curveVertex(110, 150);
    // // endShape();
    // // // // bottom L snout
    // // noStroke();
    // // fill(white);
    // // beginShape();
    // // curveVertex(100, 130);
    // // curveVertex(100, 130);
    // // curveVertex(93, 135);
    // // curveVertex(93, 140);
    // // curveVertex(94, 148)
    // // curveVertex(100, 150);
    // // curveVertex(100, 150);
    // // endShape();
    // // // long middle snout stroke
    // // noStroke();
    // // fill(white);
    // // beginShape();
    // // curveVertex(100, 41);
    // // curveVertex(100, 41);
    // // curveVertex(101, 40);
    // // curveVertex(103, 40);
    // // curveVertex(104, 48);
    // // curveVertex(104, 131);
    // // curveVertex(100, 131);
    // // curveVertex(100, 131);
    // // endShape();

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
}


// angleMode(DEGREES);
