//電話號碼顯示=================================================
//先拿到ID對應的html標簽
var hd1_dt=document.getElementById("hd1_dt");
var hd1_d=document.getElementById("hd1_d");
//使用容器“引用”onmouseover方法產生鼠標觸發事件
//再使用函數去調用innerHTML方法，覆蓋ID中的原值
//或者使用鼠標監聽
hd1_dt.addEventListener("mouseover",function(){
  hd1_d.innerHTML="+81-090-****-9677";
  hd1_d.style.color="yellow";
  hd1_dt.style.backgroundColor='gray';
})
hd1_dt.addEventListener("mouseout",function(){
  hd1_d.innerHTML="CallMe NOW";
  hd1_d.style.color="rgb(27, 48, 49)";
  hd1_dt.style.backgroundColor='rgb(136, 159, 170)';
  
})
//音樂==================================================================
const image_play = document.getElementById('bkgm_pic_play');//引入按鈕圖片
const image_playing = document.getElementById('bkgm_pic_playing');//引入按鈕圖片
const songname = document.getElementById('p11');//引入按鈕圖片
const songer = document.getElementById('p12');//引入按鈕圖片
const bkgm= document.getElementById('bkgm');//引入按鈕圖片
const audio = new Audio('music\\莫文蔚 - 他不爱我.flac');  //創建音頻對象(雙\\糾正報錯
image_play.addEventListener('click', function() {  //圖片添加事件監聽
  audio.play();  //調用播放方法 
  //隱藏圖片
  image_play.style.display="none";
  image_playing.style.display="block";
  //歌曲顔色變化
  songname.style.color="#DEFFAC";
  songer.style.color="#00EC00";
});
// 點擊暫停歌曲
image_playing.addEventListener("click",function(){
  audio.pause(); //調用播放方法 
  //隱藏圖片
  image_play.style.display="block";
  image_playing.style.display="none";
  //歌曲顔色變化
  songname.style.color="rgb(133, 255, 208)";
  songer.style.color="rgb(236, 220, 74)";
})

//時間============================================================================
const currentTime=new Date(); //new出實體
var hd3_y=document.getElementById('hd3_year');
var hd3_m=document.getElementById('hd3_month');
var hd3_d=document.getElementById('hd3_day');
var hd3_h=document.getElementById('hd3_hour');
var hd3_min=document.getElementById('hd3_minute');
var hd3_sec=document.getElementById('hd3_second');
hd3_y.innerHTML=currentTime.getFullYear()+'年';
hd3_m.innerHTML=currentTime.getMonth()+'月';
hd3_d.innerHTML=currentTime.getDate()+'日';
hd3_h.innerHTML=currentTime.getHours()+'時';
hd3_min.innerHTML=currentTime.getMinutes()+'分';
hd3_sec.innerHTML=currentTime.getSeconds()+'秒';







