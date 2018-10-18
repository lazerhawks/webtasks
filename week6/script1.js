var b1=false;
var b2=false;
var b3=false;
var b4=false;
var b5=false;


function button1() {
	if (b1==false) {
		document.getElementById("button1").innerHTML = '<button>Finish</button><span><strike>Finish web tasks<strike/></span>';
		b1=true;
	}
	else{
		document.getElementById("button1").innerHTML = '<button>Finish</button><span>Finish web tasks</span>';
		b1=false;	
	}

	}
function button2() {

		if (b2==false) {
		document.getElementById("button2").innerHTML = '<button>Finish</button><span><strike>Go to gym<strike/></span>';
		b2=true;
	}
	else{
		document.getElementById("button2").innerHTML = '<button>Finish</button><span>Go to gym</span>';
		b2=false;	
	}	
}
function button3() {
		
		if (b3==false) {
		document.getElementById("button3").innerHTML = '<button>Finish</button><span><strike>Clean home<strike/></span>';
		b3=true;
	}
	else{
		document.getElementById("button3").innerHTML = '<button>Finish</button><span>Clean home</span>';
		b3=false;	
	}		
}
function button4() {
		
		if (b4==false) {
		document.getElementById("button4").innerHTML = '<button>Finish</button><span><strike>Start project<strike/></span>';
		b4=true;
	}
	else{
		document.getElementById("button4").innerHTML = '<button>Finish</button><span>Start project</span>';
		b4=false;	
	}		
}
function button5() {

		if (b5==false) {
		document.getElementById("button5").innerHTML = '<button>Finish</button><span><strike>Prepare to calculus<strike/></span>';
		b5=true;
	}
	else{
		document.getElementById("button5").innerHTML = '<button>Finish</button><span>Prepare to calculus</span>';
		b5=false;	
	}		
}


let btn1 = document.getElementById("button1");
btn1.addEventListener("click",button1,false);


let btn2 = document.getElementById("button2");
btn2.addEventListener("click",button2,false);


let btn3 = document.getElementById("button3");
btn3.addEventListener("click",button3,false);


let btn4 = document.getElementById("button4");
btn4.addEventListener("click",button4,false);


let btn5 = document.getElementById("button5");
btn5.addEventListener("click",button5,false);





