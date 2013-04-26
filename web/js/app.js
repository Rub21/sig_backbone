
simplestyle_factory_rub = function(feature) {
    var sizes = {
        small: [20, 50],
        medium: [30, 70],
        large: [35, 90]
    };
    var fp = feature.properties || {};
    var size = fp['marker-size'] || 'medium';
    var symbol = fp['marker-symbol'];
    var color = fp['marker-color'] || '7e7e7e';
    color = color.replace('#', '');
    var d = document.createElement('img');
    d.width = sizes[size][0];
    d.height = sizes[size][1];
    d.className = 'simplestyle-marker';
    d.alt = fp.title || '';
    d.src = 'http://dl.dropbox.com/u/43116811/icon-tur/' + symbol + '-l.png';
    var ds = d.style;
    ds.position = 'absolute';
    ds.clip = 'rect(auto auto ' + (sizes[size][1] * 0.75) + 'px auto)';
    ds.marginTop = -((sizes[size][1]) / 2) + 'px';
    ds.marginLeft = -(sizes[size][0] / 2) + 'px';
    ds.cursor = 'pointer';
    ds.pointerEvents = 'all';
    return d;
};


/*
 tpl.loadTemplates(['main', 'recurso'], function() {
 var app = new AppRouter();
 //Backbone.history.start();
 });*/

/*var app = new AppRouter();
Backbone.history.start();*/

  this.mainview = new Mainview();

//var main = new Mainview();
$(document).on('ready', function() {

    /*$('#close').click(function() {
        $('#backdrop').fadeOut(200);
        $('#detail').hide(200);
        $('#detail').empty();
        $('#close').hide(200);
    });*/
    
    
    
   




});