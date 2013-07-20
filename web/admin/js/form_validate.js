
/*jQuery.validator.setDefaults({
 debug: true,
 success: "valid"
 });*/
$(document).ready(function() {
    /*$("#form-r").validate({
     rules: {
     name: {required: true, maxlength: 100},
     traveling_distance: {maxlength: 100},
     entry_cost: {maxlength: 100},
     opening_hours: {maxlength: 100},
     temperatura: {maxlength: 100},
     // how_get: {},       
     lat: {required: true, number: true},
     lon: {required: true, number: true
     }
     },
     messages: {
     name: "Por favor, ingrese el nombre",
     traveling_distance: "Por favor,  escriba menos de 100 caracteres.",
     entry_cost: "Por favor,  escriba menos de 100 caracteres.",
     opening_hours: "Por favor,  escriba menos de 100 caracteres.",
     temperatura: "Por favor,  escriba menos de 100 caracteres.",
     // how_get: {},       
     lat: "Por favor, ingrese numeros",
     lon: "Por favor, ingrese numeros"
     }
     
     });*/

    $("#form-h").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion: {required: true},
            direccion: {required: true, maxlength: 100},
            telefono: {required: true, maxlength: 50},
            sitio_web: {url: true, maxlength: 100},
            correo_electronico: {email: true, maxlength: 100},
            precio_de_habitacion: {required: true, maxlength: 50},
            formas_de_pago: {maxlength: 100},
            lat: {required: true, number: true},
            lon: {required: true, number: true},
            file1: {required: true}

        },
        messages: {
            nombre: "Ingrese el nombre",
            descripcion: "Ingrese el campo",
            direccion: "Ingrese el campo, menos de 100 caracteres",
            telefono: "Ingrese el campo, menos de 50 caracteres",
            sitio_web: "Escriba una URL correcta,menos de 100 caracteres",
            correo_electronico: "Ingrese correo electronico correcto,menos de 100 caracteres",
            precio_de_habitacion: "Ingrese el campo, menos de 50 caracteres",
            formas_de_pago: "Ingrese dato correcto, menos de 100 caracteres",
            lat: "Ingrese numeros",
            lon: "Ingrese numeros",
            file1: "Ingrese una imagen"
        }

    });



    $("#form-re").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion: {required: true, maxlength: 200},
            direccion: {required: true, maxlength: 100},
            telefono: {required: true, maxlength: 50},
            sitio_web: {url: true, maxlength: 100},
            horario_de_atencion: {required: true, maxlength: 100},
            especialidad: {maxlength: 100},
            precio_promedio: {maxlength: 100},
            formas_de_pago: {maxlength: 100},
            lat: {required: true, number: true},
            lon: {required: true, number: true}
        },
        messages: {
            nombre: "Ingrese el nombre",
            descripcion: "Ingrese el campo",
            direccion: "Ingrese el campo, menos de 100 caracteres",
            telefono: "Ingrese el campo, menos de 50 caracteres",
            sitio_web: "Escriba una URL correcta,menos de 100 caracteres",
            horario_de_atencion: "Ingrese el campo",
            especialidad: "Ingrese menos de 100 caracteres",
            precio_promedio: "Ingrese menos de 100 caracteres",
            formas_de_pago: "Ingrese menos de 100 caracteres",
            lat: "Por favor, ingrese numeros",
            lon: "Por favor, ingrese numeros"
        }

    });
    $("#form-t").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion: {required: true, maxlength: 200},
            direccion: {required: true, maxlength: 100},
            telefono: {required: true, maxlength: 50},
            sitio_web: {url: true, maxlength: 100},
            horario_de_atencion: {required: true, maxlength: 100},
            horario_de_salida: {required: true, maxlength: 100},
            destinos: {required: true},
            lat: {required: true, number: true},
            lon: {required: true, number: true}
        },
        messages: {
            nombre: "Ingrese el nombre",
            descripcion: "Ingrese el campo",
            direccion: "Ingrese el campo, menos de 100 caracteres",
            telefono: "Ingrese el campo, menos de 50 caracteres",
            sitio_web: "Escriba una URL correcta,menos de 100 caracteres",
            horario_de_atencion: "Ingrese el campo",
            horario_de_salida: "Ingrese el campo",
            destinos: "Ingrese menos de 100 caracteres",           
            lat: "Por favor, ingrese numeros",
            lon: "Por favor, ingrese numeros"
        }

    });
    $("#form-c").validate({
        rules: {
            nombre: {required: true, maxlength: 100},
            descripcion: {required: true, maxlength: 200},
            direccion: {required: true, maxlength: 100},
            telefono: {required: true, maxlength: 50},
            sitio_web: {url: true, maxlength: 100},
            horario_de_atencion: {required: true, maxlength: 100},
            lat: {required: true, number: true},
            lon: {required: true, number: true}
        },
        messages: {
            nombre: "Ingrese el nombre",
            descripcion: "Ingrese el campo",
            direccion: "Ingrese el campo, menos de 100 caracteres",
            telefono: "Ingrese el campo, menos de 50 caracteres",
            sitio_web: "Escriba una URL correcta,menos de 100 caracteres",
            horario_de_atencion: "Ingrese el campo",         
            lat: "Por favor, ingrese numeros",
            lon: "Por favor, ingrese numeros"
        }

    });
});
