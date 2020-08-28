let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');

let comecar = document.getElementById('comecar');

let display = document.getElementById('display');

let minutoAtual;
let segundoAtual;

let interval;

for(var i = 0; i<=60; i++){
    minutos.innerHTML += '<option value="'+i+'">'+i+'</option>';
}
for(var i = 1; i<=60; i++){
    segundos.innerHTML += '<option value="'+i+'">'+i+'</option>';
}


comecar.addEventListener('click', function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual +":"+ segundoAtual;

    interval = setInterval(()=>{
        segundoAtual--;

        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            } else{
                alert('Acabou');
                clearInterval(interval)
            }
        }
        display.childNodes[1].innerHTML = minutoAtual +":"+ segundoAtual;
    },1000)
})
