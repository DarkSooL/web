function zar_at(){

    var zar =document.getElementById("zar1");
    var zar2=document.getElementById("zar2");
    zar3 =Math.floor( Math.random()*6 +1 );
    zar4 =Math.floor( Math.random()*6 +1);
    zar.src=""+zar4+".png";
    zar2.src=""+zar3+".png";

}