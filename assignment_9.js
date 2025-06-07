let nameEl=document.getElementById("name");
let emailEl=document.getElementById("email");
let websiteEl=document.getElementById("website");
let messageEl=document.getElementById("message");
let nameParaEl=document.getElementById("namePara");
let emailParaEl=document.getElementById("emailPara");
let websiteParaEl=document.getElementById("websitePara");
let messageParaEl=document.getElementById("messagePara");
        nameEl.addEventListener("blur",function(){
            if(nameEl.value===""){
                nameParaEl.textContent="This field is required";
                nameParaEl.style.color="red";
                nameParaEl.style.fontSize="14px";
            }
            else{
                nameParaEl.textContent="";
            }
        });
        emailEl.addEventListener("blur",function(){
            if(emailEl.value===""){
                emailParaEl.textContent="This field is required";
                emailParaEl.style.color="red";
                emailParaEl.style.fontSize="14px";
            }
            else{
                emailParaEl.textContent="";
            }
        });
        websiteEl.addEventListener("blur",function(){
            if(websiteEl.value===""){
                websiteParaEl.textContent="This field is required";
                websiteParaEl.style.color="red";
                websiteParaEl.style.fontSize="14px";
            }
            else{
                websiteParaEl.textContent="";
            }
        });
        messageEl.addEventListener("blur",function(){
            if(messageEl.value===""){
                messageParaEl.textContent="This field is required";
                messageParaEl.style.color="red";
                messageParaEl.style.fontSize="14px";
            }
            else{
                messageParaEl.textContent="";
            }
        });