$(function () {
    
    "use strict";


    //CarSpiff - Car Detailing & Services Landing Page Template
    // init the validator
    $('#ajax-contact').validator();




    // when the form is submitted
    $('#ajax-contact').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "assets/phpscripts/contact.php";





            $( "#msgSubmit" ).removeClass( "hidden" );
            
            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {






                    // data = JSON object that contact.php returns
                    
                    $('#ajax-contact')[0].reset();
                    




                }
            });
            return false;
        }
    })
});