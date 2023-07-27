const menu = document.getElementById('menu');
const open = document.getElementById('chaalo');
const realclose = document.getElementById('bandh');
function cllose(){
    addEventListener("click", ()=>{
        menu.style.display = 'none';
        realclose.style.display = 'none';
        open.style.display = 'flex';
        realclose.style.transition = 'all 0.9s ease';
        menu.style.transition = 'all 0.9s ease'
    })
}
function oppen(){
    addEventListener("click", ()=>{
        menu.style.display = 'flex';
        open.style.display = 'none';
        realclose.style.display = 'flex';
    })
}