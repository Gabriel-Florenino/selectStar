function addStar(id){
    let text = document.getElementById("text")
    text.innerHTML = `You selected ${id} out of 5`
}
function active(id){
    let but = document.getElementById(`${id}`);
    but.style.backgroundColor="hsl(217, 12%, 63%)";
    but.style.color="white" ;
}
function remove(id){
    let but = document.getElementById(`${id}`);
    but.style.backgroundColor="hsl(220, 9%, 25%)"
    but.style.color="hsl(217, 12%, 63%)" 
    
}
function submit(){
    if (1 > 0) {
        let sec = document.getElementById("avaliation")
        let sec2 = document.getElementById("thankYou")
        sec.style.visibility="hidden"
        sec2.style.visibility="visible"
    }
}
let x = 0;  
function getValue(star) {
    if (x != 0) {
        remove(x);
    }
    active(star)
    addStar(star)
   x = star;
}
