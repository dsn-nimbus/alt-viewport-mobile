!function(){var t=function(i,n,t,r){for(r=function(t,e){return t<=e?0<i(n=t+(e-t)/2)&&(n==t||i(n-1)<=0)?n:i(n)<=0?r(n+1,e):r(t,n-1):-1},t=1;i(t)<=0;)t*=2;return 0|r(t/2,t)}(function(t){return matchMedia("(max-resolution: "+t+"dpi)").matches}),e=1;96<=t&&(e=2-1/96*(t-96)),document.getElementById("viewport").setAttribute("content","viewport-fit=cover, width=device-width, initial-scale="+(1<=e?e:1).toString().substring(0,4))}();