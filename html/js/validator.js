function gotoMoreInfoForm(e,t){return location.href="/?catid={4DF88D1B-DEF7-48A9-85C3-7B53B25C1F9C}&doctname="+e+"&categoryname="+t,!1}function gotoCost(e,t,a){return location.href="/?catid={62631C75-CDED-4D5B-8AE1-5B342038EF23}&expID="+e+"&docName="+t+"&activityName="+a,!1}function gotosurgerylookup(e){return location.href="/ws3engine/surgerylookup.asp?surgeydisc="+e,!1}function validateEmail(e){var t=e.match(/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/);return null!=t&&e==t[0]}function strTrim(e){return e=e.replace(/(^\s*)|(\s*$)/g,""),0!=e.length}function checkForm(){return strTrim(document.all.FromName.value)&&validateEmail(document.all.email.value)&&validateEmail(document.all.to.value)?!0:(alert(" *Please, fill in all mandatory fields and correct Email address"),!1)}function checkform(formname){eval("document.forms['"+formname+"'].submit()")}function phoneIsValid(e){var t;for(t=0;t<e.length;t++){var a=e.charAt(t);if(("0">a||a>"9")&&" "!=a&&"+"!=a&&"-"!=a&&"*"!=a)return!1}return!0}function checkformReception(formname){eval("document.forms['"+formname+"'].submit()")}function querySt(e){for(hu=window.location.search.substring(1),gy=hu.split("&"),i=0;i<gy.length;i++)if(ft=gy[i].split("="),ft[0]==e)return ft[1];return""}function setqueryStValues(e){var t=querySt("WrongCode"),a=URLDecode(querySt("SourceForm"));if(e==a){var n="first_name",l="last_name",r="c_phone1",m="c_email",o="message",u="CodeIncorrectLabel";"CallFormSide"==a?(n="call_firstname_side",l="call_lastname_side",r="call_phone1_side",m="call_email_side",o="call_message_side",u="CodeIncorrectLabel_side"):"CallFormBottom"==a&&(n="call_firstname_bottom",l="call_lastname_bottom",r="call_phone1_bottom",m="call_email_bottom",o="call_message_bottom");try{""!=t&&(document.getElementById(u).style.display="inline")}catch(c){}var d=navigator.appName;if("Microsoft Internet Explorer"==d){var s=URLDecode(querySt("country"));if(""!=s){var f=document.getElementById("country");for(i=0;i<f.options.length;i++)if(f.options[i].value==s){f.selectedIndex=i;break}}var y=URLDecode(querySt("street"));""!=y&&(document.getElementById("street").value=y);var g=URLDecode(querySt("city"));""!=g&&(document.getElementById("city").value=g);var v=URLDecode(querySt("appartment"));""!=v&&(document.getElementById("appartment").value=v);var E=URLDecode(querySt("firstname"));""!=E&&(document.getElementById(n).value=E);var _=URLDecode(querySt("lastname"));""!=_&&(document.getElementById(l).value=_);var I=URLDecode(querySt("phone1"));""!=I&&(document.getElementById(r).value=I);var B=URLDecode(querySt("message"));""!=B&&(document.getElementById(o).value=B);var h=querySt("email");""!=h&&(document.getElementById(m).value=h)}}}function URLDecode(e){for(var t="0123456789ABCDEFabcdef",a="",n=0;n<e.length;){var l=e.charAt(n);"+"==l?(a+=" ",n++):"%"==l?n<e.length-2&&-1!=t.indexOf(e.charAt(n+1))&&-1!=t.indexOf(e.charAt(n+2))?(a+=unescape(e.substr(n,3)),n+=3):n++:(a+=l,n++)}return a}function LTrim(e){var t=/\s*((\S+\s*)*)/;return e.replace(t,"$1")}function RTrim(e){var t=/((\s*\S+)*)\s*/;return e.replace(t,"$1")}function trim(e){return LTrim(RTrim(e))}function SendForm_side(e){var t=trim(document.getElementById("fullname").value);if(""==t)return alert("Пожалуйста введите имя"),document.getElementById("fullname").focus(),!1;var a=trim(document.getElementById("countryName").value);if(""==a)return alert(""),document.getElementById("country").focus(),!1;var n=trim(document.getElementById("c_area_code").value);if(""==n)return alert("Пожалуйста введите кол страны"),document.getElementById("area_code").focus(),!1;if(!phoneIsValid(n))return alert("Некорректный номер телефона"),document.getElementById("area_code").focus(),!1;var l=trim(document.getElementById("c_phone1").value);if(""==l)return alert("Пожалуйста введите номер телефона"),document.getElementById("c_phone1").focus(),!1;if(!phoneIsValid(l))return alert("Некорректный номер телефона"),document.getElementById("c_phone1").focus(),!1;var r=trim(document.getElementById("c_email").value);return""==r?(alert("Пожалуйста введите E-mail"),document.getElementById("c_email").focus(),!1):null==r.match(/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)?(alert("Некорректный E-mail адрес"),document.getElementById("c_email").focus(),!1):(document.getElementById("phone1").value=document.getElementById("c_area_code").value+document.getElementById("c_phone1").value,!0)}function SendCallForm(e,t){var a;a=t?"_side":"_bottom";var n=trim(document.getElementById("call_firstname"+a).value);if(""==n||"Full Name"==n)return alert("Пожалуйста введите имя"),document.getElementById("call_firstname"+a).focus(),!1;var l=trim(document.getElementById("call_lastname"+a).value);if(""==l)return alert("Пожалуйста введите фамилию‏."),document.getElementById("call_lastname"+a).focus(),!1;var r=trim(document.getElementById("call_phone1"+a).value);if(""==r)return alert("Пожалуйста введите номер телефона."),document.getElementById("call_phone1"+a).focus(),!1;if(!phoneIsValid(r))return alert("Некорректный номер телефона"),document.getElementById("call_phone1"+a).focus(),!1;var m=trim(document.getElementById("call_email"+a).value);if(""==m)return alert("Пожалуйста введите E-mail"),document.getElementById("call_email"+a).focus(),!1;if(null==m.match(/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/))return alert("Некорректный E-mail адрес"),document.getElementById("call_email"+a).focus(),!1;var o=trim(document.getElementById("call_message"+a).value);return""==o?(alert("Пожалуйста введите текст обращения"),document.getElementById("call_message"+a).focus(),!1):!0}function SendForm_cus(e){var t=trim(document.getElementById("first_name").value);if(""==t)return alert("Пожалуйста введите имя"),document.getElementById("first_name").focus(),!1;var a=trim(document.getElementById("last_name").value);if(""==a)return alert("Пожалуйста введите фамилию"),document.getElementById("last_name").focus(),!1;var n=trim(document.getElementById("countryName").value);if(""==n)return alert(""),document.getElementById("country").focus(),!1;var l=trim(document.getElementById("c_area_code").value);if(""==l)return alert("Пожалуйста введите кол страны"),document.getElementById("area_code").focus(),!1;if(!phoneIsValid(l))return alert("Некорректный номер телефона"),document.getElementById("area_code").focus(),!1;var r=trim(document.getElementById("c_phone1").value);if(""==r)return alert("Пожалуйста введите номер телефона"),document.getElementById("c_phone1").focus(),!1;if(!phoneIsValid(r))return alert("Некорректный номер телефона"),document.getElementById("c_phone1").focus(),!1;var m=trim(document.getElementById("c_email").value);return""==m?(alert("Пожалуйста введите E-mail"),document.getElementById("c_email").focus(),!1):null==m.match(/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)?(alert("Некорректный E-mail адрес"),document.getElementById("c_email").focus(),!1):(document.getElementById("phone1").value=document.getElementById("c_area_code").value+document.getElementById("c_phone1").value,!0)}function SendRecoveryForm(){return""==strTrim(document.getElementById("full_name_relax").value)?(alert("Пожалуйста введите имя и фамилию"),document.getElementById("full_name_relax").focus(),!1):""==strTrim(document.getElementById("email_relax").value)?(alert("יПожалуйста введите Email"),document.getElementById("email_relax").focus(),!1):null==document.getElementById("email_relax").value.match(/^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/)?(alert("Некорректный E-mail адрес"),document.getElementById("email_relax").focus(),!1):""==strTrim(document.getElementById("phone_relax").value)?(alert("Пожалуйста введите номер телефона"),document.getElementById("phone_relax").focus(),!1):!0}
//# sourceMappingURL=maps/validator.js.map
