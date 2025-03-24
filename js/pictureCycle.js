setTimeout(pictureCycle1, 10000)
function pictureCycle1(){
    let images = document.querySelector("img");
    let foot = document.querySelector("footer p");
    foot.innerHTML = "Image of Solar Panels <br>Artist:Jeyaratnam Caniceus<br>Source: <a id=\"link\">Pixabay</a>"
    let link = document.querySelector("#link");
    link.href = "https://pixabay.com/photos/photovoltaic-solar-energy-6239423/";
    images.src = "imgs/solarPanels.jpg";
    setTimeout(pictureCycle2, 10000);
}

function pictureCycle2(){
    let images = document.querySelector("img");
    let foot = document.querySelector("footer p");
    foot.innerHTML = "Image of Powerplant at Switzerland<br>Artist:Daniele La Rosa Messina<br>Source: <a id=\"link\">Pexels</a>";
    let link = document.querySelector("#link");
    link.href = "https://www.pexels.com/photo/power-plant-near-the-grass-field-12982726/";
    images.src = "imgs/pexels-daniele-la-rosa-messina-1626789-12982726.jpg";
    setTimeout(pictureCycle1, 10000);
}