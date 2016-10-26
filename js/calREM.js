var REM;
(function(){
	REM = document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth / 10 + 'px';
	REM = parseInt(REM);
})();
var VALUE = 50;
console.log(VALUE/REM);
