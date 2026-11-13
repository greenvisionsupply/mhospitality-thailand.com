(function(){
  var top=document.querySelector("header.top"); if(!top) return;
  var b=top.querySelector(".burger"), nav=top.querySelector("nav.main"); if(!b||!nav) return;
  var labels={en:"Menu",th:"เมนู",de:"Menü"};
  function label(){b.setAttribute("aria-label",labels[document.documentElement.lang]||labels.en)}
  function set(o){top.classList.toggle("open",o);b.setAttribute("aria-expanded",o?"true":"false")}
  b.addEventListener("click",function(e){e.stopPropagation();set(!top.classList.contains("open"))});
  nav.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});
  document.addEventListener("click",function(e){if(top.classList.contains("open")&&!top.contains(e.target))set(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&top.classList.contains("open")){set(false);b.focus()}});
  window.addEventListener("resize",function(){if(window.innerWidth>1020)set(false)});
  label();
  try{new MutationObserver(label).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]})}catch(e){}
})();
