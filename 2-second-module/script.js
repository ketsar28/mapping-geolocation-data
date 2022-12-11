// === mapping ====
const map = L.map("map").setView([0, 0], 1);
const attrb = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileURL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
var myIcon = L.icon({
  iconUrl: "logo.png",
  iconSize: [55, 75],
  iconAnchor: [60, 94],
});
const marker = L.marker([0, 0], { icon: myIcon }).addTo(map);
const tiles = L.tileLayer(tileURL, { attrb });
tiles.addTo(map);

//  === data ===
const url = "https://api.wheretheiss.at/v1/satellites/25544";

const showDatas = async function () {
  const getData = await fetch(url);
  const changed = await getData.json();
  const { longitude, latitude } = changed;
  marker.setLatLng([latitude, longitude]);
  // input the data to element
  document.querySelector(".lat").textContent = latitude;
  document.querySelector(".long").textContent = longitude;
  console.log(latitude);
  console.log(longitude);
};

showDatas();
