let nav = document.getElementById("nav");
let navCenter = document.getElementById("navCenter");
let navright = document.getElementById("navRight");

window.addEventListener('scroll', () => {
    let y = document.body.scrollTop;
    if(y >= 40){
        nav.className="nav";
        navCenter.className="chunk center";
        navright.style.filter = "";
        
    }
    else{
        nav.className="nav transparent";
        navCenter.className="chunk center transparent";
        navright.style.filter = "invert(1)";
    }
  });