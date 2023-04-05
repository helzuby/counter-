
let add = document.getElementById('increase')
let minus = document.getElementById('decrease')

const count = document.getElementById('number')
let numberCount = 0;

increase.addEventListener('click',function(){
	numberCount += 1;
	count.innerHTML = numberCount;
})

decrease.addEventListener('click',function(){
	numberCount -= 1;
	count.innerHTML = numberCount;
})