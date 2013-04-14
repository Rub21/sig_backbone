var Servicio = Backbone.Model.extend({
    initialize: function() {
        this.addproperties();
    },
    addproperties: function() {
        //there ara any images , we fixing that.
        var dir = 'imagenesDB/';
        var images = this.attributes.imagenes;
        _.each(images, function(value, key) {
            images[key].url = dir + images[key].url;
        });
        this.attributes.imagenes = images;
        //add Properties for marker
        var clase = this.attributes.clase.toLowerCase().replace(/\s/g, "");
        this.attributes['properties'] = {};
        this.attributes.properties['marker-size'] = 'large';
        this.attributes.properties['marker-symbol'] = clase;
        this.attributes.properties['marker-color'] = '#000000';
    }
});