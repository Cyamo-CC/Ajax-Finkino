const xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://www.finnkino.fi/xml/TheatreAreas/");
xhttp.send();
xhttp.onreadystatechange = function() {
    if(xhttp.readyState==4 && xhttp.status==200){
        var XMLDocument =xhttp.responseXML;
      //console.log(XMLDocument);
     var näyttämö = XMLDocument.getElementsByTagName("Name");
     //console.log(näyttämö);   
     var info = "<table>";
      //console.log(info);
     for( let i=2; i<näyttämö.length; i++){
        info += `<tr>`
        info+= `<td class="teatterit">`+ näyttämö[i].innerHTML + `</td>`;
        //console.log(info);
        info += `</tr>`
        }

     info+=`</table>`
     document.getElementById("listaus").innerHTML = info;
    }}
const getAjat = new XMLHttpRequest();
getAjat.open("GET", "https://www.finnkino.fi/xml/Schedule/");
getAjat.send();
getAjat.onreadystatechange = function (){
    if(getAjat.readyState==4 && getAjat.status==200){
        var XMLDocument = getAjat.responseXML;
      
        //console.log(XMLDocument);
        var näytös = XMLDocument.getElementsByTagName("Title");
        //console.log(näytös);
        var kuva =XMLDocument.getElementsByTagName("EventMediumImagePortrait");
        //console.log(kuva);
        var TNim = XMLDocument.querySelectorAll("Theatre");
        //console.log(TNim);
        var teatterit = document.querySelectorAll("td");
        //console.log(teatterit);
        for(let x=0; x<teatterit.length; x++){
            teatterit[x].addEventListener("click", function() {määritäTeatteri(x)});
            
        }
        function määritäTeatteri(x){
             
        
              var Olist = XMLDocument.querySelectorAll("Show");
              //console.log(Olist);
             var elokuva = XMLDocument.getElementsByTagName("Title");
             //console.log(elokuva);
             var kuva =XMLDocument.getElementsByTagName("EventMediumImagePortrait");
                //console.log(kuva);
            
                    var y= "";
                    
             switch (teatterit[x].innerHTML){
                case "Espoo":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi == "Espoo"){
                                        
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                        
                                }         
                        }
                    break;

                case "Espoo: OMENA":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Omena, Espoo"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        console.log(y);
                                        inCase(y);
                                        {break;}
                                }         
                        }
                    break;

                case "Espoo: SELLO":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Sello, Espoo"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                
                                        inCase(y);
                                        {break;}
                                }         
                        }
                    break;

                case "Helsinki":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Helsinki"){
                                       // console.log(Nimi);
                                        console.log(n);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        console.log(y);
                                        inCase(y);
                                        {break;}
                                }         
                        }
                    break;
                case "Helsinki: ITIS":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Itis, Helsinki"){
                                       // console.log(Nimi);
                                        
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                       break;
                case "Helsinki: KINOPALATSI":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Kinopalatsi, Helsinki"){
                                       // console.log(Nimi);
                                
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                       break;
                case "Helsinki: MAXIM":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Maxim, Helsinki"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        inCase(y);
                                        {break;}
                                }         
                        }
                       break;
                case "Helsinki: TENNISPALATSI":

                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Tennispalatsi, Helsinki"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                
                                        inCase(y);
                                        {break;}
                                }         
                        }
                       break;
                case "Vantaa: FLAMINGO":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Flamingo, Vantaa"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                
                                        inCase(y);
                                        {break;}
                                }         
                        }
                       break;
                case "Jyväskylä: FANTASIA":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Fantasia, Jyväskylä"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                case "Kuopio: SCALA":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Scala, Kuopio"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                case "Lahti: KUVAPALATSI":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Kuvapalatsi, Lahti"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                case "Lappeenranta: STRAND":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Strand, Lappeenranta"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
            
                case "Oulu: PLAZA":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Plaza, Oulu"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                case "Pori: PROMENADI":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Promenadi, Pori"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                case "Tampere":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Tampere"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                 case "Tampere: CINE ATLAS":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Cine atlas, Tampere"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                case "Tampere: PLEVNA":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Plevna, Tampere"){
                                       // console.log(Nimi);
                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                case "Turku: KINOPALATSI":
                        for(let n=0; n<TNim.length; n++){
                                var Nimi = TNim[n].innerHTML;
                                //console.log(Nimi);
                                if(Nimi === "Kinopalatsi, Turku"){
                                       // console.log(Nimi);

                                        var Nnimi=Olist[n].getElementsByTagName("TheatreID");
                                        y = Nnimi[0].innerHTML;
                                
                                        inCase(y);
                                        {break;}
                                }         
                        }
                        break;
                default:
                     console.log("huti");
            }

            
            function inCase(y){
                //console.log(XMLDocument);
                
                
                var uusiL = [];
                for(let x=0; x<Olist.length; x++){
                        var lapsi = Olist[x].querySelector("TheatreID").innerHTML;
                        //console.log(lapsi);
                        //console.log(y);
                        
                        if(lapsi == y){
                                uusiL.push(Olist[x]);

                        }
                }
                     console.log(uusiL);   
                    var info = "<table>";
                    //console.log(info);
                   for( let i=0; i<uusiL.length; i++){
                      info += `<tr class="elokuva">`
                      info+= `<td><img class="kuvat" src="`+ kuva[i].innerHTML + `"></td>`;
                      info+=  `<td><h3 class="kuvaus">`+elokuva[i].innerHTML + `</h3> </td>`;
                      //console.log(info);
                      info += `</tr>`
                      }
                   info+=`</table>`
                    document.getElementById("Etiedot").innerHTML=info; 
                 
            }
            
        } 
        }
}

 function showDrop(){
    document.getElementById('dropContent').style.display="block";
} 
