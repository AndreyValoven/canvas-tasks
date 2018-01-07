let canvas = document.getElementById('second');
if(canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.font = '50px Calibri' ;
    let myText = 'welcome welcome welcome welcome welcome welcome welcome welcome';
    ctx.fillText(myText, 50, 50, 500);
}
