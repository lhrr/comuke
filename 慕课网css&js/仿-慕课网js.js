// 封装一个函数用来获取id
function getid(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

//封装一个关于搜索框的函数
function search(){
	// 绑定一个点击事件，点击搜索框会弹出窗口提示不支持搜索。
	var search_icon=getid("icon");
	search_icon.onclick=function(){
		alert("仿写的网站，目前不支持搜索功能！");
	}

	// 绑定一个聚焦事件，当搜索框光标聚焦时搜索默认项目“前端入门和Java入门”会自动隐藏。
	var search_button=getid("search_button");
	var search_input=getid("search_input");
	search_input.onfocus=function(){
		search_button.style.display="none";
	}

	// 绑定一个事件，当输入框光标离开时，判断是否有输入值，如果没有的话默认搜索项目会显示出来，否则不会显示。
	search_input.onblur=function(){
		var search_value=getid("search_input").value;
		if(search_value==""){
			search_button.style.display="block";
		}else{
			search_button.style.display="none";
		}
	}
}
search();

// 写一个函数，当鼠标移到个人信息时会显示出来，鼠标移开会重新隐藏个人信息
var myself_value=getid("myself_value");
function myself_block(){
	myself_value.style.display="block";
}
function myself_none(){
	myself_value.style.display="none";
}

//图片轮播的相关js

// 定义相关全局变量
var index=0;
var timer;
var rotation_a=getid("rotation_a");
var lens=rotation_a.getElementsByTagName('a').length;
var dots_id=getid("dots_id").getElementsByTagName("span");

// 定义一个相关的函数来实现轮播
function rotation(){

	//绑定一个事件，使鼠标离开时图片实现轮播。
	rotation_a.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=lens){
				index=0;
			}
			moving();
		},3000)
		
	}
	rotation_a.onmouseout();
	rotation_a.onmouseover=function(){
		timer=clearInterval(timer);
	}

	for(var j=0;j<lens;j++){
		dots_id[j].id=j;
		dots_id[j].onclick=function(){
			index=this.id;
			moving();
		}
	}
	
	var rota_pre=getid("rota_pre");
	rota_pre.onclick=function(){
		index--;
		if(index<0){
			index=lens-1;
		}
		moving();
	}
	rota_next.onclick=function(){
		index++;
		if(index>=lens){
			index=0;
		}
		moving();
	}

	
}
rotation();

function moving(){
	var imgs=getid("rotation_a").getElementsByTagName("a");
	for(var i=0;i<lens;i++){
		imgs[i].style.display="none";
		dots_id[i].className="";
	}
	dots_id[index].className="dots_now";
	imgs[index].style.display="block";
}