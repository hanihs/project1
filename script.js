const result=document.getElementById("inp");
function numberkey(v){
result.value+=v;
}
function cls(){
result.value="";
}
function exe(){
result.value=eval(result.value);
}
function cancel(){
result.value=result.value.substr(0,result.value.length-1);
}