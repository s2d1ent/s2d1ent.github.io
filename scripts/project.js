var doc=document,
    wiw=window;
class Project {
   constructor (name,description){
    this.name=name;
    this.description=description;
  }
   Data (link,name,description) {
    name=this.name;
    description=this.description;
    doc.querySelector(".project__left-title").innerHTML=name;
    doc.querySelector(".project__left-subtitle").innerHTML=description;
    $(".project__right-img").attr("src",link).attr("class","project__right-img project__right-imgC")
  }
}

var LazyCote= new Project();
LazyCote.name="LazyCote";
LazyCote.description="Сайт созданный для маленькой команды разработчиков LazyCote. Представляет собой платформу на которой выкладываются новости их проекта, а так же обучающие курсы по программированию в текстовом формате";

$(".proj").bind("click",(event)=>{
var btn =Array.from($(".proj")).indexOf(event.target);
switch (btn){
  case 0:
   LazyCote.Data("src/logo1.png");
  break;

  default:

}
})
