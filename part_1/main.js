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
        ctx.fillStyle = `rgba( ${Math.ceil(x * 20)}, 0, 0, ${(x + 1)/10})`;
        ctx.fillRect(25 + (x * 30),115, 30, 30);
    }
}
