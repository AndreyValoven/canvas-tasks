var canvas = document.querySelector('#first');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(250,200,100,100);
    ctx.fillStyle = "#fff";
    ctx.fillRect(50, 50, 100, 150);
    ctx.fillRect(450, 50, 100, 150);
    ctx.clearRect(60, 60, 80, 130);
    //set path
    ctx.beginPath();
    // drawing commands
    ctx.moveTo(100, 300);
    ctx.lineTo(200, 100);
    ctx.lineTo(250, 210);
    ctx.lineTo(100, 300);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "blue"
    ctx.arc(220, 130, 80, 0, 2*Math. PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(180, 170);

//    for(var x = 0; x < 10; x++) {
//        ctx.moveTo(180, 170);
        ctx.bezierCurveTo(180 /*+ x */, 350, 450, 400, 450, 170);
        ctx.lineTo(180, 170)
//    }
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fill();

}
