ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32630").setExtent([275912.458600, 849914.001800, 276721.036400, 851078.005900]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limite_demprise_du_projet_1 = new ol.format.GeoJSON();
var features_Limite_demprise_du_projet_1 = format_Limite_demprise_du_projet_1.readFeatures(json_Limite_demprise_du_projet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Limite_demprise_du_projet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_demprise_du_projet_1.addFeatures(features_Limite_demprise_du_projet_1);
var lyr_Limite_demprise_du_projet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_demprise_du_projet_1, 
                style: style_Limite_demprise_du_projet_1,
                popuplayertitle: 'Limite_d\'emprise_du_projet',
                interactive: false,
                title: '<img src="styles/legend/Limite_demprise_du_projet_1.png" /> Limite_d\'emprise_du_projet'
            });
var format_Chausse_projete_au_niveau_de_sol_2 = new ol.format.GeoJSON();
var features_Chausse_projete_au_niveau_de_sol_2 = format_Chausse_projete_au_niveau_de_sol_2.readFeatures(json_Chausse_projete_au_niveau_de_sol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Chausse_projete_au_niveau_de_sol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chausse_projete_au_niveau_de_sol_2.addFeatures(features_Chausse_projete_au_niveau_de_sol_2);
var lyr_Chausse_projete_au_niveau_de_sol_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chausse_projete_au_niveau_de_sol_2, 
                style: style_Chausse_projete_au_niveau_de_sol_2,
                popuplayertitle: 'Chaussée_projetée_au_niveau_de_sol',
                interactive: false,
                title: '<img src="styles/legend/Chausse_projete_au_niveau_de_sol_2.png" /> Chaussée_projetée_au_niveau_de_sol'
            });
var format_Trottoire_projet_3 = new ol.format.GeoJSON();
var features_Trottoire_projet_3 = format_Trottoire_projet_3.readFeatures(json_Trottoire_projet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Trottoire_projet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trottoire_projet_3.addFeatures(features_Trottoire_projet_3);
var lyr_Trottoire_projet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trottoire_projet_3, 
                style: style_Trottoire_projet_3,
                popuplayertitle: 'Trottoire_projeté',
                interactive: false,
                title: '<img src="styles/legend/Trottoire_projet_3.png" /> Trottoire_projeté'
            });
var format_CHAUSSE_DENIV1_4 = new ol.format.GeoJSON();
var features_CHAUSSE_DENIV1_4 = format_CHAUSSE_DENIV1_4.readFeatures(json_CHAUSSE_DENIV1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_CHAUSSE_DENIV1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAUSSE_DENIV1_4.addFeatures(features_CHAUSSE_DENIV1_4);
var lyr_CHAUSSE_DENIV1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHAUSSE_DENIV1_4, 
                style: style_CHAUSSE_DENIV1_4,
                popuplayertitle: 'CHAUSSE_DENIV1',
                interactive: false,
                title: '<img src="styles/legend/CHAUSSE_DENIV1_4.png" /> CHAUSSE_DENIV1'
            });
var format_CHAUSSE_DENIV2_5 = new ol.format.GeoJSON();
var features_CHAUSSE_DENIV2_5 = format_CHAUSSE_DENIV2_5.readFeatures(json_CHAUSSE_DENIV2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_CHAUSSE_DENIV2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAUSSE_DENIV2_5.addFeatures(features_CHAUSSE_DENIV2_5);
var lyr_CHAUSSE_DENIV2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHAUSSE_DENIV2_5, 
                style: style_CHAUSSE_DENIV2_5,
                popuplayertitle: 'CHAUSSE_DENIV2',
                interactive: false,
                title: '<img src="styles/legend/CHAUSSE_DENIV2_5.png" /> CHAUSSE_DENIV2'
            });
var format_CHAUSSE_DENIV3_6 = new ol.format.GeoJSON();
var features_CHAUSSE_DENIV3_6 = format_CHAUSSE_DENIV3_6.readFeatures(json_CHAUSSE_DENIV3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_CHAUSSE_DENIV3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAUSSE_DENIV3_6.addFeatures(features_CHAUSSE_DENIV3_6);
var lyr_CHAUSSE_DENIV3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHAUSSE_DENIV3_6, 
                style: style_CHAUSSE_DENIV3_6,
                popuplayertitle: 'CHAUSSE_DENIV3',
                interactive: false,
                title: '<img src="styles/legend/CHAUSSE_DENIV3_6.png" /> CHAUSSE_DENIV3'
            });
