var canvas = document.querySelector('#first');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(250,200,100,100);
    ctx.fillStyle = "#fff";
    ctx.fillRect(50, 50, 100, 150);
    ctx.fillRect(450, 50, 100, 150);
    ctx.clearRect(60, 60, 80, 130);
}
