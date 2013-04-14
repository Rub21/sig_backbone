var Recurso = Backbone.Model.extend({
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
        var type_icon = this.attributes.tipo.toLowerCase().replace(/\s/g, "");
        this.attributes['properties'] = {};
        this.attributes.properties['marker-size'] = 'large';
        this.attributes.properties['marker-symbol'] = type_icon;
        this.attributes.properties['marker-color'] = '#000000';
        //console.log(this.attributes);
    }
});