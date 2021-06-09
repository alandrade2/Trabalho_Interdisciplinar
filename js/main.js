const inputs = document.querySelectorAll(".input");
const dayNumber = new Date().getDate();
const year = new Date().getFullYear();
const dayName = new Date().toLocaleString("default", {weekday: "long"});
const monthName = new Date().toLocaleString("default", {month: "long"});


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".date-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;