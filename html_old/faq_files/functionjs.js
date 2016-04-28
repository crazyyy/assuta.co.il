
function setMenuSize(){
var totalbarmenusize=750;
     var menusize=0;
     var difmenubar=0;
     var numoffitems=0;
     var width_to_add=0;
 
        var temp=0;
	
     $('.MM > li').each(function (i) {    
        menusize+=$(this).width();        
        numoffitems++;  
		
      });
      
      difmenubar=totalbarmenusize-menusize;     
     
      if (difmenubar > 5){
      width_to_add= Math.floor(difmenubar/numoffitems);                   
      $('.MM > li').each(function (i) {    
        menusize=$(this).width();
        menusize+=width_to_add;
        $(this).css('width',menusize);             
        temp+=menusize;
      });    
      }       
       //  alert(menusize) ;
      }



  function LargeImageShow(LImageUrl,ImageW,ImageH){
                ImageH += 20;
                ImageW += 20;
                largeImage = window.open(LImageUrl,'largeImage','location=no,left=200,top=200,menubar=no,height='+ ImageH +',width=' + ImageW);
                largeImage.focus();
            }
            
            function FixStr(strToFix){
              	var re,rv;
              	var rv = String(strToFix);
              	re = /[\{\}-]/g;
              	rv=rv.replace(re,"");
                return (rv);
            }
            
            function OffLineAlert(){
            	 alert('This option disabled  Off-Line.');
            	 return false;
            }

 var bName = navigator.appName;
 var bVer = parseInt(navigator.appVersion);
 var NS4 = (bName == "Netscape" && bVer >= 4);
 var IE4 = (bName == "Microsoft Internet Explorer" 
 && bVer >= 4);
 var NS3 = (bName == "Netscape" && bVer < 4);
 var IE3 = (bName == "Microsoft Internet Explorer" 
 && bVer < 4);
function f_flyShowWindow(id,placeholderid){
   var oFlyWindow = document.getElementById(id);
   if(oFlyWindow == null){
       return false;
   }
   var oPlaceholder = document.getElementById(placeholderid);
   oFlyWindow.style.display = "";      
   var iY = oPlaceholder.offsetTop + 30;
   var tbl = document.getElementById('tblDefault');   
   if(IE4){
    var Top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
	if (Top + iY + oFlyWindow.offsetHeight < tbl.offsetHeight) 
	    oFlyWindow.style.top = Top + iY + 'px';
	else
	    oFlyWindow.style.top = tbl.offsetHeight - oFlyWindow.offsetHeight + 'px';
   }else{
     oFlyWindow.style.top = iY + "px";            
  }
   window.status =  oFlyWindow.style.top + "," + Top;
   oFlyWindow.style.visibility = "visible";
}
				 
		
		
		
		var ii=1;
        var t=0;
        var fade=1;
		var stopSlide=false;
       
        function showContent(num){
		
        t=num;			
        if(ii<=t){
       document.getElementById("divNews"+ii).style.display="";
       setTimeout("hideContent()",6000);
	   }
       
        }

        function hideContent(){
		if(!stopSlide)
		{
		 fadeIt();
		 }

        }
		
		function fadeIt(){
		
		if(fade<5){
		document.getElementById("fadeTD").className ="fade"+fade;
		
		 fade++;
		 setTimeout("fadeIt()",150);
		 }
		 else{
		 document.getElementById("divNews"+ii).style.display="none";
		
		if(ii==t)
        ii=1;
        else 
        ii++;
				
 
				
		 document.getElementById("divNews"+ii).style.display="";
		  showNextItem();
		 
        
       
		  
		 }
		}
		function showNextItem(){
		
		
		if(fade>1){
		
		document.getElementById("fadeTD").className ="fade"+fade;
		fade--;
		setTimeout("showNextItem()",150);
		}
		else{
		
       
       
       document.getElementById("fadeTD").className="fade0";
		 setTimeout("hideContent()",6000);
		 }
       
		}	
		
		 // Prints any item by ID 
            function PrintItemkit(objItem,strParams){
            var defaultParams = 'toolbar=no,menubar=no,fullscreen=no ,scrollbars=yes,resizable=yes,width=560,height=575,top=10,left=10';
            var ItemWin;
            if(strParams!=null)
              {
                ItemWin = window.open('','_blank',strParams);
              } 
            else
              {
                ItemWin = window.open('','_blank',defaultParams);
              }
			  
            var myDoc = objItem.innerHTML ;
			//alert(myDoc);
            ItemWin.document.open();          
           	ItemWin.document.write('&lt;HTML&gt;&lt;HEAD&gt;&lt;LINK rel="stylesheet" type="text/css" href="<xsl:value-of select="$SiteURL"/>/template/main.css"&gt;&lt;BASE href="<xsl:value-of select="$SiteURL"/>"/&gt;&lt;/HEAD&gt;&lt;BODY&gt;&lt;TABLE  width="100%"&gt;&lt;TR&gt;&lt;TD style="padding:5px;" dir="rtl"&gt;' + myDoc + '&lt;/TD&gt;&lt;/TR&gt;&lt;/TABLE&gt;&lt;/BODY&gt;&lt;/HTML&gt;' );            		 
			ItemWin.focus();
//           ItemWin.document.close();
//            ItemWin.print();
//            ItemWin.close();
			}			
					