var wms_layers = [];


        var lyr_ESRIImagery_0 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_1.png" /> Departamentos'
            });
var format_Proyectos_2 = new ol.format.GeoJSON();
var features_Proyectos_2 = format_Proyectos_2.readFeatures(json_Proyectos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectos_2.addFeatures(features_Proyectos_2);
var lyr_Proyectos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectos_2, 
                style: style_Proyectos_2,
                popuplayertitle: 'Proyectos',
                interactive: true,
                title: '<img src="styles/legend/Proyectos_2.png" /> Proyectos'
            });

lyr_ESRIImagery_0.setVisible(true);lyr_Departamentos_1.setVisible(true);lyr_Proyectos_2.setVisible(true);
var layersList = [lyr_ESRIImagery_0,lyr_Departamentos_1,lyr_Proyectos_2];
lyr_Departamentos_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', });
lyr_Proyectos_2.set('fieldAliases', {'Proyecto': 'Proyecto', 'Tipo_de_Se': 'Tipo_de_Se', 'Actividad': 'Actividad', 'lat': 'lat', 'long': 'long', });
lyr_Departamentos_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_Proyectos_2.set('fieldImages', {'Proyecto': 'TextEdit', 'Tipo_de_Se': 'TextEdit', 'Actividad': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr_Departamentos_1.set('fieldLabels', {'DEPARTAMEN': 'inline label - always visible', 'CAPITAL': 'no label', });
lyr_Proyectos_2.set('fieldLabels', {'Proyecto': 'inline label - always visible', 'Tipo_de_Se': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'lat': 'no label', 'long': 'no label', });
lyr_Proyectos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});