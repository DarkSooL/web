myCanvas = document.getElementById("myCanvas");
ctx = myCanvas.getContext("2d");
ctx.moveTo(10,30);
ctx.lineTo(470,30);
ctx.stroke();
ctx.font="20px Arial";
ctx.fillText("Bilp-201 ",170,28);
ctx.strokeText("Oyun",270,28);
ctx.fillStyle="#ff0000";
ctx.fillRect(10,15,15,15);
ctx.fillRect(455,15,15,15);

var arkaplanImg = new Image();
arkaplanImg.src="./res/arkaplan.png";
var yemekImg = new Image();
yemekImg.src="./res/food.png";

oyun = setInterval(ciz,250);

var kenar =32;
var yilan=[];
yilan[0]={x:7*kenar,y:8*kenar}
yilan[1]={x:8*kenar,y:8*kenar}

var yemek = {
    x: Math.floor(Math.random()*15)*kenar,
    y: Math.floor(Math.random()*15)*kenar
}

var istikamet;
document.addEventListener("keydown",yon);

function yon(event){

    if(event.keyCode == 37 && istikamet !="SAG")
    istikamet="SOL";
    else if (event.keyCode == 38 && istikamet !="ASAGI")
    istikamet="YUKARI";
    else if (event.keyCode == 39 && istikamet !="SOL")
    istikamet="SAG";
    else if (event.keyCode == 40 && istikamet !="UP")
    istikamet="ASAGI";
}

function ciz(){
    ctx.drawImage(arkaplanImg,0,30);
    
    for(i=0;i<yilan.length; i++){
         if(i ==0 )
         ctx.fillStyle="white";
         else
         ctx.fillStyle="green";
        ctx.fillRect(yilan[i].x,yilan[i].y,kenar,kenar);
    }
    ctx.drawImage(yemekImg,yemek.x,yemek.y);

    x0=yilan[0].x;
    y0=yilan[0].y;

    if(istikamet == "SOL")
    x0-=kenar;
    if(istikamet == "ASAGI")
    y0+=kenar;
    if(istikamet == "SAG")
    x0+=kenar;
    if(istikamet == "YUKARI")
    y0-=kenar;

    var yeniBas={x:x0, y:y0};
    yilan.unshift(yeniBas);


    if(yeniBas.x==yemek.x && yeniBas.y==yemek.y){
        yemek={
            x: Math.floor(Math.random()*15)*kenar,
            y: Math.floor(Math.random()*15)*kenar
        }
    } else
        yilan.pop();

    if(yeniBas.x<0 || yeniBas.x>14*kenar || yeniBas.y<0 || yeniBas.y>14*kenar)
    clearInterval(oyun);
}