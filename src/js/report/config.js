export default {
  assetUrls: {
    ionCSS: 'vendor/ion.rangeslider/css/ion.rangeSlider.css',
    ionSkinCSS: 'vendor/ion.rangeslider/css/ion.rangeSlider.skinNice.css',
    highcharts: 'http://code.highcharts.com/highcharts.js',
    highchartsMore: 'http://code.highcharts.com/highcharts-more.js',
    rangeSlider: 'vendor/ion.rangeslider/js/ion.rangeSlider.min.js'
  },
  webmap: {
    'f': 'json',
    'Web_Map_as_JSON': {
      mapOptions: {
        showAttribution: false,
        extent: null,
        spatialReference: { wkid: 102100 }
      },
      operationalLayers: [{
        id: 'layer0',
        title: 'layer0',
        opacity: 1,
        url: 'https://api.tiles.mapbox.com/v4/wri.c974eefc/${level}/${col}/${row}.png',
        type: 'WebTiledLayer',
        urlTemplate: 'https://api.tiles.mapbox.com/v4/wri.c974eefc/{level}/{col}/{row}.png?access_token=pk.eyJ1Ijoid3JpIiwiYSI6IjU3NWNiNGI4Njc4ODk4MmIyODFkYmJmM2NhNDgxMWJjIn0.v1tciCeBElMdpnrikGDrPg'
      }, {
        id: 'layer1',
        title: 'layer1',
        opacity: 1,
        url: 'http://hydrology.esri.com/arcgis/rest/services/WorldHydroReferenceOverlay/MapServer'
      }],
      exportOptions: null
    },
    'Format': 'PNG32',
    'Layout_Template': 'MAP_ONLY'
  },
  canopyDensity: 10,
  watershedId: 1003,
  watershedIdField: 'maj_bas',
  watershedName: 'maj_name',
  watershedQueryStringParam: 'fid',
  watershedUrl: 'http://gis-gfw.wri.org/arcgis/rest/services/hydrology/MapServer/1',
  customAnalysisAreasUrl: '',
  watershedSymbol: {
    'color': [255, 255, 255, 0],
    'outline': {
      'color': [64, 153, 206, 255],
      'width': 2,
      'type': 'esriSLS',
      'style': 'esriSLSSolid'
    },
    'type': 'esriSFS',
    'style': 'esriSFSSolid'
  },
  fireUrl: 'http://gis-potico.wri.org/arcgis/rest/services/Fires/Global_Fires/MapServer/4',

  mapsToPrint: [{
    name: 'overview'
  }, {
    name: 'recent-loss',
    layer: {
      'id': 'layer2',
      'title': 'layer2',
      'opacity': 1,
      'minScale': 0,
      'maxScale': 0,
      'url': 'http://50.18.182.188:6080/arcgis/rest/services/ForestCover_lossyear/ImageServer/',
      'bandIds': null,
      'compressionQuality': null,
      'interpolation': null,
      'renderingRule': {
        'rasterFunction': 'ForestCover_lossyear'
      }
    }
  }, {
    name: 'historical-loss',
    layer: {
      'id': 'layer2',
      'title': 'layer2',
      'opacity': 1,
      'minScale': 0,
      'maxScale': 0,
      'url': 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      'layers': [{
        'id': 6,
        'layerDefinition': {
          'source': {
            'type': 'mapLayer',
            'mapLayerId': 6
          }
        }
      }]
    }
  }, {
    name: 'erosion',
    layer: {
      'id': 'layer2',
      'title': 'layer2',
      'opacity': 1,
      'minScale': 0,
      'maxScale': 0,
      'url': 'http://gis-gfw.wri.org/arcgis/rest/services/hydrology/MapServer/',
      'visibleLayers': [4]
    }
  }, {
    name: 'fire',
    layer: {
      'id': 'layer2',
      'title': 'layer2',
      'opacity': 1,
      'minScale': 0,
      'maxScale': 0,
      'url': 'http://gis-potico.wri.org/arcgis/rest/services/Fires/Global_Fires/MapServer',
      'visibleLayers': [0, 1, 2, 3]
    }
  }, {
    name: 'water-stress',
    layer: {
      'id': 'layer2',
      'title': 'layer2',
      'opacity': 0.8,
      'minScale': 0,
      'maxScale': 0,
      'url': 'http://gis.wri.org/arcgis/rest/services/Aqueduct/aqueduct_global_2014/MapServer',
      'layers': [{
        'id': 1,
        'layerDefinition': {
          'source': {
            'type': 'mapLayer',
            'mapLayerId': 1
          }
        }
      }]
    }
  }],

  printer: 'http://gis-gfw.wri.org/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task/execute',
  simplifyGuess: 1000,
  mapPrintHeight: 300,
  mapPrintWidthSmall: 512,
  mapPrintWidthLarge: 1024,
  mapPrintDPI: 96
};