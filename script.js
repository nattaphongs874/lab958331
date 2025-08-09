function viewContact()
{
    const btn = document.getElementById("contactBtn");
    btn.addEventListener("click", function() {
            
        alert("Contact info : Dezydraw@gmail.com");
            
    });
       
}

function moreInfo ()
{
    const btn = document.getElementById("downloadBtn");
    btn.addEventListener("click", function(){
        const link = document.createElement("a");
        link.href = "CV Resume.pdf"; 
        link.download = "NS CV Resume.pdf"; 
        link.click();
    })
}