var format_Chausse_projete_dnivele_7 = new ol.format.GeoJSON();
var features_Chausse_projete_dnivele_7 = format_Chausse_projete_dnivele_7.readFeatures(json_Chausse_projete_dnivele_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Chausse_projete_dnivele_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chausse_projete_dnivele_7.addFeatures(features_Chausse_projete_dnivele_7);
var lyr_Chausse_projete_dnivele_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chausse_projete_dnivele_7, 
                style: style_Chausse_projete_dnivele_7,
                popuplayertitle: 'Chaussée_projetée_dénivelée',
                interactive: false,
                title: '<img src="styles/legend/Chausse_projete_dnivele_7.png" /> Chaussée_projetée_dénivelée'
            });
var format_Zone_prive_8 = new ol.format.GeoJSON();
var features_Zone_prive_8 = format_Zone_prive_8.readFeatures(json_Zone_prive_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Zone_prive_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_prive_8.addFeatures(features_Zone_prive_8);
var lyr_Zone_prive_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_prive_8, 
                style: style_Zone_prive_8,
                popuplayertitle: 'Zone_privée',
                interactive: false,
                title: '<img src="styles/legend/Zone_prive_8.png" /> Zone_privée'
            });
var format_Zone_verte_projete_9 = new ol.format.GeoJSON();
var features_Zone_verte_projete_9 = format_Zone_verte_projete_9.readFeatures(json_Zone_verte_projete_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Zone_verte_projete_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_verte_projete_9.addFeatures(features_Zone_verte_projete_9);
var lyr_Zone_verte_projete_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_verte_projete_9, 
                style: style_Zone_verte_projete_9,
                popuplayertitle: 'Zone_verte_projetée',
                interactive: false,
                title: '<img src="styles/legend/Zone_verte_projete_9.png" /> Zone_verte_projetée'
            });
var format_PEINTURE_HACHURE_10 = new ol.format.GeoJSON();
var features_PEINTURE_HACHURE_10 = format_PEINTURE_HACHURE_10.readFeatures(json_PEINTURE_HACHURE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_PEINTURE_HACHURE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEINTURE_HACHURE_10.addFeatures(features_PEINTURE_HACHURE_10);
var lyr_PEINTURE_HACHURE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEINTURE_HACHURE_10, 
                style: style_PEINTURE_HACHURE_10,
                popuplayertitle: 'PEINTURE_HACHURE',
                interactive: false,
                title: '<img src="styles/legend/PEINTURE_HACHURE_10.png" /> PEINTURE_HACHURE'
            });
var format_PEINTURE_LIGNE_ACCELER_11 = new ol.format.GeoJSON();
var features_PEINTURE_LIGNE_ACCELER_11 = format_PEINTURE_LIGNE_ACCELER_11.readFeatures(json_PEINTURE_LIGNE_ACCELER_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_PEINTURE_LIGNE_ACCELER_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEINTURE_LIGNE_ACCELER_11.addFeatures(features_PEINTURE_LIGNE_ACCELER_11);
var lyr_PEINTURE_LIGNE_ACCELER_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEINTURE_LIGNE_ACCELER_11, 
                style: style_PEINTURE_LIGNE_ACCELER_11,
                popuplayertitle: 'PEINTURE_LIGNE_ACCELER',
                interactive: false,
                title: '<img src="styles/legend/PEINTURE_LIGNE_ACCELER_11.png" /> PEINTURE_LIGNE_ACCELER'
            });
var format_PEINTURE_LIGNE_AXE_12 = new ol.format.GeoJSON();
var features_PEINTURE_LIGNE_AXE_12 = format_PEINTURE_LIGNE_AXE_12.readFeatures(json_PEINTURE_LIGNE_AXE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_PEINTURE_LIGNE_AXE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEINTURE_LIGNE_AXE_12.addFeatures(features_PEINTURE_LIGNE_AXE_12);
var lyr_PEINTURE_LIGNE_AXE_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEINTURE_LIGNE_AXE_12, 
                style: style_PEINTURE_LIGNE_AXE_12,
                popuplayertitle: 'PEINTURE_LIGNE_AXE',
                interactive: false,
                title: '<img src="styles/legend/PEINTURE_LIGNE_AXE_12.png" /> PEINTURE_LIGNE_AXE'
            });
