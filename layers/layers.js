var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mhxq_station_volum_1 = new ol.format.GeoJSON();
var features_mhxq_station_volum_1 = format_mhxq_station_volum_1.readFeatures(json_mhxq_station_volum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mhxq_station_volum_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mhxq_station_volum_1.addFeatures(features_mhxq_station_volum_1);
var lyr_mhxq_station_volum_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mhxq_station_volum_1, 
                style: style_mhxq_station_volum_1,
                interactive: false,
                title: '<img src="styles/legend/mhxq_station_volum_1.png" /> mhxq_station_volum'
            });
var format_mhxq_station_ZONAS_volumen_2 = new ol.format.GeoJSON();
var features_mhxq_station_ZONAS_volumen_2 = format_mhxq_station_ZONAS_volumen_2.readFeatures(json_mhxq_station_ZONAS_volumen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mhxq_station_ZONAS_volumen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mhxq_station_ZONAS_volumen_2.addFeatures(features_mhxq_station_ZONAS_volumen_2);
var lyr_mhxq_station_ZONAS_volumen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mhxq_station_ZONAS_volumen_2, 
                style: style_mhxq_station_ZONAS_volumen_2,
                interactive: true,
                title: '<img src="styles/legend/mhxq_station_ZONAS_volumen_2.png" /> mhxq_station_ZONAS_volumen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mhxq_station_volum_1.setVisible(true);lyr_mhxq_station_ZONAS_volumen_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mhxq_station_volum_1,lyr_mhxq_station_ZONAS_volumen_2];
lyr_mhxq_station_volum_1.set('fieldAliases', {'zonificacion': 'zonificacion', 'zipcode': 'zipcode', 'Reporte de Volumen__mhxq_zipcode_cda_zipcode': 'Reporte de Volumen__mhxq_zipcode_cda_zipcode', 'Reporte de Volumen__mhxq_zipcode_Promedio_diario': 'Reporte de Volumen__mhxq_zipcode_Promedio_diario', 'Reporte de Volumen__mhxq_zipcode_tag': 'Reporte de Volumen__mhxq_zipcode_tag', });
lyr_mhxq_station_ZONAS_volumen_2.set('fieldAliases', {'zonificacion': 'zonificacion', 'volumen_zonas_prom': 'volumen_zonas_prom', });
lyr_mhxq_station_volum_1.set('fieldImages', {'zonificacion': 'TextEdit', 'zipcode': 'TextEdit', 'Reporte de Volumen__mhxq_zipcode_cda_zipcode': 'TextEdit', 'Reporte de Volumen__mhxq_zipcode_Promedio_diario': 'TextEdit', 'Reporte de Volumen__mhxq_zipcode_tag': 'TextEdit', });
lyr_mhxq_station_ZONAS_volumen_2.set('fieldImages', {'zonificacion': 'TextEdit', 'volumen_zonas_prom': 'TextEdit', });
lyr_mhxq_station_volum_1.set('fieldLabels', {'zonificacion': 'no label', 'zipcode': 'no label', 'Reporte de Volumen__mhxq_zipcode_cda_zipcode': 'no label', 'Reporte de Volumen__mhxq_zipcode_Promedio_diario': 'no label', 'Reporte de Volumen__mhxq_zipcode_tag': 'no label', });
lyr_mhxq_station_ZONAS_volumen_2.set('fieldLabels', {'zonificacion': 'header label', 'volumen_zonas_prom': 'header label', });
lyr_mhxq_station_ZONAS_volumen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});