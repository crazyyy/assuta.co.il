function at_show_aux(t,e){for(var i=document.getElementById(t),o=document.getElementById(e),n="y"==o.at_position?i.offsetHeight+2:0,s="x"==o.at_position?i.offsetWidth+2:0;i;i=i.offsetParent)n+=i.offsetTop,s+=i.offsetLeft;o.style.position="absolute",o.style.top=n-20+"px",o.style.left=s+"px",o.style.visibility="visible"}function at_show(){var t=document.getElementById(this.at_parent),e=document.getElementById(this.at_child);at_show_aux(t.id,e.id),clearTimeout(e.at_timeout)}function at_hide(){var t=(document.getElementById(this.at_parent),document.getElementById(this.at_child));t.at_timeout=setTimeout("document.getElementById('"+t.id+"').style.visibility = 'hidden'",333)}function at_click(){var t=document.getElementById(this.at_parent),e=document.getElementById(this.at_child);return"visible"!=e.style.visibility?at_show_aux(t.id,e.id):e.style.visibility="hidden",!1}function at_attach(t,e,i,o,n){var s=document.getElementById(t),a=document.getElementById(e);switch(s.at_parent=s.id,a.at_parent=s.id,s.at_child=a.id,a.at_child=a.id,s.at_position=o,a.at_position=o,a.style.position="absolute",a.style.visibility="hidden",void 0!=n&&(s.style.cursor=n),i){case"click":s.onclick=at_click,s.onmouseout=at_hide,a.onmouseover=at_show,a.onmouseout=at_hide;break;case"hover":s.onmouseover=at_show,s.onmouseout=at_hide,a.onmouseover=at_show,a.onmouseout=at_hide}}
//# sourceMappingURL=maps/dropdown.js.map