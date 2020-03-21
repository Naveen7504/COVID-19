var indiaCoord = [ 77.216721, 28.644800];
var mapInstance;
document.addEventListener("DOMContentLoaded", () => {
  mapInstance = new initializeMap("map");
  var clusterLayer = getClusterLayer(covidData);
  mapInstance.map.addLayer(clusterLayer);
});

function initializeMap(target) {
  var baseLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  this.map = new ol.Map({
    target: target,
    view: new ol.View({
      center: new ol.proj.fromLonLat(indiaCoord),
      zoom:4
    }),
    minZoom:4,
    layers: [baseLayer]
  });
}

function getClusterLayer(data) {
  var places = new ol.source.Vector();
  data.forEach((item, i) => {
    var feature = new ol.Feature({
      geometry: new ol.geom.Point(new ol.proj.fromLonLat([item.coordinates[1],item.coordinates[0]]))
    });
    feature.setProperties(item);
    places.addFeature(feature);
  });
  var cluster = new ol.source.Cluster({
    distance: 40,
    source: places
  });
  var clusters = new ol.layer.Vector({
    source: cluster,
    style: covidStyle
  });
  return clusters;
}

function covidStyle(feature, resolution){
  // console.log("resolution",resolution);
  var size = feature.get("features").length;
  var sum = 0;
  feature.get("features").forEach((item, i) => {
    sum += item.getProperties().TCC + item.getProperties().TCCFN;
  });
  var radius = 100 * (sum/totalInfected);
  radius = Math.floor(radius);
  console.log("radius",radius,"sum",sum,"totalInfected",totalInfected);
  if(radius < 10){
    radius = 10;
  }
  var opacity = (2*(sum/totalInfected)).toFixed(1);
  opacity = parseFloat(opacity);
  if(opacity < 0.5){
    opacity = 0.5;
  }
  var styles = [];
  styles.push(
    new ol.style.Style({
      image: new ol.style.Circle({
        radius: radius,
        stroke: new ol.style.Stroke({ color: 'rgba(255, 153, 0, '+opacity+')' }),
        fill: new ol.style.Fill({ color: 'rgba(255, 153, 0, '+opacity+')'}),
      }),
      text: new ol.style.Text({
        text: sum.toString(),
        fill: new ol.style.Fill({ color: "black"})
      })
    })
  );
  return styles;
}