var format_PEINTURE_LIGNE_CONTINU_13 = new ol.format.GeoJSON();
var features_PEINTURE_LIGNE_CONTINU_13 = format_PEINTURE_LIGNE_CONTINU_13.readFeatures(json_PEINTURE_LIGNE_CONTINU_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_PEINTURE_LIGNE_CONTINU_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEINTURE_LIGNE_CONTINU_13.addFeatures(features_PEINTURE_LIGNE_CONTINU_13);
var lyr_PEINTURE_LIGNE_CONTINU_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEINTURE_LIGNE_CONTINU_13, 
                style: style_PEINTURE_LIGNE_CONTINU_13,
                popuplayertitle: 'PEINTURE_LIGNE_CONTINU',
                interactive: false,
                title: '<img src="styles/legend/PEINTURE_LIGNE_CONTINU_13.png" /> PEINTURE_LIGNE_CONTINU'
            });
var format_PEINTURE_LIGNE_PIETON_14 = new ol.format.GeoJSON();
var features_PEINTURE_LIGNE_PIETON_14 = format_PEINTURE_LIGNE_PIETON_14.readFeatures(json_PEINTURE_LIGNE_PIETON_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_PEINTURE_LIGNE_PIETON_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEINTURE_LIGNE_PIETON_14.addFeatures(features_PEINTURE_LIGNE_PIETON_14);
var lyr_PEINTURE_LIGNE_PIETON_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEINTURE_LIGNE_PIETON_14, 
                style: style_PEINTURE_LIGNE_PIETON_14,
                popuplayertitle: 'PEINTURE_LIGNE_PIETON',
                interactive: false,
                title: '<img src="styles/legend/PEINTURE_LIGNE_PIETON_14.png" /> PEINTURE_LIGNE_PIETON'
            });
var format_PEINTURE_LIGNE_RIVE_15 = new ol.format.GeoJSON();
var features_PEINTURE_LIGNE_RIVE_15 = format_PEINTURE_LIGNE_RIVE_15.readFeatures(json_PEINTURE_LIGNE_RIVE_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_PEINTURE_LIGNE_RIVE_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEINTURE_LIGNE_RIVE_15.addFeatures(features_PEINTURE_LIGNE_RIVE_15);
var lyr_PEINTURE_LIGNE_RIVE_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEINTURE_LIGNE_RIVE_15, 
                style: style_PEINTURE_LIGNE_RIVE_15,
                popuplayertitle: 'PEINTURE_LIGNE_RIVE',
                interactive: false,
                title: '<img src="styles/legend/PEINTURE_LIGNE_RIVE_15.png" /> PEINTURE_LIGNE_RIVE'
            });
var format_PEINTURE_LIGNE_STATIONNEMENT_16 = new ol.format.GeoJSON();
var features_PEINTURE_LIGNE_STATIONNEMENT_16 = format_PEINTURE_LIGNE_STATIONNEMENT_16.readFeatures(json_PEINTURE_LIGNE_STATIONNEMENT_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_PEINTURE_LIGNE_STATIONNEMENT_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEINTURE_LIGNE_STATIONNEMENT_16.addFeatures(features_PEINTURE_LIGNE_STATIONNEMENT_16);
var lyr_PEINTURE_LIGNE_STATIONNEMENT_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEINTURE_LIGNE_STATIONNEMENT_16, 
                style: style_PEINTURE_LIGNE_STATIONNEMENT_16,
                popuplayertitle: 'PEINTURE_LIGNE_STATIONNEMENT',
                interactive: false,
                title: '<img src="styles/legend/PEINTURE_LIGNE_STATIONNEMENT_16.png" /> PEINTURE_LIGNE_STATIONNEMENT'
            });
var format_PEINTURE_LIGNE_ZEBRAGE_17 = new ol.format.GeoJSON();
var features_PEINTURE_LIGNE_ZEBRAGE_17 = format_PEINTURE_LIGNE_ZEBRAGE_17.readFeatures(json_PEINTURE_LIGNE_ZEBRAGE_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_PEINTURE_LIGNE_ZEBRAGE_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEINTURE_LIGNE_ZEBRAGE_17.addFeatures(features_PEINTURE_LIGNE_ZEBRAGE_17);
var lyr_PEINTURE_LIGNE_ZEBRAGE_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEINTURE_LIGNE_ZEBRAGE_17, 
                style: style_PEINTURE_LIGNE_ZEBRAGE_17,
                popuplayertitle: 'PEINTURE_LIGNE_ZEBRAGE',
                interactive: false,
                title: '<img src="styles/legend/PEINTURE_LIGNE_ZEBRAGE_17.png" /> PEINTURE_LIGNE_ZEBRAGE'
            });
