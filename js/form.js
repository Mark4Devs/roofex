$(document).ready(function(){
    //contact form variables
    let fnameInput,
    emailInput, 
    mssgInput;
    //validation values
    const validationValues = {
        empty1: "",
        empty2: null,
        fnamePattern: /^[A-Za-z ]+$/,  
        emailPattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        minLength: 5,
        maxLength: 250 
    };  
    //errors for contact form
    const errorsContact = {
        errorEmptyFname: false,
        errorFname: false,
        errorEmptyEmail: false,
        errorEmail: false,
        errorMssg: false,
        errorEmptyMssg: false 
    };
    $('#form input, #form textarea').on('keyup', function(){ 
        handleContactValidations(); 
    });
    function validateFnameInput(){
        fnameInput = $('#fname').val();      
        if(!fnameInput == validationValues.empty1 || !fnameInput == validationValues.empty2){ 
        errorsContact.errorEmptyFname = false; 
        }else if(fnameInput == validationValues.empty1 || fnameInput == validationValues.empty2){ 
            errorsContact.errorEmptyFname = true; 
        }
        if(fnameInput.match(validationValues.fnamePattern)){ 
            errorsContact.errorFname = false; 
        }else{
            errorsContact.errorFname = true;
        } 
    }
    function validateEmailInput(){ 
        emailInput = $('#email').val();      
        if(!emailInput == validationValues.empty1 || !emailInput == validationValues.empty2){ 
        errorsContact.errorEmptyEmail = false; 
        }else if(emailInput == validationValues.empty1 || emailInput == validationValues.empty2){ 
            errorsContact.errorEmptyEmail = true;
        }
        if(emailInput.match(validationValues.emailPattern)){  
            errorsContact.errorEmail = false; 
        }else{
            errorsContact.errorEmail = true;
        }
    } 
    function validateMssgInput(){ 
        mssgInput = $('#mssg').val();      
        if(!mssgInput == validationValues.empty1 || !mssgInput == validationValues.empty2){ 
            errorsContact.errorEmptyMssg = false; 
        }else if(mssgInput == validationValues.empty1 || mssgInput == validationValues.empty2){ 
            errorsContact.errorEmptyMssg = true;
        }
        if(mssgInput.length >= validationValues.minLength && mssgInput.length <= validationValues.maxLength){  
            errorsContact.errorMssg = false; 
        }else{
            errorsContact.errorMssg = true;
        }
    }
    function handleContactValidations(){
        validateFnameInput();  
        validateEmailInput(); 
        validateMssgInput();
        if(errorsContact.errorEmptyFname == false){ 
            $('#err-fname').hide();
        }else if(errorsContact.errorEmptyFname == true){ 
            $('#err-fname').show().text('*Field cannot be blank');
            return false; 
        }
        if(errorsContact.errorFname == false){
            $('#err-fname').hide(); 
        }else if(errorsContact.errorFname == true){ 
            $('#err-fname').show().text('*Invalid name');
            return false; 
        }
        if(errorsContact.errorEmptyEmail == false){ 
            $('#err-email').hide();
        }else if(errorsContact.errorEmptyEmail == true){ 
            $('#err-email').show().text('*Field cannot be blank'); 
            return false;
        }
        if(errorsContact.errorEmail == false){ 
            $('#err-email').hide(); 
        }else if(errorsContact.errorEmail == true){ 
            $('#err-email').show().text('*Invalid email');  
            return false;
        } 
        if(errorsContact.errorEmptyMssg == false){ 
            $('#err-mssg').hide();
        }else if(errorsContact.errorEmptyMssg == true){ 
            $('#err-mssg').show().text('*Field cannot be blank'); 
            return false;
        }
        if(errorsContact.errorMssg == true){ 
            $('#err-mssg').show().text('*The message should be between 5 and 250 characters');  
            return false;
        }else if(errorsContact.errorMssg == false){ 
            $('#err-mssg').hide(); 
            return true;
        }
    }
    $('#contactForm').on('submit', function(event){ 
        event.preventDefault(); 
        if(handleContactValidations() == true){
            var form = $(this);
            $("#form-modal").modal('show');
            $.ajax({
                url: form.attr('action'),
                method: form.attr('method'),
                data: form.serialize(),
            }).done(function (){ 
                $("#contactForm")[0].reset();
            });
        }else{
            return false; 
        } 
    }); 
});