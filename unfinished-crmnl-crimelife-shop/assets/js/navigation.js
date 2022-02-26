


var homepage = document.getElementById("homepage")
var fraktab = document.getElementById("fraktab")
var passtab = document.getElementById("passtab")



// onload
function open(){
    homepage.style.visibility = "visible";
    homepage.style.opacity = "1";
    homepage.style.animation = "fade 1s";

    homepage.style.display = "block";
    
    
}

// navabr

function openhome(){


// close open sites
       
        fraktab.style.opacity = "0";
        fraktab.style.visibility = "hidden";
        fraktab.style.display = "none";
    
        passtab.style.opacity = "0";
        passtab.style.visibility = "hidden";
        passtab.style.display = "none";
 
 // open homepage
   homepage.style.visibility = "visible";
    homepage.style.opacity = "1";
    homepage.style.animation = "fade 1s";

    homepage.style.display = "block";
}


function openfrak(){


// close open sites
        homepage.style.opacity = "0";
        homepage.style.visibility = "hidden";
        homepage.style.display = "none";
    
        passtab.style.opacity = "0";
        passtab.style.visibility = "hidden";
        passtab.style.display = "none";
 
 // open frak
    fraktab.style.visibility = "visible";
    fraktab.style.opacity = "1";
    fraktab.style.animation = "fade 1s";

    fraktab.style.display = "block";
}

function openpass(){

    
// close open sites
        homepage.style.opacity = "0";
        homepage.style.visibility = "hidden";
        homepage.style.display = "none";
 
        fraktab.style.opacity = "0";
        fraktab.style.visibility = "hidden";
        fraktab.style.display = "none";
    
 // open pass
    passtab.style.visibility = "visible";
    passtab.style.opacity = "1";
    passtab.style.animation = "fade 1s";

    passtab.style.display = "block";

    updatepage();   
}




        






// Battlepass stuff

var counttxt = document.getElementById("counttxt")
var levels1 = document.getElementById("levels1")
var levels2 = document.getElementById("levels2")
var levels3 = document.getElementById("levels3")
var levels4 = document.getElementById("levels4")
var levels5 = document.getElementById("levels5")
var levels6 = document.getElementById("levels6")
var levels7 = document.getElementById("levels7")
var levels8 = document.getElementById("levels8")
var levels9 = document.getElementById("levels9")
var levels10 = document.getElementById("levels10")
var count = 1;

function rightbtn(){
    
 
    if (count < 10 ){

        count++;
        console.log(count)
        updatepage();            
           
    }
    
    else {

        console.log("last page reached")

        }

}

function leftbtn(){
    
 
    if (count > 1 ){

        count--;
        console.log(count)
        updatepage();            
           
    }
    
    else {

        console.log("start page reached")

        }

}

function updatepage(){

    if (count == 1 ){
        levels2.style.opacity = "0";
        levels2.style.visibility = "hidden";
        levels2.style.display = "none";
        
        levels1.style.visibility = "visible";
        levels1.style.opacity = "1";
        levels1.style.animation = "fade 1s";
        levels1.style.display = "flex";

     

        counttxt.innerHTML = "01 / 10"

    } else if (count == 2 ) {
        levels1.style.opacity = "0";
        levels1.style.visibility = "hidden";
        levels1.style.display = "none";

        levels3.style.opacity = "0";
        levels3.style.visibility = "hidden";
        levels3.style.display = "none";
        
        levels2.style.visibility = "visible";
        levels2.style.opacity = "1";
        levels2.style.animation = "fade 1s";
        levels2.style.display = "flex";



        counttxt.innerHTML = "02 / 10"

    } else if (count == 3 ) {

        
        levels2.style.opacity = "0";
        levels2.style.visibility = "hidden";
        levels2.style.display = "none";

        levels4.style.opacity = "0";
        levels4.style.visibility = "hidden";
        levels4.style.display = "none";
        
        levels3.style.visibility = "visible";
        levels3.style.opacity = "1";
        levels3.style.animation = "fade 1s";
        levels3.style.display = "flex";

        
        counttxt.innerHTML = "03 / 10"

    } else if (count == 4 ) {

               
        levels5.style.opacity = "0";
        levels5.style.visibility = "hidden";
        levels5.style.display = "none";

        levels3.style.opacity = "0";
        levels3.style.visibility = "hidden";
        levels3.style.display = "none";
        
        levels4.style.visibility = "visible";
        levels4.style.opacity = "1";
        levels4.style.animation = "fade 1s";
        levels4.style.display = "flex";
 
        
        counttxt.innerHTML = "04 / 10"

    } else if (count == 5 ) {

        levels4.style.opacity = "0";
        levels4.style.visibility = "hidden";
        levels4.style.display = "none";

        levels6.style.opacity = "0";
        levels6.style.visibility = "hidden";
        levels6.style.display = "none";
    
        levels5.style.visibility = "visible";
        levels5.style.opacity = "1";
        levels5.style.animation = "fade 1s";
        levels5.style.display = "flex";
        
        counttxt.innerHTML = "05 / 10"

    } else if (count == 6 ) {
        
        levels5.style.opacity = "0";
        levels5.style.visibility = "hidden";
        levels5.style.display = "none";

        levels7.style.opacity = "0";
        levels7.style.visibility = "hidden";
        levels7.style.display = "none";
    
        levels6.style.visibility = "visible";
        levels6.style.opacity = "1";
        levels6.style.animation = "fade 1s";
        levels6.style.display = "flex";
        
        counttxt.innerHTML = "06 / 10"

    } else if (count == 7 ) {
            
        levels6.style.opacity = "0";
        levels6.style.visibility = "hidden";
        levels6.style.display = "none";

        levels8.style.opacity = "0";
        levels8.style.visibility = "hidden";
        levels8.style.display = "none";

        levels7.style.visibility = "visible";
        levels7.style.opacity = "1";
        levels7.style.animation = "fade 1s";
        levels7.style.display = "flex";
        
        counttxt.innerHTML = "07 / 10"

    } else if (count == 8 ) {
                    
        levels7.style.opacity = "0";
        levels7.style.visibility = "hidden";
        levels7.style.display = "none";

        levels9.style.opacity = "0";
        levels9.style.visibility = "hidden";
        levels9.style.display = "none";

        levels8.style.visibility = "visible";
        levels8.style.opacity = "1";
        levels8.style.animation = "fade 1s";
        levels8.style.display = "flex";
        
        counttxt.innerHTML = "08 / 10"

    } else if (count == 9 ) {
                            
        levels8.style.opacity = "0";
        levels8.style.visibility = "hidden";
        levels8.style.display = "none";

        levels10.style.opacity = "0";
        levels10.style.visibility = "hidden";
        levels10.style.display = "none";
    
        levels9.style.visibility = "visible";
        levels9.style.opacity = "1";
        levels9.style.animation = "fade 1s";
        levels9.style.display = "flex";
        
        counttxt.innerHTML = "09 / 10"

    } else if (count == 10 ) {

        levels9.style.opacity = "0";
        levels9.style.visibility = "hidden";
        levels9.style.display = "none";
    
        levels10.style.visibility = "visible";
        levels10.style.opacity = "1";
        levels10.style.animation = "fade 1s";
        levels10.style.display = "flex";
        
        counttxt.innerHTML = "10 / 10"

    }



}