async function  getalldata(){
    try{
        var restcountries = await fetch("https://restcountries.com/v2/all")
        var rest = await restcountries.json();
        console.log(rest)
        
        rest.forEach(element => {
            var card = document.createElement("div")
            //card.style.width ="3%"
            card.style.backgroundColor ="Aquamarine"
            card.style.marginBottom = "5px"
            card.style.marginRight = "5px"
            card.style.width = "32%";
            card.style.display ="flex";
        card.style.flexDirection ="row";
        card.style.flexWrap = "wrap";
       
            card.innerText = element.name
            var box = document.createElement("img")
            box.setAttribute("src",  element.flags.png)
            card.appendChild(box)
            var place = document.createElement("div")
            place.innerText =element.name.common;
            box.appendChild(place)
            
            
            document.getElementById("time").appendChild(card)
            
        });
    } catch (error) {
        console.log(error)
    }
}
    
getalldata()