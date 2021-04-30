function num(a){
    document.getElementById("box").value +=a
}

function equal(){
    var ans =document.getElementById("box")
    ans.value= eval(ans.value)
}

function del(){
    document.getElementById("box").value = " "
}
