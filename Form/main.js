      // Form validation code will come here.
      function validate(){   
          var flag = 0;
          document.getElementById("firstname-validation").innerHTML = "";
          document.getElementById("phoneno-validation").innerHTML = "";
          document.getElementById("address-validation").innerHTML = "";
          document.getElementById("email-validation").innerHTML = "";
          document.getElementById("lastname-validation").innerHTML = "";
          document.getElementById("city-validation").innerHTML="";
          document.getElementById("gender-validation").innerHTML="";
         if( document.myForm.firstname.value == "" ){
            document.getElementById("firstname-validation").innerHTML = "This box can't be empty!";
            flag = 1;
         }
        if(document.myForm.phoneno.value == "" ){
            document.getElementById("phoneno-validation").innerHTML = "This box can't be empty!";
            flag = 1;
         }
        if( document.myForm.email.value == "" ){
            document.getElementById("email-validation").innerHTML = "This box can't be empty!";
             flag = 1;
         }
        var letters = /^[A-Za-z]+$/;
        var inputtxt = document.getElementById("firstname").value;
        if(!inputtxt.match(letters))
        {
            document.getElementById("firstname-validation").innerHTML = "Please enter alphabets only!";
            flag = 1;
        }
        var inputtxt = document.getElementById("lastname").value;
        if(inputtxt=="")
        {
            document.getElementById("lastname-validation").innerHTML = "";        
        }
        else if(!inputtxt.match(letters) )
        {
            document.getElementById("lastname-validation").innerHTML = "Please enter alphabets only!";     
            flag = 1;   
        }
        var numbers = /^[0-9]{7,10}$/;
        var inputtxt = document.getElementById("phoneno").value;
        if(!inputtxt.match(numbers))
        {
            document.getElementById("phoneno-validation").innerHTML = "Please enter 7-10 digits only!";
            flag = 1;
        }           
        var regex=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var inputtxt = document.getElementById("email").value;
        if(!inputtxt.match(regex))
        {
            document.getElementById("email-validation").innerHTML = "Please enter valid email id!"; 
            flag = 1;
        }
        if(document.getElementById("city").value=="None"){
            document.getElementById("city-validation").innerHTML = "Please enter valid city";
            flag = 1;
        }  
        var radios = document.getElementsByName("gender");
        var formValid = false;
        var i = 0;
        while (!formValid && i < radios.length) {
            if (radios[i].checked) formValid = true;
            i++;        
        }
        if (!formValid){
         document.getElementById("gender-validation").innerHTML="Please check for gender!";
        flag = 1;
        }
        if(flag==0){
            location.replace = 'newPage.html';
        }
      }