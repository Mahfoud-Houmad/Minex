
const reservesData = {
  khouribga: {
    intro: "The largest phosphate reserve in Morocco lies in the Ouled Abdoun Basin. Khouribga alone accounts for nearly half of the kingdom’s output and remains OCP’s flagship mine since 1921.",
    img: "../assets/images/resreves-1.jpg",
    details: "Khouribga, inaugurated in 1921, sits atop the Ouled Abdoun Basin and holds more than 26 billion tonnes of phosphate—roughly 44% of Morocco’s total reserves. A 187 km slurry pipeline connects Khouribga to the Jorf Lasfar processing hub, enabling efficient transport and processing. It remains technologically advanced, powering fertilizer and phosphoric acid production at world-leading scale. As the core of OCP’s operations, it plays a vital role in the national economy and global phosphate markets."
  },
  gantour: {
    intro: "The Gantour and Benguerir basins, near Marrakech, are key secondary reserves supporting Morocco’s phosphate industry.They supplement Khouribga and diversify national production",
    img: "../assets/images/reserves-2.jpg",
    details: "Located in central-west Morocco, the Gantour/Benguerir basin supplies crucial reserves complementing Khouribga. Though less publicized, these deposits remain safe and accessible, integrating into OCP’s strategic operations. Phosphate extracted here is efficiently transported—via rail—to processing units like Safi and Jorf Lasfar. Their development helps buffer production volatility and strengthens regional economic stability"
  },
  boucraa: {
    intro: "Bou Craa, located in Western Sahara, holds around 1.7 billion tonnes of phosphate reserves and contributes about 10 % of Morocco’s output. It remains a highly symbolic and strategically significant site.",
    img: "../assets/images/reserves-3.jpg",
    details: "Operating since 1972, Bou Craa produces around 3 million tonnes annually, transported via a 102 km conveyor—the world's longest—to Laâyoune port. It generates about $200 million in annual revenue and supports over 600 jobs via local SMEs. A $1.8 billion investment plan is underway to build a fertilizer complex and elevate value-added capabilities locally."
  },
  youssoufia: {
    intro: "The Youssoufia site (and surrounding zones like Sidi Chennane) forms part of the Ouled Abdoun basin and contributes to Morocco’s multi-site extraction strategy",
    img: "../assets/images/reserves-4.jpeg",
    details: "Youssoufia, launched after Khouribga, expands Morocco’s phosphate capacity by tapping into Ouled Abdoun’s northern mineral layers. Geological exploration shows complex sedimentary structures, including phosphate interlayers with water-bearing zones. Geophysical surveys assist in delineating these reserves for safer, optimized extraction. This site ensures OCP's long-term resource continuity and allows mining operations to evolve with water management considerations."
  }
};

const buttons = document.querySelectorAll(".reserve-btn");
const intro = document.querySelector(".reserve-intro");
const img = document.querySelector(".reserve-image img");
const details = document.querySelector(".reserve-details p");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const reserve = reservesData[btn.dataset.reserve];
    intro.textContent = reserve.intro;
    img.src = reserve.img;
    details.textContent = reserve.details;
  });
});




 // Initialiser la carte centrée sur le Maroc
  var map = L.map('map').setView([31.7917, -7.0926], 6); 

  // Ajouter le fond de carte OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Définir les réserves avec leurs coordonnées
  var reserves = [
    { name: "Khouribga", coords: [32.88, -6.91] },
    { name: "Gantour / Benguerir", coords: [32.23, -8.15] },
    { name: "Boucraa", coords: [26.29, -12.85] },
    { name: "Youssoufia", coords: [32.25, -8.53] }
  ];

  // Ajouter des marqueurs pour chaque réserve
  reserves.forEach(function(reserve) {
    var marker = L.marker(reserve.coords).addTo(map)
      .bindTooltip("<b>" + reserve.name + "</b>");

    
    marker.on('click', function() {
      var lat = reserve.coords[0];
      var lng = reserve.coords[1];
      var url = `https://www.google.com/maps?q=${lat},${lng}`;
      window.open(url, '_blank'); 
    });

  });
