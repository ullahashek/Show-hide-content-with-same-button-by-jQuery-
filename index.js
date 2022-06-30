    // Show and hide with one button
    //    function clickHandler() {
    //     $('#hide').toggle();
    //     $('#show').toggle();
    //     $('p').toggle();
    // }
        
    // $(document).ready(function(){
    //     $('#show').hide();
        
    //     $('#hide, #show').on('click', clickHandler);
    // });

    $("#hide").click(function(){
        let btnVal = $(this).text();

        if(btnVal == "Hide"){
            
            $("p").hide();
            $(this).text("Show");

        }else if(btnVal == "Show"){

            $("p").show();
            $(this).text("Hide");
        }           
    })

        
          
       