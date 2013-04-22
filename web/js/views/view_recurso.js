/******************************************
 //define individual recurso view over Map
 *******************************************/
var RecursoView_ForMap = Backbone.View.extend({
    /*el: $("#detail"),
     className: "sig_popover",*/
    template: $("#recursoTemplate").html(),    
    events: {
        "click #select_hotel": "select_hotel",
        "click #select_restaurant": "select_restaurant",
        "click #select_transporte": "select_transporte",
        "click #select_complementario": "select_complementario"
    },
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
                    var o = '<h5 class="popover-geo-title">' + feature.nombre + '</h5>' +
                            '<p>' + feature.descripcion.substring(0, 100) + '...</p>';
                    return o;
                });
            }
            ;
        }, 1000);
    },
    select_hotel: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
        /* markerLayer.filter(function(features) {
         var clase = features.clase.replace(/\s/g, "");
         if (clase === 'Hotel') {
         return true;
         }
         });*/

    },
    select_restaurant: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
    },
    select_transporte: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
    },
    select_complementario: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
    }
});
/**************************************
 //define individual for grid
 ***************************************/
var RecursoView_ForGrid = Backbone.View.extend({
    tagName: "li",
    className: "span3",
    template: $("#grid_recursoTemplate").html(),
    render: function() {
        var tmpl = _.template(this.template);
        $(this.el).html(tmpl(this.model.toJSON()));
        // console.log(this);
        return this;
    }
});
/************************************
 //define all  recursoin Grid 
 *************************************/

var Grid_RecursosView = Backbone.View.extend({
    el: $("#gid_recursos"),
    events: {
        "click .detail_grid": "detail",
        //"click #close": "close"
    },
    initialize: function() {
        this.collection = new Recursos();
        this.collection.bind("reset", this.render, this);
        this.collection.fetch();
        //console.log(this.collection);
        this.render();
    },
    render: function() {
        var that = this;
        _.each(this.collection.models, function(item) {
            that.renderRecurso(item);
        }, this);
    },
    renderRecurso: function(item) {
        var recursoView = new RecursoView_ForGrid({
            model: item
        });
        this.$el.append(recursoView.render().el);
    },
    detail: function(e) {
        $('#detail').empty();
        var idproducto = $(e.currentTarget).attr('id');        
        var found_recurso = this.collection.find(function(item) {
            return item.get('idproducto') === idproducto;
        });
        console.log(found_recurso);
        var recursoView = new RecursoView_ForMap({
            model: found_recurso
        });
        $('#backdrop').fadeIn(200);
        $('#detail').show(200);
        $('#close').show(200);
        // console.log(recursoView.render().el);
        $('#detail').append(recursoView.render().el);
    }/*,
     close: function() {
     alert('close');
     $('#backdrop').fadeOut(200);
     $('#detail').hide(200);
     $('#detail').empty();
     $('#close').hide(200);
     }*/
});



