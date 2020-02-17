//Functions for opening and closing side menu bar, only at device width == 600px;
function openMenu(){
    document.getElementById("openbtn").style.display='none';
    document.getElementById("closebtn").style.display='inline-block';
    document.getElementById("side-menu").style.display='block';
}

function closeMenu(){
    document.getElementById("closebtn").style.display='none';
    document.getElementById("openbtn").style.display='inline-block';
    document.getElementById("side-menu").style.display='none';
}

function changeTheme(){
    document.getElementById("theme-select").style.backgroundColor = 'grey';
}