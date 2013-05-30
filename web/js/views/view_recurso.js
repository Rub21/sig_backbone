/******************************************
 //define individual recurso view over Map
 *******************************************/
var RecursoView_ForMap = Backbone.View.extend({
    template: $("#recursoTemplate").html(),
    map: mapbox,
    events: {
        "click #select_hotel": "select_hotel",
        "click #select_restaurant": "select_restaurant",
        "click #select_transporte": "select_transporte",
        "click #select_complementario": "select_complementario",
        "click #select_todos": "select_todos"
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

        var _this = this;

        window.setTimeout(function() {
            _this.renderMap('examples.map-dg7cqh4z');
            _this.drawMarker(_this.collection.toJSON());
            console.log(_this.collection.toJSON());
        }, 1000);

        return this;
    },
    renderMap: function(map_id) {
        var lat = this.model.attributes.geometry.coordinates[1];
        var lon = this.model.attributes.geometry.coordinates[0];
        this.map = mapbox.map('map_servicios', null, null, [
            easey_handlers.DoubleClickHandler(),
            easey_handlers.DragHandler(),
            easey_handlers.TouchHandler()]);

        this.map.addLayer(mapbox.layer().id(map_id));
        this.map.centerzoom({
            lat: lat,
            lon: lon
        }, 15);
        this.map.setZoomRange(0, 18);
        this.map.ui.zoomer.add();
        this.map.ui.zoombox.add();
        this.map.ui.hash.add();
    },
    drawMarker: function(f) {
        var features = f;
        this.markerLayer = mapbox.markers.layer().features(features);
        this.markerLayer.factory(function(m) {
            var elem = simplestyle_factory_rub(m);
            $(elem).attr('lat', m.geometry.coordinates[1]);
            $(elem).attr('lon', m.geometry.coordinates[0]);
            return elem;
        });

        this.interaction = mapbox.markers.interaction(this.markerLayer);
        this.map.addLayer(this.markerLayer);
        this.interaction.formatter(function(feature) {
            var o = '<h5 class="popover-geo-title">' + feature.nombre + '</h5>' +
                    '<p>' + feature.descripcion.substring(0, 100) + '...</p>';
            return o;
        });


    },
    select_hotel: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
        this.markerLayer.filter(function(features) {
            var clase = features.clase.replace(/\s/g, "");
            if (clase === 'Hotel') {
                return true;
            }
        });

    },
    select_restaurant: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
        this.markerLayer.filter(function(features) {
            var clase = features.clase.replace(/\s/g, "");
            if (clase === 'Restaurant') {
                return true;
            }
        });
    },
    select_transporte: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
        this.markerLayer.filter(function(features) {
            var clase = features.clase.replace(/\s/g, "");
            if (clase === 'Transporte') {
                return true;
            }
        });
    },
    select_complementario: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
        this.markerLayer.filter(function(features) {
            var clase = features.clase.replace(/\s/g, "");
            if (clase === 'Complementario') {
                return true;
            }
        });
    },
    select_todos: function() {
        var scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();
        this.markerLayer.filter(function(features) {
            return true;
        });
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



