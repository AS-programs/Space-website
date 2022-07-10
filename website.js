function calculatedeltav(){
let exhaustvelocity = document.getElementById('vevalue').value;
let wetmass = document.getElementById('wetmassvalue').value;
let drymass = document.getElementById('drymassvalue').value;

let x = wetmass/drymass;
let y = Math.log(x);
deltav=exhaustvelocity*y;
document.getElementById('writehere').innerHTML=deltav;

} 