function gotoMoreInfoForm(docName,categoryname)
{
	location.href='/?catid={4DF88D1B-DEF7-48A9-85C3-7B53B25C1F9C}&doctname='+docName+'&categoryname='+categoryname;

	return false;
}

function gotoCost(expName,docName,activityName)
{
	location.href='/?catid={62631C75-CDED-4D5B-8AE1-5B342038EF23}&expID='+expName+'&docName='+docName+'&activityName='+activityName;

	return false;
}

function gotosurgerylookup(docName)
{
	location.href='/ws3engine/surgerylookup.asp?surgeydisc='+docName;
	return false;
}

function validateEmail(email) {
	
	var matches = email.match(/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/);
	return (matches != null && email == matches[0]);
}
function strTrim(str){
  str=str.replace(/(^\s*)|(\s*$)/g, "");
  if (str.length==0){
    return false;
  }
  return true;
} 
 
function checkForm(){
  if(!strTrim(document.all['FromName'].value) || !validateEmail(document.all['email'].value) ||  !validateEmail(document.all['to'].value)){
    alert(' *Please, fill in all mandatory fields and correct Email address');
    return false;
  }   
return true;
}

function checkform(formname)
{

	eval("document.forms['"+formname+"'].submit()");
}


function phoneIsValid(s) {
        var i;
        for (i = 0; i < s.length; i++) {
            var c = s.charAt(i);
            if (((c < "0") || (c > "9")) &&  c != " " && c != "+" && c != "-" && c != "*") return false;
//            
        }
        return true;
    }
function checkformReception(formname)
{
	//alert(212121);
	eval("document.forms['"+formname+"'].submit()");
}


   function querySt(key) {
		hu = window.location.search.substring(1);
		gy = hu.split("&");
		for (i=0;i<gy.length;i++) 
		{
			ft = gy[i].split("=");
			if (ft[0] == key) 
			return ft[1];
		}
		return "";
	}
	function setqueryStValues(Source)
	{
		var WrongCode = querySt("WrongCode");
		var SourceForm = URLDecode(querySt("SourceForm"));
		if (Source != SourceForm) return;
		var firstnameid = "first_name";
		var lastnameid = "last_name";
		var phone1id = "c_phone1";
		var emailid = "c_email";
		var messageid = "message";
		var CodeIncorrectLabelid = "CodeIncorrectLabel"; 
		if (SourceForm == "CallFormSide")
		{
			firstnameid = "call_firstname_side";
			lastnameid = "call_lastname_side";
			phone1id = "call_phone1_side";
			emailid = "call_email_side";
			messageid="call_message_side";
			CodeIncorrectLabelid = "CodeIncorrectLabel_side"
		}
		else if (SourceForm == "CallFormBottom")
		{
			firstnameid = "call_firstname_bottom";
			lastnameid = "call_lastname_bottom";
			phone1id = "call_phone1_bottom";
			emailid = "call_email_bottom";
			messageid="call_message_bottom";
		}		
		try{
			if (WrongCode != "")
				document.getElementById(CodeIncorrectLabelid).style.display="inline";
		}
		catch(e){}		
		var browser=navigator.appName
		if (browser != "Microsoft Internet Explorer") return;
		var country = URLDecode(querySt("country"));
		if 	(country != "")
		{
			var oSelect = document.getElementById("country");
			for (i=0; i < oSelect.options.length; i++)
			{  
			   if (oSelect.options[i].value == country)
			   {
	              oSelect.selectedIndex = i;
				  break;
			   }    
			}   
		}
		var street = URLDecode(querySt("street"));	
		if (street != "")
			document.getElementById("street").value =  street;
		var city = URLDecode(querySt("city"));	
		if (city != "")
			document.getElementById("city").value =  city;
		var appartment = URLDecode(querySt("appartment"));	
		if (appartment != "")
			document.getElementById("appartment").value =  appartment;
		var firstname = URLDecode(querySt("firstname"));	
		if (firstname != "")
			document.getElementById(firstnameid).value =  firstname;
		var lastname = URLDecode(querySt("lastname"));	
		if (lastname != "")
			document.getElementById(lastnameid).value =  lastname;
		var phone1 = URLDecode(querySt("phone1"));
		if (phone1 != "")
			document.getElementById(phone1id).value =  phone1;
		var message = URLDecode(querySt("message"));
		if (message != "")
			document.getElementById(messageid).value =  message;
		var email = querySt("email");
		if (email != "")
			document.getElementById(emailid).value =  email;
	}		
