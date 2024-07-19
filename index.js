const shareButton=document.getElementById("shareButton")
const bubble=document.querySelector(".bubble")

function share(){
    
    shareButton.style.backgroundColor='hsl(214, 17%, 51%)';
    bubble.style.display='flex';
    shareButton.classList.toggle('active');
}