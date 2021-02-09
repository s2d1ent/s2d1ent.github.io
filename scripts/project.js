var doc=document,
    wiw=window;
class Project {
   constructor (name,description,color){
    this.name=name;
    this.description=description;
  }
   Data (link,color,background,name,description) {
    name=this.name;
    description=this.description;
    doc.querySelector(".project__left-title").innerHTML=name;
    doc.querySelector(".project__left-subtitle").innerHTML=description;
    $(".project").css("background",background + color);
    $(".project__right-img").attr("src",link).attr("class","project__right-img project__right-imgC");
  }
}
var LazyCote= new Project();
LazyCote.name="LazyCote";
LazyCote.description="Сайт созданный для маленькой команды разработчиков LazyCote. Представляет собой платформу на которой выкладываются новости их проекта, а так же обучающие курсы по программированию в текстовом формате";

var btn, what_use;
$(".proj").bind("click",(event)=>{
  $(".container-btn").css("display","flex")
  what_use=0;
  // Внутренняя область видимости - так как задана в родитльской функции
  // она видна детям(switch_case и slider)
  switch_case()
})
$(".container-btn").bind("click",(event)=>{
  what_use=1;
  switch_case()
})
function switch_case() {
  if (what_use==0) {
    btn=Array.from($(".proj")).indexOf(event.target)
  } else if (what_use==1) {
    slider()
  }
  switch (btn){
    case 0:
     LazyCote.Data("src/logo1.png","#8110c7"," no-repeat url('src/LazyCote_code.png')");
    break;
    default:
  }
}
function slider() {
    if (Array.from($(".container-btn")).indexOf(event.target)==0) {
      btn--;
      if (btn<0) {
        btn=0;
      }
    } else {
      btn++;
      if (btn>Array.from($(".proj")).length-1) {
        btn--;
      }
    }
}

// Паралакс контакты
// var o = $(".container__contacts");
// $(".container__contacts-con").on("mousemove", function (t) {
//     var e =-($(window).innerWidth() / 2 - t.pageX) / 30 ,
//         n =($(window).innerHeight() * 2 - t.pageY) / 30 ;
// //    var sX = ($(window).innerWidth() / 2 - t.pageX) / 20,//Переменная отвечающая за тень на оси x
// //        sY = ($(window).innerHeight() / 2 + t.pageY)/100;//Переменная отвечающая за тень на оси y
//     o.attr("style", "ransform: rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg)")
// })
