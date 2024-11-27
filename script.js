function show(){
    document.getElementById("searchbox").style.height="100vh";
    document.getElementById("searchbox").style.width="100vw";
}
function hide(){
    document.getElementById("searchbox").style.height="0";
    document.getElementById("searchbox").style.width="0";
}
function opensms(){
    document.getElementById("smsbox").style.display="block";
    document.getElementById("sms").style.display="none";
}
function wrong(){
    document.getElementById("smsbox").style.display="none";
    document.getElementById("sms").style.display="block";
}