var format_Lignesdeparcours_18 = new ol.format.GeoJSON();
var features_Lignesdeparcours_18 = format_Lignesdeparcours_18.readFeatures(json_Lignesdeparcours_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Lignesdeparcours_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignesdeparcours_18.addFeatures(features_Lignesdeparcours_18);
var lyr_Lignesdeparcours_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignesdeparcours_18, 
                style: style_Lignesdeparcours_18,
                popuplayertitle: 'Lignes de parcours',
                interactive: true,
    title: 'Lignes de parcours<br />\
    <img src="styles/legend/Lignesdeparcours_18_0.png" /> Corridor_Sud ->  Dar-es-Salem<br />\
    <img src="styles/legend/Lignesdeparcours_18_1.png" /> Dar-es-Salem ->  Koko<br />\
    <img src="styles/legend/Lignesdeparcours_18_2.png" /> Dar-es-Salem ->  UTB<br />\
    <img src="styles/legend/Lignesdeparcours_18_3.png" /> Dar-es-Salem -> Corridor_Sud<br />\
    <img src="styles/legend/Lignesdeparcours_18_4.png" /> Koko - > Marché_d\'Oignons<br />\
    <img src="styles/legend/Lignesdeparcours_18_5.png" /> Koko ->  Corridor_Sud<br />\
    <img src="styles/legend/Lignesdeparcours_18_6.png" /> Koko ->  UTB<br />\
    <img src="styles/legend/Lignesdeparcours_18_7.png" /> UTB ->  Koko<br />\
    <img src="styles/legend/Lignesdeparcours_18_8.png" /> UTB -> Dar-es-Salem<br />\
    <img src="styles/legend/Lignesdeparcours_18_9.png" /> <br />' });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_Limite_demprise_du_projet_1,lyr_Chausse_projete_au_niveau_de_sol_2,lyr_Trottoire_projet_3,lyr_CHAUSSE_DENIV1_4,lyr_CHAUSSE_DENIV2_5,lyr_CHAUSSE_DENIV3_6,lyr_Chausse_projete_dnivele_7,lyr_Zone_prive_8,lyr_Zone_verte_projete_9,lyr_PEINTURE_HACHURE_10,lyr_PEINTURE_LIGNE_ACCELER_11,lyr_PEINTURE_LIGNE_AXE_12,lyr_PEINTURE_LIGNE_CONTINU_13,lyr_PEINTURE_LIGNE_PIETON_14,lyr_PEINTURE_LIGNE_RIVE_15,lyr_PEINTURE_LIGNE_STATIONNEMENT_16,lyr_PEINTURE_LIGNE_ZEBRAGE_17,],
                                fold: 'open',
                                title: 'group1'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Limite_demprise_du_projet_1.setVisible(true);lyr_Chausse_projete_au_niveau_de_sol_2.setVisible(true);lyr_Trottoire_projet_3.setVisible(true);lyr_CHAUSSE_DENIV1_4.setVisible(true);lyr_CHAUSSE_DENIV2_5.setVisible(true);lyr_CHAUSSE_DENIV3_6.setVisible(true);lyr_Chausse_projete_dnivele_7.setVisible(true);lyr_Zone_prive_8.setVisible(true);lyr_Zone_verte_projete_9.setVisible(true);lyr_PEINTURE_HACHURE_10.setVisible(true);lyr_PEINTURE_LIGNE_ACCELER_11.setVisible(true);lyr_PEINTURE_LIGNE_AXE_12.setVisible(true);lyr_PEINTURE_LIGNE_CONTINU_13.setVisible(true);lyr_PEINTURE_LIGNE_PIETON_14.setVisible(true);lyr_PEINTURE_LIGNE_RIVE_15.setVisible(true);lyr_PEINTURE_LIGNE_STATIONNEMENT_16.setVisible(true);lyr_PEINTURE_LIGNE_ZEBRAGE_17.setVisible(true);lyr_Lignesdeparcours_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_group1,lyr_Lignesdeparcours_18];