function URLDecode(encoded)
{
   // Replace + with ' '
   // Replace %xx with equivalent character
   // Put [ERROR] in output if %xx is invalid.
   var HEXCHARS = "0123456789ABCDEFabcdef"; 
   var plaintext = "";
   var i = 0;
   while (i < encoded.length) {
       var ch = encoded.charAt(i);
	   if (ch == "+") {
	       plaintext += " ";
		   i++;
	   } else if (ch == "%") {
			if (i < (encoded.length-2) 
					&& HEXCHARS.indexOf(encoded.charAt(i+1)) != -1 
					&& HEXCHARS.indexOf(encoded.charAt(i+2)) != -1 ) {
				plaintext += unescape( encoded.substr(i,3) );
				i += 3;
			} else {
//				alert( 'Bad escape combination near ...' + encoded.substr(i) );
//				plaintext += "%[ERROR]";
				i++;
			}
		} else {
		   plaintext += ch;
		   i++;
		}
	} // while
    return plaintext;
}
// Removes leading whitespaces
function LTrim( value ) {
	var re = /\s*((\S+\s*)*)/;
	return value.replace(re, "$1");
}

// Removes ending whitespaces
function RTrim( value ) {
	var re = /((\s*\S+)*)\s*/;
	return value.replace(re, "$1");
}

// Removes leading and ending whitespaces
function trim( value ) {
	return LTrim(RTrim(value));
}
function SendForm_side(formname)
{
	var fullname = trim(document.getElementById("fullname").value);    
	if (fullname=="")
	{
			alert('Пожалуйста введите имя');
			document.getElementById("fullname").focus();		
			return false;
	}
	var country = trim(document.getElementById("countryName").value);
	if (country == "")
	{
			alert('');
			document.getElementById("country").focus();		
			return false;
	}				
	var area_code = trim(document.getElementById("c_area_code").value);    
	if (area_code=="")
	{
			alert('Пожалуйста введите кол страны');
			document.getElementById("area_code").focus();		
			return false;
	}
	if (!phoneIsValid(area_code)) {
	    alert('Некорректный номер телефона');
	    document.getElementById("area_code").focus();
	    return false;
	}
	var phone1 = trim(document.getElementById("c_phone1").value);    
	if (phone1=="")
	{
			alert('Пожалуйста введите номер телефона');
			document.getElementById("c_phone1").focus();		
			return false;
	}
	if (!phoneIsValid(phone1)) {
	    alert('Некорректный номер телефона');
	    document.getElementById("c_phone1").focus();
	    return false;
	}

	var email = trim(document.getElementById("c_email").value)
 	if (email=="")
	{
			alert('Пожалуйста введите E-mail');
			document.getElementById("c_email").focus();		
			return false;
	}	
	
	if(email.match(/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)==null)	
	{
	
		alert('Некорректный E-mail адрес');
		document.getElementById("c_email").focus();		
		return false;
	}
	document.getElementById("phone1").value = document.getElementById("c_area_code").value + document.getElementById("c_phone1").value;
	return true;
}

