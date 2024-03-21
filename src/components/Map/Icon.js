import L from 'leaflet';

const iconISS = new L.Icon({
    iconUrl: require('./rocket-solid.svg'),
    iconRetinaUrl: require('./rocket-solid.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconISS };