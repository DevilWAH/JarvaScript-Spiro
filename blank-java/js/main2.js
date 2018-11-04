
var r1 = 60;
var ang1 = 0;
var ang2 = 0;
var ang3 = 0;
var points = [];
// the anim loop


function anim() {
    // For each frame check slider vlaues
    S1 = document.getElementById("slider1");
    angm1 = S1.value / 50000;
    S2 = document.getElementById("slider2");
    angm2 = S2.value / 50000;
    S3 = document.getElementById("slider3");
    angm3 = S3.value / 50000;
    // push new points
    makepattern();
    // remove old points
    cleanoldies();
    // draw all
    draw();
    // do it again
    requestAnimationFrame(anim);
}


function cleanoldies() {

    points.length = slider4.value * 2

    }



function draw() {
    //Here we'll only draw
    var canvas = document.getElementById("graphicsView");
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "#00FF00";
    // clear all
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // make background black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // a single Path
    ctx.lineWidth = 2;
    ctx.beginPath();
    // points are stored in a flat array [x, y, x, y, x...]
    for (let i = 0; i < points.length; i += 2)
        ctx.lineTo(points[i], points[i + 1]);
    ctx.stroke();
}

function makepattern() {
    // push new points


    for (i = 0; i < 20; i++) {

        ang1 = (ang1 + angm1) % 360;
        ang2 = (ang2 + angm2) % 360;
        ang3 = (ang3 + angm3) % 360;
      

        var x = (Math.cos(ang1) * r1),
            y = (Math.sin(ang1) * r1),
            x1 = (Math.cos(ang2) * r1) + x,
            y1 = (Math.sin(ang2) * r1) + y,
            x2 = (Math.cos(ang3) * r1) + x1,
            y2 = (Math.sin(ang3) * r1) + y1;

        // store the next sections of the line       
        points.unshift(x2 + 250, y2 + 200);


    }
}