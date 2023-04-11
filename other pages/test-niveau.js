let points = 0;
function action() {
    if (document.getElementById("uno").checked) {
        points += 1; 
    }
    if (document.getElementById("siete").checked) {
        points++; 
    }
    if (document.getElementById("diez").checked) {
        points++; 
    }
    if (document.getElementById("dieciseis").checked) {
        points++; 
    }
    if (document.getElementById("diecinueve").checked) {
        points++; 
    }
    if (document.getElementById("veintiuno").checked) {
        points++; 
    }
    if (document.getElementById("veintiseis").checked) {
        points++; 
    }
    if (document.getElementById("treintaydos").checked) {
        points++; 
    }
    if (document.getElementById("treintaycinco").checked) {
        points++; 
    }
    if (document.getElementById("treintayocho").checked) {
        points++; 
    }
    if (document.getElementById("cuarentaytres").checked) {
        points++; 
    }
    if (document.getElementById("cuarentaycinco").checked) {
        points++; 
    }
    if (document.getElementById("cincuentaydos").checked) {
        points++; 
    }
    if (document.getElementById("cincuentaycuatro").checked) {
        points++; 
    }
    if (document.getElementById("cincuentasiete").checked) {
        points++; 
    }
    if (document.getElementById("sesentaycuatro").checked) {
        points++; 
    }
    if (document.getElementById("sesentayseis").checked) {
        points++; 
    }
    if (document.getElementById("setentayuno").checked) {
        points++; 
    }
    if (document.getElementById("setentaytres").checked) {
        points++; 
    }
    if (document.getElementById("ochenta").checked) {
        points++; 
    }
    if (document.getElementById("ochentaycuatro").checked) {
        points++; 
    }
    if (document.getElementById("ochentaysiete").checked) {
        points++; 
    }
    if (document.getElementById("noventaydos").checked) {
        points++; 
    }
    if (document.getElementById("noventaytres").checked) {
        points++; 
    }
    if (document.getElementById("cien").checked) {
        points++; 
    }
    
    document.getElementById("puntos").innerText = points;
    document.getElementById("puntos222").innerText = points;
    document.getElementById("img-fons").style.display = "block";
    if (points >= 10) {
        document.getElementById("points1").style.display = "block";
    } else if (points < 10) {
        document.getElementById("points2").style.display = "block";
    }
}
