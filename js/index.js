import "../css/style.css";  

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -26.91170851988827, lng: -49.08259384414183 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

export { initMap };
