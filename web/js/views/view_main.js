Mainview = Backbone.View.extend({
    el: 'body',
    //template: _.template($('#main_template').html()),
    map: mapbox,
    events: {
        "click #inicio": "inicio",
        "click .btn_detail": "detail",
        "click #close": "close", //close popover in app
        "click #arquitecturacolonial": "arquitecturacolonial",
        "click .simplestyle-marker": "simplestylemarker",
        // "click .result": "search",
        'change input': 'search'
    },
    initialize: function() {
        _.bindAll(this);
        // console.log(tpl.get('main'));
        this.collection = new Recursos();
        this.collection.bind("reset", this.render, this);
        this.collection.fetch();
        this.render();
        //this.map = null;

    },
    render: function() {
        // $(this.el).html(this.template());
        //this.fillSearch(this.collection.toJSON());

        this.renderMap('examples.map-vyofok3q');
        this.drawMarker(this.collection.toJSON());
        //this.getcollecitionJSON();
        return this;
    },
    renderMap: function(mapId) {
        this.map = mapbox.map('map');
        this.map.addLayer(mapbox.layer().id(mapId));
        // Basic UI Controls
        this.map.centerzoom({
            lat: -13.16048,
            lon: -74.22565
        }, 10);
        this.map.setZoomRange(0, 18);
        this.map.ui.zoomer.add();
        this.map.ui.zoombox.add();
        this.map.ui.attribution.add()
                .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');
        this.map.ui.fullscreen.add();
        this.map.ui.hash.add();
    },
    drawMarker: function(f) {
        var features = f;
        this.markerLayer = mapbox.markers.layer().features(features);
        this.markerLayer.factory(function(m) {
            var elem = simplestyle_factory_rub(m);
            $(elem).attr('lat', m.geometry.coordinates[1]);
            $(elem).attr('lon', m.geometry.coordinates[0]);
            /* MM.addEvent(elem, 'click', function(e) {
             console.log(elem);
             this.map.ease.location({
             lat: m.geometry.coordinates[1],
             lon: m.geometry.coordinates[0]
             }).zoom(this.map.zoom()).optimal();
             });*/
            return elem;
        });
        this.interaction = mapbox.markers.interaction(this.markerLayer);
        this.map.addLayer(this.markerLayer);
        this.interaction.formatter(function(feature) {
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
            return item.get('idproducto') === idproducto;
        });
        var recursoView = new RecursoView_ForMap({
            model: found_recurso
        });
        $('#backdrop').fadeIn(200);
        $('#detail').show(200);
        $('#close').show(200);
        // console.log(recursoView.render().el);
        $('#detail').append(recursoView.render().el);
    },
    close: function() {
        $('#backdrop').fadeOut(200);
        $('#detail').hide(200);
        $('#detail').empty();
        $('#close').hide(200);
    },
    inicio: function() {
        /*alert('Inicio');*/
        /*map.ui.zoomer.add();
         map.ui.zoombox.add();*/
    },
    //Selecciones
    arquitecturacolonial: function() {
        var features = this.collection.toJSON();
        this.markerLayer.filter(function(features) {
            if (features.categoria.toLowerCase().replace(/\s/g, "") === 'arquitecturacolonial') {
                return true;
            }
        });
    },
    simplestylemarker: function(e) {
        if (this.map.zoom() === 18) {
            reduce = 0.001;
        } else if (this.map.zoom() === 17) {
            reduce = 0.002;
        } else if (this.map.zoom() === 16) {
            reduce = 0.003;
        } else if (this.map.zoom() === 15) {
            reduce = 0.005;
        } else if (this.map.zoom() === 14) {
            reduce = 0.011;
        } else if (this.map.zoom() === 13) {
            reduce = 0.018;
        } else if (this.map.zoom() === 12) {
            reduce = 0.036;
        } else if (this.map.zoom() === 11) {
            reduce = 0.1;
        } else if (this.map.zoom() === 10) {
            reduce = 0.2;
        } else if (this.map.zoom() === 9) {
            reduce = 0.4;
        } else if (this.map.zoom() === 8) {
            reduce = 0.5;
        } else if (this.map.zoom() === 7) {
            reduce = 0.9;
        } else if (this.map.zoom() === 6) {
            reduce = 1.5;
        } else if (this.map.zoom() === 5) {
            reduce = 3;
        } else if (this.map.zoom() === 4) {
            reduce = 7;
        } else if (this.map.zoom() === 3) {
            reduce = 20;
        } else if (this.map.zoom() === 2) {
            reduce = 30;
        }

        var lat = parseFloat($(e.target).attr("lat")) + reduce;
        var lon = parseFloat($(e.target).attr("lon"));
        //console.log(lat)
        //console.log(lon)
        this.map.ease.location({
            lat: lat,
            lon: lon
        }).zoom(this.map.zoom()).optimal();
    },
    search: function(e) {

        var _this = this;
        setTimeout(function() {
            var val = $(e.currentTarget).val();
            _this.filter_a_marker(val);
        }, 10);
    },
    filter_a_marker: function(val) {

        //alert(val);        
        var features = this.collection.toJSON();
        console.log(features);
        var _this = this;
        
        this.markerLayer.filter(function(features) {
            if (features.nombre.toLowerCase().replace(/\s/g, "") === val.toLowerCase().replace(/\s/g, "")) {
                _this.map.ease.location({
                    lat: features.geometry.coordinates[1],
                    lon: features.geometry.coordinates[0]
                }).zoom(10).optimal();

                return true;
            }
        });



    },
    getcollecitionJSON: function() {
        //console.log(this.collection.toJSON());
        return this.collection.toJSON();
    }
});
