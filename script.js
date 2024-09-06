
let imgcox = document.getElementById("imgbox")
let  qrimage = document.getElementById("qrimage")
let  qrtext = document.getElementById("qrtext")


function genrateqr(){

    if(qrtext.value.length > 0)
    {
        qrimage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="  +  qrtext.value;
        imgcox.classList.add("show-img");
    }else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000)
    }
 

}