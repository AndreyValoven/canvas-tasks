window.onload = function () {
    let canvas = document.getElementById('second');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        /*ctx.fillStyle = 'blue';
        ctx.font = '50px Calibri' ;
        let myText = 'welcome welcome welcome welcome welcome welcome welcome welcome';
        ctx.fillText(myText, 50, 50, 500);*/

        // add image
            let img = new Image();
            let imgW = 200;
            let imgH = 100;

            img.onload = function() {
                console.log('now we can do something');
                ctx.drawImage(img, 0, 0, imgW, imgH);
                ctx.font = '50px Calibri' ;
                ctx.fillText('This is my image', 50, 50, 500);
            };

            img.src = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

        // add image from page
        /*let newImage = document.getElementById('image');
        ctx.drawImage(newImage, 0, 0);*/



    }
}
