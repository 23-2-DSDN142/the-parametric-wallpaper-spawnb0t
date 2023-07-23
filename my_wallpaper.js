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
  
  fill(255);
  stroke(71, 102, 155); // blue colour


  ellipse(headX - 15, earY, 20, 70); // left ear
  ellipse(headX + 15, earY, 20, 70);

  ellipse(headX, headY, 70, 70); //head

  fill(71, 102, 155) // blue colour

  ellipse(headX - 15, eyeY, eyeSize, eyeSize) //left eye // 60 before

  ellipse(headX + 15, eyeY, eyeSize, eyeSize) // right eye

  line(headX - 5, headY + 10, headX + 5, headY + 5);
  line(headX + 5, headY + 10, headX - 5, headY + 5);
}

