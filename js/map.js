
const phosphateSites = [
    {
        id: 1,
        name: "Khourigba",
        latlng: [32.88, -6.90],
        reserves: 43,
        description: "Khourigba is one of the most important phosphate basins in Morocco, located in the Béni Mellal-Khénifra region."
    },
    {
        id: 2,
        name: "Gantour",
        latlng: [32.25, -8.53],
        reserves: 37,
        description: "The Youssoufia site(Gantour), in the Marrakech-Safi region, is a major hub for phosphate production."
    },
    {
        id: 3,
        name: "Meskala",
        latlng: [32.23, -7.95],
        reserves: 18,
        description: "Benguérir is home to one of the most important phosphate deposits, located between Marrakech and Casablanca."
    },
    {
        id: 4,
        name: "Boucraa",
        latlng: [26.13, -14.45],
        reserves: 2,
        description: "Boucraa, located in the Laâyoune-Sakia El Hamra region, is a strategic site for the phosphate industry."
    }
];

const map = L.map('map').setView([29.985, -7.5], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 9,
    minZoom: 5
}).addTo(map);


map.setMaxBounds([
    [20, -18], 
    [36, 0]    
]);


function createCustomMarker(site) {
    const marker = L.marker(site.latlng, {
        icon: L.divIcon({
            className: 'custom-marker',
            html: `<i class="fas fa-gem"></i>`,
            iconSize: [50, 50],
            iconAnchor: [25, 25]
        })
    }).addTo(map);
    
  
    marker.on('click', function() {
        showSiteInfo(site);
    });
    
   
    const label = L.marker(site.latlng, {
        icon: L.divIcon({
            className: 'map-label',
            html: `${site.name} - ${site.reserves}%`,
            iconSize: [100, 40],
            iconAnchor: [50, -25]
        })
    }).addTo(map);
    
    
    marker.on('mouseover', function() {
        label.getElement().style.opacity = 1;
    });
    
    marker.on('mouseout', function() {
        label.getElement().style.opacity = 0;
    });
}


phosphateSites.forEach(site => {
    createCustomMarker(site);
});


function showSiteInfo(site) {
    document.querySelector('.region-name').textContent = site.name;
    document.querySelector('.percentage').textContent = site.reserves + '%';
    document.querySelector('.region-description').textContent = site.description;
    

    const progressBar = document.getElementById('reserve-progress');
    progressBar.style.width = '0';
    setTimeout(() => {
        progressBar.style.width = site.reserves + '%';
    }, 100);

}
