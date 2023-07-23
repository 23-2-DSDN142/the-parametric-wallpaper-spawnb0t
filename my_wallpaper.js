//your parameter variables go here!
let headX = 75;
let headY = 90;

  let eyeY = headY - 10;
  let earY = headY - 40;
  let eyeSize = 10;


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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Draw below:
  
  let black = (0)
    let darkFur = (50)
    let noseHoles = (40)
    let white = (250)
  
    let headTop = (70);
    let headBottom = (160)

    let earStart = (75)
    let earTop = (60)
    let earDroop = (80)

    let eyeL = (85)
    let eyeR = (115)
    let eyeHeight = (90)
  
    
    // snout
    fill(darkFur);
    beginShape(); 
    vertex(80, headTop);
    vertex(120, headTop);
    vertex(105, headBottom);
    vertex(95, headBottom);
    vertex(80, headTop);
    endShape(CLOSE);

    // nose
    fill(black);
    ellipse(100, headBottom, 10, 8); 
    fill(noseHoles);
    ellipse(98, headBottom, 3, 2); 
    ellipse(102, headBottom, 3, 2); 


    // earLeft
    fill(darkFur);
    beginShape(); 
    vertex(earStart, headTop);
    vertex(earStart+10, headTop);
    vertex(earStart+7, earTop);
    vertex(earStart-3, earTop);
    vertex(earStart-10, earDroop);
    vertex(earStart-5, earDroop)
    endShape(CLOSE);

    // earRight
    fill(darkFur);
    beginShape(); 
    vertex(earStart+50, headTop);
    vertex(earStart+50-10, headTop);
    vertex(earStart+50-7, earTop);
    vertex(earStart+50+3, earTop);
    vertex(earStart+50+10, earDroop);
    vertex(earStart+50+5, earDroop)
    endShape(CLOSE);

    //eyes
    fill(white);
    ellipse(eyeL, eyeHeight, 20, 20);
    ellipse(eyeR, eyeHeight, 20, 20);
    fill(black);
    ellipse(eyeL+3, eyeHeight, 3, 3);
    ellipse(eyeR-3, eyeHeight, 3, 3);
    
}

