function f(event){
	 var rep =document.getElementsByTagName("img")[0] 	.src = event.target.src;
	 
}


document.body.addEventListener('click', f, false);

