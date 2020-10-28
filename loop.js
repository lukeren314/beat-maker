
let lastRender = 0;

function loop(timestamp) {
    let progress = timestamp - lastRender;

    update(progress);
    draw();

    lastRender = timestamp;
    window.requestAnimationFrame(loop);
}

window.onload = function(){
    setup();
    window.requestAnimationFrame(loop);
}