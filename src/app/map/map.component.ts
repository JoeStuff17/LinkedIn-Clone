import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Geocoder, geocoder, geocoders } from 'leaflet-control-geocoder';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, AfterViewInit {
  private map: any;
  constructor() { }

  greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],

  });

  ngOnInit() {
  }



  ngAfterViewInit() {
    this.initMap();
  }
  private initMap(): void {
    this.map = L.map('map').setView([12.978889, 77.591667], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // var geo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 17,
    //   attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    // });

    // var dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    //   maxZoom: 20,
    //   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    // });

    // var earth = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    //   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    // });


    // L.marker([12.978889, 77.591667], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('Dr.Ambethkar statue <br> Bus station')
    //   .openPopup();

    // L.marker([12.9081357, 77.64760799999999], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('HSR Layout <br> Bus station')
    //   .openPopup();

    // L.marker([12.934533, 77.626579], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('Koramangala <br> Bus station')
    //   .openPopup();

    // L.marker([13.0184435, 77.678121499999], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('Ramamurthy nagar <br> Bus station')
    //   .openPopup();

    // L.marker([13.0145937, 77.551404699999999], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('Mahalakshmi Layout <br> Bus station')
    //   .openPopup();

    // L.marker([12.9242199, 77.51911949999999], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('Rajeshwari nagar <br> Bus station')
    //   .openPopup();

    // L.marker([13.080093, 77.5607768], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('HMT Layout <br> Bus station')
    //   .openPopup();

    // L.marker([12.987730, 77.503304], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('Sunkadakatte <br> Bus station')
    //   .openPopup();

    // L.marker([13.037436, 77.572599], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('Amarjyothi Layout <br> Bus station')
    //   .openPopup();

    // L.marker([12.982845212463, 77.6609433669778], { icon: this.greenIcon }).addTo(this.map)
    //   .bindPopup('CV.Raman Nagar <br> Bus station')
    //   .openPopup();




    L.Routing.control({
      waypoints: [
        L.latLng(12.987730, 77.503304),
        L.latLng(12.982845212463, 77.6609433669778)
      ],
      routeWhileDragging: true,
      geocoder: new geocoders.Nominatim(),
      lineOptions: {
        styles: [{ color: 'white', opacity: 1, weight: 9 }, { color: '#0000ff', opacity: 1, weight: 4 }],
        extendToWaypoints: true, missingRouteTolerance: 0,
      },
      show: false,
    }).addTo(this.map);


    this.map.on('click', (e: any) => {
      // console.log(e);
      const secondMarker = L.marker([e.latlng.lat, e.latlng.lat]).addTo(this.map);

      // L.Routing.control({
      //   waypoints: [
      //     L.latLng(12.987730, 77.503304),
      //     L.latLng(12.982845212463, 77.6609433669778)
      //   ],
      //   routeWhileDragging: true,
      //   geocoder: new geocoders.Nominatim(),
      //   lineOptions: {
      //     styles: [{ color: 'white', opacity: 1, weight: 9 }, { color: '#0000ff', opacity: 1, weight: 4 }],
      //     extendToWaypoints: true, missingRouteTolerance: 0,
      //   }
      // }).addTo(this.map);
    })

    // new Geocoder({
    //   geocoder: new geocoders.Nominatim(),
    //   position: 'topleft',
    // }).addTo(this.map);

    // var baseMaps = {
    //   'Street View': this.map,
    //   'Satalite View': geo,
    //   'Dark_Mode': dark,
    //   'Earth View': earth
    // }

    // L.control.layers(baseMaps).addTo(this.map);
    // L.control.locate().addTo(this.map);
  //   this.map.locate({setView: true, watch: true}) /* This will return map so you can do chaining */
  //   .on('locationfound', function(e: any){
  //       var marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
  //       var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
  //           weight: 1,
  //           color: 'blue',
  //           fillColor: '#cacaca',
  //           fillOpacity: 0.2
  //       });
  //       L.map.addLayer(marker);
  //       L.map.addLayer(circle);
  //   })
  //  .on('locationerror', function(e: any){
  //       console.log(e);
  //       alert("Location access denied.");
  //   });
}
}

