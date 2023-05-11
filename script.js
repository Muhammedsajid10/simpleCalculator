function buttonClick(val){
    document.getElementById('calc-screen').value= document.getElementById('calc-screen').value+val;
    
}
function clearDisplay(){
    document.getElementById('calc-screen').value=""
}
function equalClick(){
    var text=document.getElementById('calc-screen').value
    var result=eval(text)
    document.getElementById('calc-screen').value=result
}
 
