const hourEL = document.getElementById("hour");
const minEL = document.getElementById("min");
const secEL = document.getElementById("sec");
const amEL = document.getElementById("ampm");
function updateClock(){
    let h = new  Date().getHours(); 
    let m = new Date().getMinutes(); 
    let s = new Date().getSeconds();
    let ampm = "AM"; 
    if ( h > 12){
        h = h-12 ; 
        ampm = "PM"
    }
    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s; 

    hourEL.innerText= h ; 
    minEL.innerText=m;
    secEL.innerText=s; 
    ampm.innerText=ampm;
    setTimeout(() =>{
        updateClock()
    },1000)

}
updateClock();