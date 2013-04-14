//define individual recurso view
var RecursoView = Backbone.View.extend({
    /*el: $("#detail"),
     className: "sig_popover",*/
    template: $("#recursoTemplate").html(),
    initialize: function() {
        _.bindAll(this);
        this.collection = new Servicios();
        this.collection.bind("reset", this.render, this);
        this.collection.fetch();
        this.render();
    },
    render: function() {
        var tmpl = _.template(this.template);
        $(this.el).html(tmpl(this.model.toJSON()));
        this.mapservicios(this.collection.toJSON());
        return this;
    },
    mapservicios: function(f) {

        //console.log(this.model.attributes.geometry);
        // console.log(this.collection.toJSON());
        var lat = this.model.attributes.geometry.coordinates[1];
        var lon = this.model.attributes.geometry.coordinates[0];

        window.setTimeout(function() {
            var map_id = 'examples.map-dg7cqh4z',
                    features = [],
                    interaction,
                    map = mapbox.map('map_servicios', null, null, [
                easey_handlers.DoubleClickHandler(),
                easey_handlers.DragHandler(),
                easey_handlers.TouchHandler()]);

            map.addLayer(mapbox.layer().id(map_id));
            map.centerzoom({
                lat: lat,
                lon: lon
            }, 15);

            map.setZoomRange(0, 18);
            mapServicioAdicional(f);
            function mapServicioAdicional(f) {
                features = f;
                markerLayer = mapbox.markers.layer().features(features);
                markerLayer.factory(function(m) {
                    var elem = simplestyle_factory_rub(m);
                    MM.addEvent(elem, 'click', function(e) {
                        map.ease.location({
                            lat: m.geometry.coordinates[1],
                            lon: m.geometry.coordinates[0]
                        }).zoom(map.zoom()).optimal();
                    });
                    return elem;
                });

                interaction = mapbox.markers.interaction(markerLayer);
                map.addLayer(markerLayer);
                map.ui.zoomer.add();
                map.ui.zoombox.add();
                map.ui.hash.add();
                interaction.formatter(function(feature) {
                    var o = '<h3 class="popover-geo-title">' + feature.nombre + '</h3>' +
                            '<p>' + feature.descripcion.substring(0, 100) + '...</p>' +
                            '<div class="well-toltip">' +
                            '<img style="height: 120px; width:120px;   margin-right: 3px;" src="' + feature.imagenes[0].url + '">' +
                            '<img style="height: 120px; width:120px;" src="' + feature.imagenes[1].url + '">' +
                            '</div>';
                    var a_button = '';
                    var a = feature.clase.replace(/\s/g, "");

                    a_button = '<a  role="button" class="btn"  href="#detail" onclick="call_detail_hotel(\'' + feature.idproducto + '\')"> Más Detalle</a>';

                    return o + a_button;
                });
            }
            ;
        }, 3000);

    }
});
/*
 //define master view
 var DirectoryView = Backbone.View.extend({
 el: $("#recurso"),
 initialize: function() {
 this.collection = new Recursos();
 this.collection.bind("reset", this.render, this);
 this.collection.fetch();
 
 console.log(this.collection);
 this.render();
 },
 render: function() {
 var that = this;
 _.each(this.collection.models, function(item) {
 that.renderRecurso(item);
 }, this);
 },
 renderRecurso: function(item) {
 var recursoView = new RecursoView({
 model: item
 });
 this.$el.append(recursoView.render().el);
 }
 
 });*/



