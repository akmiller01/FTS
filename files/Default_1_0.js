function PleaseWaitWindow() {
   var alarmWindow = document.body.appendChild(document.createElement("div"))
   alarmWindow.id = 'processMessage';
   alarmWindow.style.height = document.documentElement.scrollHeight + 'px';
   alarmWindow.style.backgroundColor = '#000';
   alarmWindow.style.position = 'absolute';
   alarmWindow.style.width = '100%';
   alarmWindow.style.top = '0px';
   alarmWindow.style.left = '0px';
   alarmWindow.style.zIndex = '10000';

   var div1 = document.createElement("div");
   div1.style.top = document.documentElement.clientHeight / 2 + 'px';
   div1.style.left = ((document.documentElement.clientWidth / 2) - 50) + 'px';
   div1.style.position = 'absolute';


   var img = document.createElement("img");
   img.src = "images/ajax-loaderMain.gif";
   div1.appendChild(img);

   var br = document.createElement("br");
   div1.appendChild(br);

   var lbl = document.createElement("label");
   if (lbl.className != null)
      lbl.className = 'processtitle';

   lbl.innerHTML = 'Please wait....';
   div1.appendChild(lbl);


   alarmWindow.appendChild(div1);
   //IE hack.  Overlap  z-index doo-dads
   //This is a one pixel transparent png.
   //alarmWindow.style.backgroundImage = 'url(images/ajax-loaderMain.gif)';
   
}

function RemovePleaseWaitWindow() {
   var a = document.getElementById("processMessage");
   var destroyed = document.body.removeChild(a);
   
}