// JavaScript Document
function validation()
{  
  	if (document.user.name.value == "" )
  {
    alert("Name field is empty --Please Enter it agian");
    document.user.name.focus()
    return false;
  }

  if (document.user.email.value == "" )
  {
    alert("Email field is empty --Please Enter it agian");
    document.user.email.focus()
    return false;
  }
  if (document.user.email.value.indexOf("@") == -1 || document.user.email.value 
== "")
  {
    alert("Please completely fill up (EMail). info@eicrasoft.com");
    document.user.email.focus()
    return false;
  }

  if (document.user.email.value.indexOf(".") == -1 || document.user.email.value 
== "")
  {
    alert("Please completely fill up (EMail). info@eicrasoft.com  with [use .]");
    document.user.email.focus()
    return false;
  }

 	if (document.user.address.value == "" )
  {
    alert("Address field is empty --Please Enter it agian");
    document.user.address.focus()
    return false;
  }


	if (document.user.cell.value == "" )
  {
    alert("Call field is empty --Please Enter it agian");
    document.user.cell.focus()
    return false;
  }
  
  	if (document.user.coun.value == "" )
  {
    alert("Country field is empty --Please Enter it agian");
    document.user.coun.focus()
    return false;
  }
  

	if (document.user.sub.value == "" )
  {
    alert("Subject field is empty --Please Enter it agian");
    document.user.sub.focus()
    return false;
  }
  
  	if (document.user.mass.value == "" )
  {
    alert("Message field is empty --Please Enter it agian");
    document.user.mass.focus()
    return false;
  }
  
  	if (document.user.gen_code.value != document.user.sub_code.value )
  {
    alert("You Entered Wrong Code --Please Enter it agian");
    document.user.sub_code.focus()
    return false;
  }
  

}

function CheckIntegerNow(e) {
var isNS4 = (navigator.appName=="Netscape")?1:0;
 if(!isNS4){
  if ((e.keyCode > 7 && e.keyCode < 10) || (e.keyCode > 27 && e.keyCode < 30) || (e.keyCode == 46) || e.keyCode > 47 && e.keyCode < 58)
  {
   e.returnValue = e.keyCode ;
  }
  else
  {
   e.cancelBubble = true ;
   e.returnValue = false ;
  }
 } else {
  if ((e.which > 7 && e.which < 10) || (e.which > 27 && e.which < 30) || (e.which == 46) || e.which > 47 && e.which < 58) {
   return true;
  }
  return false;
 }
}
