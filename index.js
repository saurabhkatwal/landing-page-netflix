let tabs=document.querySelectorAll('.tab');
let tab_ins=document.querySelectorAll('.tab-in');
console.log(tab_ins);

function removeBorder(){
    tabs.forEach(tab=>{
        tab.classList.remove('tab-border');
    });
}
function removeShow(){
tab_ins.forEach(tab_in=>{
    console.log(tab_in);
    tab_in.classList.remove('show');
});
}
function showcontent(){
removeBorder();
removeShow();
this.classList.add('tab-border');
let id=this.getAttribute('id');
document.querySelector('.'+id).classList.add('show');
}
tabs.forEach(elem=>elem.addEventListener('click',showcontent));