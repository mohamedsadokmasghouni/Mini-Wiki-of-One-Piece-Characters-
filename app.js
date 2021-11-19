let btns = document.querySelectorAll('.btn');
let ops = document.querySelectorAll('.op');

for (let i = 0;i<ops.length;i++){
    btns[i].addEventListener('click', function(){
        ops[i].classList.toggle('active');
    })
}