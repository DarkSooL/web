function secilen(item) {
    document.getElementById('oyuncu').src = `./res/${item}.png`

    var pictures = new Array("./res/1.png", "./res/2.png", "./res/3.png");
    var randomNum = Math.floor(Math.random() * pictures.length);
    document.getElementById("rakip").src = pictures[randomNum];

    var rakipSecim = randomNum;
    var sonuc = document.getElementById('resultText');

    if (item == '1' && rakipSecim == 0) {
        sonuc.innerHTML = "Berabere"
    }
    else if (item == '2' && rakipSecim == 1) {
        sonuc.innerHTML = "Berabere"
    }
    else if (item == '3' && rakipSecim == 2) {
        sonuc.innerHTML = "Berabere"
    }
    else if (item == '1' && rakipSecim == 1) {
        sonuc.innerHTML = "Kaybettiniz"
    }
    else if (item == '1' && rakipSecim == 2) {
        sonuc.innerHTML = "Kazandınız"
    }
    else if (item == '2' && rakipSecim == 0) {
        sonuc.innerHTML = "Kazandınız"
    }
    else if (item == '2' && rakipSecim == 2) {
        sonuc.innerHTML = "Kaybettiniz"
    }
    else if (item == '3' && rakipSecim == 0) {
        sonuc.innerHTML = "Kaybettiniz"
    }
    else if (item == '3' && rakipSecim == 1) {
        sonuc.innerHTML = "Kazandınız"
    }
    
}