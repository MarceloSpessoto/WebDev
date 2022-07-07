async function getInfo(){
    event.preventDefault();
    const ans = document.getElementById("Answer").value;
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/"+ans);
    if(data.ok){
        const jsn = await data.json();
        console.log(jsn);
        document.getElementById("Name").innerHTML = "Nome: " + jsn["name"];   
        document.getElementById("Number").innerHTML = "ID: " + jsn["id"];
        document.getElementById("Type").innerHTML = "Tipo 1: " + jsn["types"][0]["type"]["name"];
        if(Object.keys(jsn["types"]).length == 2){document.getElementById("Type2").innerHTML = "Tipo 2: " + jsn["types"][1]["type"]["name"];}
        else {document.getElementById("Type2").innerHTML = "Tipo 2: -";}
        document.getElementById("pokeimg").style.display = "block";
        document.getElementById("pokeimg").src = jsn["sprites"]["front_default"];
        document.getElementById("pokeshiny").style.display = "block";
        document.getElementById("pokeshiny").src = jsn["sprites"]["front_shiny"];
    } else { alert("Erro"); }
}