var doc=document,
	wiw=window;

addEventListener("scroll",function (argument) {
console.log(pageYOffset);
})

var start_w=doc.getElementById("start_w"),
	start_w2=doc.getElementById("start_w2"),
	header=doc.getElementById("header"),
	start_next=doc.getElementById("start-next"),
	start_next_one=doc.getElementById("start_next_one"),
	backs2d=doc.getElementById("backs2d"),
	proj=doc.getElementById("proj");

var z=20;
	start_w.style.marginTop=z+"%";

var i=2,
 	a=0.15,
 	num=[a=0.15,b=2,c=true];


function start() {
	var nuull=false;
function ab() {

	if (i==120 || i>120) {
			clearInterval(starttimer);
	}
	a+=a;
	i+=i;
var start_fontSize=start_w.style.fontSize=i +"%",
	start_fontSize=start_w2.style.fontSize=i +"%";
	start_w.style.filter="opacity(" + i + "%" + ")";
	start_w2.style.filter="opacity(" + i + "%" + ")";
	start_w.style.marginTop=z-a+"%";

if (i==256) {
	function bb () {
			if (num[0]==1.2) {
				clearInterval(bbtimer);
				start_next.style.display="inline-flex";
				function aa () {	
							num[1]=num[1]+2
						start_next_one.style.marginTop=num[1] +"%";
							if (num[1]==6) {
								num[1]=0;
							}
							if (pageYOffset>200 ) {
								clearInterval(aatimer);
								num[2]==false;
							} else if (pageYOffset<120 ) {
								var aatimer=setInterval(aa,200);
							}

				} //анимация стрелочки
				var aatimer=setInterval(aa,200);
			}
	
	num[0]+=num[0];
		header.style.filter="opacity(" + num[0] + ")";
		backs2d.style.filter="opacity(" + num[0] + ")";
	} // появления хедера и лого
	}
let bbtimer=setInterval(bb,100);
}
let starttimer=setInterval(ab,100);
}
start();

start_next_one.addEventListener("click",function () {
	proj.style.display="flex";
})



