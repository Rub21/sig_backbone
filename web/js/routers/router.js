
// Router
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "inicio",
        "detail/:id": "recursodetails",
        "recursos": "recursos",
        "#*":"15"

    },
    inicio: function() {
        this.mainview = new Mainview();
        //this.mainview.map=mapbox.map('map');
        /* this.wineList = new WineCollection();
         this.wineListView = new WineListView({model: this.wineList});
         this.wineList.fetch();
         $('#sidebar').html(this.wineListView.render().el);*/
    },
    recursodetails: function(id) {
        /*
         this.mainview = new Mainview();        
         var idproducto = id.substring(1, 10);      
         //console.log(this.mainview.collection);
         alert(idproducto)
         $('#detail').empty();
         var found_recurso = this.mainview.collection.find(function(item) {            
         return item.get('idproducto') === idproducto;
         });
         
         var recursoView = new RecursoView({
         model: found_recurso
         });
         
         $('#backdrop').fadeIn(200);
         $('#detail').show(200);
         $('#close').show(200);
         //console.log(recursoView.render().el);
         $('#detail').append(recursoView.render().el);*/
    },
    recursos: function() {
//alert('recursos');
        var grid_recursoview = new Grid_RecursosView();

    },
    '15': function(){
        
    }
});

