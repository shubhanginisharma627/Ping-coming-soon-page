function email_validate(){
    
    var pattern= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email=$('#email').val();
    if(email===''){
       $('#message').css('display','block');
       $('#email').addClass('.error');
       return false;
    }
   else{
    if(pattern.test(email)){
        $('#message').css('display','none');
       $('#email').removeClass('.error');
       return true;
    }
    else{
        $('#message').css('display','block');
       $('#email').addClass('.error');
       return false;
    }
   }
}