document.getElementById("cmtin").style.display = "none";
     function show() {
         var x = document.getElementById("cmtin");
         if (x.style.display == "none") {
    x.style.display = "block"; 
  }       
}

function discmt() {
    var x = document.getElementById("cmtin").value ;
    document.getElementById("com").innerHTML = x ;
    console.log(x);
    
}

document.getElementById("cmtin").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  
       discmt();
    }
});





document.getElementById("cmtin1").style.display = "none";
     function show1() {
         var x = document.getElementById("cmtin1");
         if (x.style.display == "none") {
    x.style.display = "block"; 
  }       
}

function discmt1() {
    var x = document.getElementById("cmtin1").value ;
    document.getElementById("com1").innerHTML = x ;
    console.log(x);
    
}

document.getElementById("cmtin1").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  
       discmt1();
    }
});

document.getElementById("cmtin2").style.display = "none";
     function show2() {
         var x = document.getElementById("cmtin2");
         if (x.style.display == "none") {
    x.style.display = "block"; 
  }       
}

function discmt2() {
    var x = document.getElementById("cmtin2").value ;
    document.getElementById("com2").innerHTML = x ;
    console.log(x);
    
}

document.getElementById("cmtin2").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  
       discmt2();
    }
});

