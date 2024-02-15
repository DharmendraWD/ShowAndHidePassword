var btn = document.getElementById('reveal');
var box = document.getElementById('pass');
var fak = document.getElementById('fakepass');
const isEmpty = str => !str.trim().length;

var onShow = document.getElementById('onShow');

btn.addEventListener('click', function() {
    onShow.play();
	fak.innerHTML='';
	var x = box.value.length;
	for(var i=0; i<x; i++ ){fak.innerHTML=fak.innerHTML+'&bullet;';}
	fak.classList.toggle('scan');
	this.classList.toggle('open');
	box.classList.toggle('active');
	(box.type=='password') ? box.type='text'
    : setTimeout(function(){ box.type='password' }, 1000);
});

box.addEventListener("input", function() {
  if(!isEmpty(this.value)) btn.removeAttribute('disabled'); else btn.setAttribute('disabled', 'disabled');
});