
Mainview = Backbone.View.extend({
    el: 'body',
    template: _.template($('#main_template').html()),
    events: {
        "click #inicio": "inicio",
        "click .btn_detail": "detail",
        "click #close": "close"//close popover in app
    },
    initialize: function() {
        _.bindAll(this);
        this.collection = new Recursos();
        this.collection.bind("reset", this.render, this);
        this.collection.fetch();
        this.render();

    },
    render: function() {
        $(this.el).html(this.template());
        this.drawMarker(this.collection.toJSON());
        return this;
    },
    drawMarker: function(f) {

        var features = f;
        var map_id = 'examples.map-4l7djmvo',
                map = mapbox.map('map');
        map.addLayer(mapbox.layer().id(map_id));
        map.centerzoom({
            lat: -13.16048,
            lon: -74.22565
        }, 15);
        map.setZoomRange(0, 18);

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
            var o = '<h5 class="popover-geo-title">' + feature.nombre + '</h5>' +
                    '<p>' + feature.descripcion.substring(0, 100) + '...</p>' +
                    '<div class="well-toltip">' +
                    '<img style="height: 120px; width:120px;   margin-right: 3px;" src="' + feature.imagenes[0].url + '">' +
                    '<img style="height: 120px; width:120px;" src="' + feature.imagenes[1].url + '">' +
                    '</div>';
            var a_button = '';
            var a = feature.clase.replace(/\s/g, "");
            if (a == 'RecursoTurístico') {
                a_button = '<a  id="' + feature.idproducto + '" role="button" class="btn_detail btn"  href="#detail/:' + feature.idproducto + '"> Más Detalle</a>';
            }
            return o + a_button;
        });

        $('#map').removeClass('loading');

    },
    detail: function(e) {
        $('#detail').empty();
        var idproducto = $(e.currentTarget).attr('id');
        var found_recurso = this.collection.find(function(item) {
//console.log('Checking values', item, item.get('idproducto'), idproducto);
            return item.get('idproducto') === idproducto;
        });
        var recursoView = new RecursoView({
            model: found_recurso
        });
        $('#backdrop').fadeIn(200);
        $('#detail').show(200);
        $('#close').show(200);
        console.log(recursoView.render().el);
        $('#detail').append(recursoView.render().el);
        //this.$el.append(recursoView.render().el);
    },
    close: function() {
        $('#backdrop').fadeOut(200);
        $('#detail').hide(200);
        $('#detail').empty();
        $('#close').hide(200);
    },
    inicio: function() {
        alert('Inicio');
    }


});
