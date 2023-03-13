// const Yunuslar = (120 + 100 + 91) /3;
// const Koalalar = (122 + 100 + 89.1) /3;
// console.log(Yunuslar, Koalalar);

// if(Yunuslar > Koalalar && Yunuslar>=100){
//     console.log("Yunuslar Kazandı");
// }
// else if(Koalalar> Yunuslar && Koalalar>=100){
//     console.log("Koalalar Kazandı");
// }
// else if(Koalalar === Yunuslar && Yunuslar>=100 && Koalalar>=100){
//     console.log("Berabere");
// }
// else{
//     console.log("Kazanan Yok");
// }

// const day = "thursday";

// if(day==="wednesday" || day==="thursday"){
//     console.log("Write code examples");
// }

// let age = 17;
// console.log(`l like ${age>= 18 ?  'wine': 'water'}`);

// const Tutar = 200;

// if(Tutar>=50 && Tutar<=300){
//     let Bahsis = (Tutar*20)/100;
//     let toplam = Bahsis + Tutar;
//     console.log(`Bahşiş Tutarı ${Bahsis} Toplam Tutar : ${toplam}`);
// }
// else if(Tutar>=300 && Tutar<=500){
//     let Bahsis = (Tutar*30)/100;
//     let toplam = Bahsis + Tutar;
//     console.log(`Bahşiş Tutarı ${Bahsis} Toplam Tutar : ${toplam}`);
// }

// const İnput = document.getElementById("input");
// const Btn = document.getElementById("Btn");
// const TextP = document.getElementById("TextP");
// let İnputDeger;

// İnput.addEventListener("keyup", ()=>{
//     İnputDeger = İnput.value;
// });

// Btn.addEventListener("click", ()=>{
//     TextP.style.display = "block";
//     TextP.innerHTML = İnputDeger;
// });

const Ul = document.getElementById("ul-li");
const Div = document.getElementById("div");
const Bars = document.getElementById("bars");
const BarsBack = document.getElementById("bars-click");
const H2 = document.getElementById("h2");

Bars.addEventListener("click", ()=>{
    Div.style.display = "block";
    Ul.style.display = "block";
    Bars.style.display = "none";
    BarsBack.style.display = "block";
    H2.style.display = "none";
});

BarsBack.addEventListener("click", ()=>{
    Div.style.display = "none";
    Ul.style.display = "none";
    Bars.style.display = "block";
    BarsBack.style.display = "none";
    H2.style.display = "block";
});