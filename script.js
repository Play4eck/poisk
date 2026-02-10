function poi(){
    let kart = document.querySelectorAll(".cart")
    let fio=document.querySelectorAll(".text")
    let find=document.querySelector(".poisk").value.toUpperCase()
    for(i=0;i<fio.length;i++){
        if(fio[i].innerHTML.toUpperCase().indexOf(find)>-1){
            kart[i].style.display="flex"
        }
        else{
            kart[i].style.display="none"
        }
    }
}

function gor(){
    let kart = document.querySelectorAll(".cart")
    let sity=document.querySelectorAll(".city")
    let fond=document.querySelector(".gorod").value.toUpperCase()
    for(i=0;i<sity.length;i++){
        if(sity[i].innerHTML.toUpperCase().indexOf(fond)>-1){
            kart[i].style.display="flex"
        }
        else{
            kart[i].style.display="none"
        }
    }
}