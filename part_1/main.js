var canvas = document.querySelector('#first');
if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "blue"
    ctx.rect(100,   50, 200, 200);

    ctx.shadowBlur = 30;
    ctx.shadowColor = '#000';

    ctx.shadowOffsetX = 30;
    ctx.shadowOffsetY = 30;


    ctx.fill();

}
