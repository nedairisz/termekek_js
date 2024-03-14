import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
function letrehozTablazat() {
    const tablazat=document.getElementById("feladat_1")
    let table = "<table>";
        for (let i = 0; i < GYUMOLCSOK.length; i++) {
            let sorok = "<tr>"
            for (const key in GYUMOLCSOK[i]) {
                sorok+= `<td>${GYUMOLCSOK[i][key]} </td>`
            }
            sorok+="</tr>";  
            table+=sorok
        }
    table +="</table>"
    tablazat.innerHTML=table
}
letrehozTablazat()


// 2. feladat
function osszesit() {
    const ossz=document.getElementById("feladat_2")
    let suly= 0;
    for (const key in GYUMOLCSOK[i]) {

        suly+= GYUMOLCSOK[i].tomeg
    }
    ossz.innerHTML=`<p>A gyümölcsök súly összesen: ${suly} </p>`
    let ar=`<p></p>`
}
osszesit()

// 3. feladat
function vasarol(zoldseg) {

}

// 4. feladat
function torolEsemeny() {

}