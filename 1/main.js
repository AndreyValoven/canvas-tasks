var canvas = document.querySelector('#first');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    for(let x = 0; x < 10; x++) {
        ctx.fillStyle = `rgb(${+Math.ceil(x * 20)},  0, 0)`;
        ctx.fillRect(25 + (x * 30), 25, 30, 30);
    }

    for(let x = 0; x < 10; x++) {
        ctx.fillStyle = `rgba(0, ${Math.ceil(x * 20)}, 0, ${(x + 1)/10})`;
        ctx.fillRect(25 + (x * 30), 55, 30, 30);
    }

    for(let x = 0; x < 10; x++) {
        ctx.fillStyle = `rgba(0, 0, ${Math.ceil(x * 20)}, ${(x + 1)/10})`;
        ctx.fillRect(25 + (x * 30),85, 30, 30);
    }

    for(let x = 0; x < 10; x++) {
        ctx.lineWidth = 1 + x;
        ctx.strokeStyle = `rgb(${Math.ceil(x * 20)},  0, 0)`;
        ctx.lineCap = 'squere';

        ctx.beginPath();
        ctx.moveTo(50 + (x * 20), 150);
        ctx.lineTo(50 + (x * 20), 270);
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.setLineDash([5]);
    ctx.rect(50, 300, 200, 100);
    ctx.stroke();

    var lngrade = ctx.createLinearGradient(500, 0, 300, 0);
    lngrade.addColorStop(0, 'blue');
    lngrade.addColorStop(1, 'red');

    ctx.fillStyle = lngrade;
    ctx.fillRect(300, 200, 300, 100);

    var rdgrade = ctx.createRadialGradient(400, 400, 20, 420, 420, 50);
    rdgrade.addColorStop(0, 'blue');
    rdgrade.addColorStop(1, 'red');

    ctx.fillStyle = rdgrade;
    ctx.fillRect(350, 350, 150, 400);
}
