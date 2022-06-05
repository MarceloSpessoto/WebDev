let dark = false;

function darkMode(){
    let b = document.getElementsByTagName("button")[0];
    let back = document.getElementsByTagName("body")[0];
    let l = document.getElementById("Lateral");
    let s = document.getElementsByClassName("Setor");
    let bola = document.getElementById("Bola");
    let h = document.getElementsByTagName("h4")[0];
    if(!dark){
        b.style.color = "black";
        b.style.background = "rgb(201, 201, 20)";
        b.innerHTML = "Light Mode";
        back.style.background = "black";
        l.style.background = "rgb(0, 0, 0)";
        bola.style.background = "radial-gradient(circle at 50px 50px, green, #000)";
        h.style.background = "rgb(80, 23, 150)";
        for(let i = 0; i < s.length; i++){
            s[i].style.color = "white";
            s[i].style.background = "rgb(64, 23, 113)";
        }
        dark = true;
    } else {
        b.style.color = "white";
        b.style.background = "rgb(128, 23, 226)";
        b.innerHTML = "Dark Mode";
        back.style.background = "white";
        bola.style.background = "radial-gradient(circle at 50px 50px, red, #000)";
        l.style.background = "rgb(248, 248, 248)";
        h.style.background = "rgb(230, 230, 230)";
        for(let i = 0; i < s.length; i++){
            s[i].style.color = "black";
            s[i].style.background = "rgb(248, 248, 248)";
        }
        dark = false;
    }
}