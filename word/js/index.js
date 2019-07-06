/*轮播图*/
(function(){
	var banner = document.querySelector(".banner");
	var oimg = banner.querySelectorAll("img");
	var slides = document.querySelector(".slides");
	var slides_btn = slides.querySelectorAll("li");
	var i = 0 ;
	var timer = setInterval(carousel,5000);
	function carousel(){
		i++;
		if(i==oimg.length){
			i=0;
		}	
		showimg();
	}
	function showimg(){
		for(var j=0;j<oimg.length;j++){
			if(i==j){
				continue;
			}
			oimg[j].style.opacity = 0;	
			slides_btn[j].style.background = "url(img/dot.png) no-repeat -13px 0px";
		}
		oimg[i].style.opacity = 1;
		slides_btn[i].style.background = "url(img/dot.png) no-repeat 0px 0px";
	}
	//下一张图片
	var next = document.querySelector(".next");
	next.onclick = function(){
		clearInterval(timer);
		carousel();
		timer = setInterval(carousel,5000);
	}
	//上一张图片
	var prev = document.querySelector(".prev");
	prev.onclick = function(){
		clearInterval(timer);
		i--;
		if(i<0){
			i=oimg.length-1;
		}
		showimg();
		timer = setInterval(carousel,5000);
	}
	//点击滑动按钮
	for(var k=0;k<slides_btn.length;k++){
		slides_btn[k].index = k;
		slides_btn[k].onclick = function(){
			clearInterval(timer);
			i = this.index;
			showimg();
			timer = setInterval(carousel,5000);
		}
	}
})();
/*二级菜单*/
(function(){
	var btn = document.querySelector(".btn");
	var head_nav = document.querySelector(".head-nav");
	var i =1 ;
	btn.onclick = function(){
		i++;
		if(i%2==0){
			head_nav.style.display = "block";
		}else{
			head_nav.style.display = "none";
		}
	}
	head_nav.onclick = function(){
		if(head_nav.offsetWidth<420){
			head_nav.style.display = "none";
		}
	}
})();
//动态文字
(function(){
	var str = "没有泪水的人，他的眼睛是干涸的，没有梦想的人，他的夜晚是黑暗的。每每仰望，辽阔的夜空群星闪耀，我们好似那璀璨星辰中的一点，因为有梦想，所以明亮，所以辉煌……";
	var foreword = document.querySelector(".foreword");
	var n = 0 ;
	var texttimer = setInterval(function(){
		foreword.innerHTML = foreword.innerHTML+str[n];
		n++;
		if(n==str.length){
			clearInterval(texttimer);
		}
	},200)
})();
//section距离文档顶部的位置
(function(){
	document.body.scrollTop=document.documentElement.scrollTop=0;
	var header = document.querySelector(".header");
	var section = document.querySelectorAll(".section");
	window.onscroll = function(){
		var top = document.body.scrollTop||document.documentElement.scrollTop;
		var dh = document.documentElement.clientHeight
		for(var i=0;i<section.length;i++){
			if(Math.abs(section[i].offsetTop-top)<dh/2){
				section[i].setAttribute("class","section action");
			}else{
				section[i].setAttribute("class","section");
			}
		}
		if(top>200){
			header.style.position = "fixed";
		}else{
			header.style.position = "relative";
		}
	}
})();
