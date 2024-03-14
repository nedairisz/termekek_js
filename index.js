import { GYUMOLCSOK } from "./adatok.js";


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


/* // 2. feladat
function osszesitTomeg() {
    const ossz=document.getElementById("feladat_2")
    let suly= 0;
    for (let i = 0; i < GYUMOLCSOK.length; i++) { 
        suly+= GYUMOLCSOK[i].tomeg
    }   
    ossz.innerHTML=`<p>A gyümölcsök súlya összesen: ${suly}Kg.</p>`
}
osszesitTomeg()

function osszesitAr(){
    const ossz=document.getElementById("feladat_2")
    let ar= 0;
    for (let i = 0; i < GYUMOLCSOK.length; i++) { 
        ar+= GYUMOLCSOK[i].ar
    }   
    ossz.innerHTML +=`<p>A gyümölcsök ára összesen: ${ar}Ft.</p>`

}
osszesitAr() */

function osszesit(kulcs){ 
    let ossz= 0;
    for (let i = 0; i < GYUMOLCSOK.length; i++) { 
        ossz+= GYUMOLCSOK[i][kulcs]
    }   
    return ossz
}
const ossz=document.getElementById("feladat_2")
ossz.innerHTML +=`<p>A gyümölcsök ára összesen: ${osszesit("ar")}Ft.</p>`
ossz.innerHTML +=`<p>A gyümölcsök súlya összesen: ${osszesit("tomeg")}Kg.</p>`

const vasarolt = [];
// 3. feladat
function vasarol() {
    // <!-- Ha a feladat_1-ben lévő táblázat egyik elemére kattintunk -->
    const termekTr=document.querySelectorAll("#feladat_1 tr")
    
    for (let index = 0; index < termekTr.length; index++) {
        termekTr[index].addEventListener("click", function(){

            //console.log(GYUMOLCSOK[index].nev)

            //<!-- Az aktuális elem neve jelenjen meg a  feladat_3 elemben -->
            const megvettElemek=document.querySelector("#feladat_3")
            //megvettElemek.innerHTML+=`${GYUMOLCSOK[index].nev}, `

            //<!-- Egy elemet csak egyszer tudjunk beletenni a megvásárolt listába -->
            if (vasarolt.indexOf(GYUMOLCSOK[index].nev)=== -1){
                vasarolt.push(GYUMOLCSOK[index].nev)
            }
            console.log(vasarolt)
            megvettElemek.innerHTML=vasarolt.join(", ")
        })
        
    }
    
    
    // <!-- A megvásárolt termékeket a vasarolt []-ben tárold el és ez alapján jelenítsd meg az elemek nevét -->
}
vasarol()

// 4. feladat
function torolEsemeny() {
    const gomb=document.querySelector("#feladat_4")
    gomb.innerHTML=`<button>Törlés</button>`
    gomb.addEventListener("click", function(){
        const megvettElemek=document.querySelector("#feladat_3")
        megvettElemek.innerHTML= ""
        vasarolt.splice(0)
        const torlesClass=document.querySelector("#torles")
        torlesClass.remove(".hide")
    })
}
torolEsemeny()