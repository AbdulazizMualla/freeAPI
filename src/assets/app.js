
document.body.parentElement.dir = localStorage.getItem('dir')


window.addEventListener('scroll' , ()=>{
    document.getElementById('blanket').style.height = document.body.parentNode.scrollHeight + 'px'
})