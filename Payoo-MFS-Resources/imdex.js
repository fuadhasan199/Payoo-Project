document.getElementById("login").addEventListener("click",function(e){
      e.preventDefault();
     const mobileNumber=123456789101 
     const pinNumber=1234 

     const mobileNumberValue=document.getElementById("mobile-number").value 

     const mobileNumberConverted=parseInt(mobileNumberValue) 

     const pinNumberValue=document.getElementById("pin-number").value 

     const pinNumberConverted=parseInt(pinNumberValue) 
     
     if(mobileNumberConverted===mobileNumber && pinNumberConverted===pinNumber){
        window.location.href="./home.html"
     }
 else{
    console.log('not match , please try again');
 }





})