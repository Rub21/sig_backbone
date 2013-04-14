var Servicios = Backbone.Collection.extend({
    model: Servicio,
    url: 'http://localhost:8080/sig-backbone/SListarServicio',
    parse: function(response) {
        //console.log(response);
        return response;
    }
});
