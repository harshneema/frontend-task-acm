document.getElementById("verticalmenu").style.display = "none";
document.getElementById("closetoggle").style.display = "none";

function verticalnav(){
    document.getElementById("verticalmenu").style.display = "flex";
    document.getElementById("navtoggle").style.display = "none";
    document.getElementById("closetoggle").style.display = "block";
}

function closenav(){
    document.getElementById("verticalmenu").style.display = "none";
    document.getElementById("navtoggle").style.display = "block";
    document.getElementById("closetoggle").style.display = "none";
}



document.getElementById("commentinput").style.display = "none";

     function show() {
         var x = document.getElementById("commentinput");
         var y = document.getElementById("comment") ;
         if (x.style.display == "none") {
    x.style.display = "block"; 
    y.style.display = "none";
    document.getElementById("submit").style.display = "block";
  }       
}

function discmt() {
    var x = document.getElementById("commentinput").value ;
    document.getElementById("reply").style.display = "flex";
    document.getElementById("submit").style.display = "none";
    document.getElementById("commentinput").style.display = "none";
    document.getElementById("com").innerHTML = x ;
    console.log(x); 
}

document.getElementById("commentinput").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  
       discmt();
    }
});

document.getElementById("commentinput1").style.display = "none";

     function show1() {
         var x = document.getElementById("commentinput1");
         var y = document.getElementById("comment1");
         if (x.style.display == "none") {
    x.style.display = "block"; 
    y.style.display = "none";
    document.getElementById("submit1").style.display = "block";
  }       
}

function discmt1() {
    var x = document.getElementById("commentinput1").value ;
    document.getElementById("reply1").style.display = "flex";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("commentinput1").style.display = "none";
    document.getElementById("com1").innerHTML = x ;
    console.log(x);   
}

document.getElementById("commentinput1").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  
       discmt1();
    }
});

document.getElementById("commentinput2").style.display = "none";
     function show2() {
         var x = document.getElementById("commentinput2");
         var y = document.getElementById("comment2");
         if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none"; 
    document.getElementById("submit2").style.display = "block";
  }       
}

function discmt2() {
    var x = document.getElementById("commentinput2").value ;
    document.getElementById("reply2").style.display = "flex";
    document.getElementById("submit2").style.display = "none";
    document.getElementById("commentinput2").style.display = "none";
    document.getElementById("com2").innerHTML = x ;
    console.log(x);
    var y = document.getElementById("c")  
}

document.getElementById("commentinput2").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  
       discmt2();
    }
});

