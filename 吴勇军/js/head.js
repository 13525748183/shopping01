let lei1 = document.getElementsByClassName('lei-1')[0]
let jiji  = document.getElementsByClassName('jiji')[0]
lei1.onmouseover = function(){
    jiji.style.display = 'block';
    lei1.style.color = '#ccc'
}
lei1.onmouseout = function(){
    jiji.style.display = 'none';
    lei1.style.color = '#000'
}
jiji.onmouseover = function(){
    jiji.style.display = 'block';
    lei1.style.color = '#ccc'
}
jiji.onmouseout = function(){
    jiji.style.display = 'none';
    lei1.style.color = '#000'
}