$(function(){  
    
   // SERVICIO
    var counter_service = 2;
    //agregamos el un IMPUT  para contparasar a java
    $('#service_tools-h').append('<input type="text"  name="num-services" id="num-services-h" value="'+(counter_service-1)+'"  style="width: 0px; height: 0px; padding:0;" />')
    $('#del_service-h').hide();
    
    $('#add_service-h').click(function(){        
        $('#service_tools-h').before('\
            <div class="well" id="service'+counter_service+'">'+                
                '<div class="row-fluid ">'+
                    '<div class="span4">Tipo de Servicio '+counter_service+'</div>'+
                    '<div class="span4">'+                          
                    '<input type="text"  name="type-service'+counter_service+'" value=""  align="left" id="type-service'+counter_service+'-h"  placeholder="Nombre del Servicios " required/>'+
                    '</div>'+
                    '</div>'+  
               '</div>'+ 
           '</div>');
        
        $('#del_service-h').fadeIn(0);
        counter_service++;         
    
        //poniendo el valor del contador en el div
        $('#num-services-h').attr('value', counter_service-1);
    });
    
    $('#del_service-h').click(function(){
        if(counter_service==3){
            $('#del_service-h').hide();
        }   
        counter_service--;
        $('#service'+counter_service).remove();      
        //poniendo el valor del contador en el div
        $('#num-services-h').attr('value', counter_service-1);
      
    });
    
  
    
    
});



