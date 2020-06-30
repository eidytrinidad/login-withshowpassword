$(function () {
    
    const showBtn= document.querySelector(".showBtn");
    const pass = document.querySelector("#pass")
    const email=document.querySelector("#email");
    const form=document.querySelector("form");
    const showIcon=document.querySelector("#showIcon")
 
 
 showBtn.addEventListener("click",function(){
 
    switch (pass.type) {
        case "password":
            pass.type="text"
            showIcon.removeClassList="fas fa-eye"
            showIcon.classList="fas fa-eye-slash"
            break;
        case "text":
             pass.type="password"
             showIcon.removeClassList="fas fa-eye-slash"
             showIcon.classList="fas fa-eye"
            break;
        default:
            break;
    }
    
})

 
  
    form.addEventListener("submit",function(e){
    e.preventDefault();
    alert(email.value +" "+pass.value)
    
    })
    

})

