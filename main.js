var like = document.getElementsByClassName("fas fa-heart")[0];
like.addEventListener("click", function(){
	this.style.color = (this.style.color == 'gray') ? 'red' : 'gray';
})

var doubleClick = document.getElementsByClassName("d-bloc kw-100")[0];
	doubleClick.addEventListener("dblclick", function(){
	 	var like = document.getElementsByClassName("fas fa-heart")[0];
		like.style.color = (like.style.color == 'gray') ? 'red' : 'gray';
})