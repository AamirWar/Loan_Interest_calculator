//Getting button Obj
const b = document.getElementById("bt")

//Attach Event
b.addEventListener("click", compute);
    // <or> b.onclick=compute;

//function Definition
function compute(){
        /*
        -> Declaring vars
            let p,t,r,si,tamt; //Locaal Vars

        -> Data Call
            p = +pamt.value;
            r = +roi.value;
            t = +time.value;
    
        -> calc's
            si = p * t * r / 100;
            tamt = p + si;
        */

    let pamt = Number(document.getElementById("pamt").value);
    let roi = Number(document.getElementById("roi").value);
    let time = Number(document.getElementById("time").value);
    let si;
    let tamt;

    si = (pamt * roi * time) / 100;
    tamt = pamt + si;
    
    //displaying outputs
    document.getElementById("op").innerHTML=
    `<div class="output">
    <p class="interest">Interest Amount &#8377;${si}</p> 
    <p class="total">Total Amount &#8377;${tamt}</p>
    </div>`;
}