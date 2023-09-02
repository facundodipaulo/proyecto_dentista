function initMap(){
    const coord = {lat: -31.3856113 ,lng: -57.9641095};
    const map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: coord
    });
    const marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}