function SendCallForm(formname,IsSide)
{	
	var suffics;
	if (IsSide)
	   suffics = "_side";
	else
	   suffics = "_bottom";
	var firstname = trim(document.getElementById("call_firstname" + suffics).value);    
	if (firstname =="" || firstname=="Full Name")
	{
			alert('Пожалуйста введите имя');
			document.getElementById("call_firstname" + suffics).focus();		
			return false;
	}
	var lastname = trim(document.getElementById("call_lastname" + suffics).value);    
	if (lastname=="")
	{
			alert('Пожалуйста введите фамилию‏.');
			document.getElementById("call_lastname" + suffics).focus();		
			return false;
	}
	var phone1 = trim(document.getElementById("call_phone1" + suffics).value);    
	if (phone1 == "") {
	    alert('Пожалуйста введите номер телефона.');
	    document.getElementById("call_phone1" + suffics).focus();
	    return false;
	}
	if (!phoneIsValid(phone1)) 
	{
	    alert('Некорректный номер телефона');
	    document.getElementById("call_phone1" + suffics).focus();
	    return false;
	}
	var email = trim(document.getElementById("call_email" + suffics).value);    
	if (email == "")
	{
			alert('Пожалуйста введите E-mail');
			document.getElementById("call_email" + suffics).focus();		
			return false;
	}	
	else if(email.match(/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)==null)	
	{
	
			alert('Некорректный E-mail адрес');
			document.getElementById("call_email" + suffics).focus();		
			return false;
	}
	var message = trim(document.getElementById("call_message" + suffics).value);    
	if (message=="")
	{
			alert('Пожалуйста введите текст обращения');
			document.getElementById("call_message" + suffics).focus();		
			return false;
	}	
	return true;
}
	 
function SendForm_cus(formname)
{
	var firstname = trim(document.getElementById("first_name").value);    
	if (firstname=="")
	{
			alert('Пожалуйста введите имя');
			document.getElementById("first_name").focus();		
			return false;
	}
	var lastname = trim(document.getElementById("last_name").value);    
	if (lastname=="")
	{
			alert('Пожалуйста введите фамилию');
			document.getElementById("last_name").focus();		
			return false;
	}
	var country = trim(document.getElementById("countryName").value);
	if (country == "")
	{
			alert('');
			document.getElementById("country").focus();		
			return false;
	}				
	var area_code = trim(document.getElementById("c_area_code").value);    
	if (area_code=="")
	{
			alert('Пожалуйста введите кол страны');
			document.getElementById("area_code").focus();		
			return false;
	}
	if (!phoneIsValid(area_code)) {
	    alert('Некорректный номер телефона');
	    document.getElementById("area_code").focus();
	    return false;
	}
	var phone1 = trim(document.getElementById("c_phone1").value);    
	if (phone1=="")
	{
			alert('Пожалуйста введите номер телефона');
			document.getElementById("c_phone1").focus();		
			return false;
	}
	if (!phoneIsValid(phone1)) {
	    alert('Некорректный номер телефона');
	    document.getElementById("c_phone1").focus();
	    return false;
	}

	var email = trim(document.getElementById("c_email").value)
 	if (email=="")
	{
			alert('Пожалуйста введите E-mail');
			document.getElementById("c_email").focus();		
			return false;
	}	
	
	if(email.match(/^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)==null)	
	{
		alert('Некорректный E-mail адрес');
		document.getElementById("c_email").focus();		
		return false;
	}
	
		document.getElementById("phone1").value = document.getElementById("c_area_code").value + document.getElementById("c_phone1").value;
		return true;
}
function SendRecoveryForm()
{
	if (strTrim(document.getElementById("full_name_relax").value) == "")
	{
		alert("Пожалуйста введите имя и фамилию");
		document.getElementById("full_name_relax").focus();
		return false;
	}
	else if (strTrim(document.getElementById("email_relax").value)=="")
	{
			alert('יПожалуйста введите Email');
			document.getElementById("email_relax").focus();		
			return false;
	}	
	else if((document.getElementById("email_relax").value).match(/^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/)==null)	
	{
		alert('Некорректный E-mail адрес');
		document.getElementById("email_relax").focus();		
		return false;
	}	
	else if (strTrim(document.getElementById("phone_relax").value)=="")
	{
			alert('Пожалуйста введите номер телефона');
			document.getElementById("phone_relax").focus();		
			return false;
	}	
	return true;
}
