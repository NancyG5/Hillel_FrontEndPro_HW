function myBody(e) {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Координаты: X: " + x + "; Y: "+ y;
    document.getElementById('p1').innerHTML = coor;
}

function myFunc(e) {
    e.preventDefault();
    e.stopPropagation();
    let x = e.offsetX;
    let y = e.offsetY;
    let coor1 = "Координаты: X : " + x + "; Y : " + y;
    document.getElementById('p2').innerHTML = coor1;
}