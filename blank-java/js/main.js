// Your code here!
var globalID;
var r1 = 80;
var ang1 = 0;
var ang2 = 0;
var ang3 = 0;
var flag = null;
var x2 = 0;
var y2 = 0



function F1() {
    var canvas =
        document.getElementById("graphicsView");
    var ctx = canvas.getContext('2d');

   // ctx.beginPath();
   // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
   // ctx.moveTo(110, 75);
   // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
   // ctx.moveTo(65, 65);
   // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
   // ctx.moveTo(95, 65);
   // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
   // ctx.stroke();



    //Call function to drawpatten
    globalID = requestAnimationFrame(drawpatten);

}

function drawpatten() {
    var canvas = document.getElementById("graphicsView");
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "#0000FF";

    
    ctx.beginPath();
    // move the start if the line to the last know point caculated
    ctx.moveTo(x2 + 200, y2 + 200);

    // get current value of sliders and device the value by 1000 (sliders are -100 to + 100 so this gives a value of 0.1 to 0.0001 for each ajustment of angle)
    S1 = document.getElementById("slider1");
    angm1 = S1.value / 1000;
    S2 = document.getElementById("slider2");
    angm2 = S2.value / 1000;
    S3 = document.getElementById("slider3");
    angm3 = S3.value / 1000;

    // we are only going to draw to screen for each 10 points we caculate, this allows us to have finer resolutions with out the over head of writing to screen so often

    for (i = 0; i < 20; i++) {


    //increments the angle and reset after 360 full circle
    ang1 = ang1 + angm1; 
    ang2 = ang2 + angm2;
    ang3 = ang3 + angm3;
        if (ang1 > 360) { ang1 = ang1 - 360 };
        if (ang2 > 360) { ang2 = ang2 - 360 };
        if (ang3 > 360) { ang3 = ang3 - 360 };

    // caculate the x y cordinates the points on each circle and of sets them 
    x = (Math.cos(ang1) * r1);
    y = (Math.sin(ang1) * r1);
    x1 = (Math.cos(ang2) * r1) + x;
    y1 = (Math.sin(ang2) * r1) + y;
    x2 = (Math.cos(ang3) * r1) + x1;
    y2 = (Math.sin(ang3) * r1) + y1;
            
    // draws the next sections of the line       
    ctx.lineTo(x2 + 200, y2 + 200);

    }

    // better way to do this but this flag just skips drawing the first time, this is becasue the first step will have a line from 0,0 to first cacualted point) 
    if (flag > 0) {
        ctx.stroke();
     }
    // set flag after first caculate and stroke
    flag = 1

    // recussivaly call function
    globalID = requestAnimationFrame(drawpatten);
    
}



