let water = document.querySelector("#waterFilled");
let reuseableBags = document.querySelector("#reusableBags");
let distanceElec = document.querySelector("#distanceDrivenElectric");
let distancePublic = document.querySelector("#distanceTravelledPublic");
let form = document.querySelector("#Tracker");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let lastTracked = document.querySelector("#lastTracked");
    lastTracked.children[0].innerHTML = "Last Tracked";
    lastTracked.children[1].replaceChildren();
    if (water.value > 0){
        let listCreator = document.createElement("li");
        let text = document.createTextNode("Water (mL) filled into reusable bottles: " + water.value);
        listCreator.appendChild(text);
        lastTracked.children[1].appendChild(listCreator);
    }
    if (reuseableBags.value > 0){
        let listCreator = document.createElement("li");
        let text = document.createTextNode("# of times a Reusable Bag was used when shopping: " + reuseableBags.value);
        listCreator.appendChild(text);
        lastTracked.children[1].appendChild(listCreator);
    }
    if (distanceElec.value > 0){
        let listCreator = document.createElement("li");
        let text = document.createTextNode("Kilometers driven on an electric car: " + distanceElec.value);
        listCreator.appendChild(text);
        lastTracked.children[1].appendChild(listCreator);
    }
    if (distancePublic.value > 0){
        let listCreator = document.createElement("li");
        let text = document.createTextNode("Kilometers travelled on public transit: " + distancePublic.value);
        listCreator.appendChild(text);
        lastTracked.children[1].appendChild(listCreator);
    }
})