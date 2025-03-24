let solarCalc = document.querySelector("#solarCalc");
let test1 = document.querySelector("#Test1");
let test2 = document.querySelector("#Test2");
solarCalc.addEventListener("submit", function(event){
    event.preventDefault();
    let savingsSQFT = 5.66; // Forbes estimated that you can save up to $1,500 each year using a 6KW solar setup, and SolarReviews stated that a 6KW setup could take up 265 sqft, so 1500/265 = 5.66
    let solarSQFT = document.querySelector("#solarSQFT");
    let solarCost = document.querySelector("#solarCost");
    let yearlySavings = savingsSQFT * solarSQFT.value;
    let roi = solarCost.value / yearlySavings;
    window.alert("It will take " + roi + " years to earn your money back!");
})