lyr_Limite_demprise_du_projet_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Chausse_projete_au_niveau_de_sol_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Trottoire_projet_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CHAUSSE_DENIV1_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CHAUSSE_DENIV2_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CHAUSSE_DENIV3_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Chausse_projete_dnivele_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zone_prive_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zone_verte_projete_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PEINTURE_HACHURE_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PEINTURE_LIGNE_ACCELER_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', });
lyr_PEINTURE_LIGNE_AXE_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', });
lyr_PEINTURE_LIGNE_CONTINU_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', });
lyr_PEINTURE_LIGNE_PIETON_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', });
lyr_PEINTURE_LIGNE_RIVE_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', });
lyr_PEINTURE_LIGNE_STATIONNEMENT_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', });
lyr_PEINTURE_LIGNE_ZEBRAGE_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', });
lyr_Lignesdeparcours_18.set('fieldAliases', {'ID': 'ID', 'Nom de l\'itinéraire': 'Nom de l\'itinéraire', 'Longueur du parcours (m)': 'Longueur du parcours (m)', 'Temps de parcours sur l\'échnageur projeté (min)': 'Temps de parcours sur l\'échnageur projeté (min)', 'Point de départ': 'Point de départ', 'Point d\'arrivée': 'Point d\'arrivée', 'Temps de parcour actuelle sur le giratoire en HPS (min)': 'Temps de parcour actuelle sur le giratoire en HPS (min)', 'Gain de temps (min)': 'Gain de temps (min)', 'Gain de temps (%)': 'Gain de temps (%)', });
lyr_Limite_demprise_du_projet_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Chausse_projete_au_niveau_de_sol_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Trottoire_projet_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CHAUSSE_DENIV1_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CHAUSSE_DENIV2_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CHAUSSE_DENIV3_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Chausse_projete_dnivele_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zone_prive_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zone_verte_projete_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PEINTURE_HACHURE_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PEINTURE_LIGNE_ACCELER_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PEINTURE_LIGNE_AXE_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PEINTURE_LIGNE_CONTINU_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PEINTURE_LIGNE_PIETON_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PEINTURE_LIGNE_RIVE_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PEINTURE_LIGNE_STATIONNEMENT_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_PEINTURE_LIGNE_ZEBRAGE_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Lignesdeparcours_18.set('fieldImages', {'ID': 'TextEdit', 'Nom de l\'itinéraire': 'TextEdit', 'Longueur du parcours (m)': 'TextEdit', 'Temps de parcours sur l\'échnageur projeté (min)': 'TextEdit', 'Point de départ': 'TextEdit', 'Point d\'arrivée': 'TextEdit', 'Temps de parcour actuelle sur le giratoire en HPS (min)': 'TextEdit', 'Gain de temps (min)': 'TextEdit', 'Gain de temps (%)': 'TextEdit', });
lyr_Limite_demprise_du_projet_1.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Chausse_projete_au_niveau_de_sol_2.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Trottoire_projet_3.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CHAUSSE_DENIV1_4.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'Entity': 'inline label - visible with data', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CHAUSSE_DENIV2_5.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CHAUSSE_DENIV3_6.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Chausse_projete_dnivele_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zone_prive_8.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zone_verte_projete_9.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PEINTURE_HACHURE_10.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PEINTURE_LIGNE_ACCELER_11.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', });
lyr_PEINTURE_LIGNE_AXE_12.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', });
lyr_PEINTURE_LIGNE_CONTINU_13.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', });
lyr_PEINTURE_LIGNE_PIETON_14.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', });
lyr_PEINTURE_LIGNE_RIVE_15.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', });
lyr_PEINTURE_LIGNE_STATIONNEMENT_16.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', });
lyr_PEINTURE_LIGNE_ZEBRAGE_17.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', });
lyr_Lignesdeparcours_18.set('fieldLabels', {'ID': 'no label', 'Nom de l\'itinéraire': 'inline label - always visible', 'Longueur du parcours (m)': 'inline label - always visible', 'Temps de parcours sur l\'échnageur projeté (min)': 'inline label - always visible', 'Point de départ': 'inline label - always visible', 'Point d\'arrivée': 'inline label - always visible', 'Temps de parcour actuelle sur le giratoire en HPS (min)': 'inline label - always visible', 'Gain de temps (min)': 'inline label - always visible', 'Gain de temps (%)': 'inline label - always visible', });
lyr_Lignesdeparcours_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});