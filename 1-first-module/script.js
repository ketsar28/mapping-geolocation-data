const url = "https://api.wheretheiss.at/v1/satellites/25544";

const showDatas = async function () {
  const getData = await fetch(url);
  const changed = await getData.json();
  const { longitude, latitude } = changed;

  // input the data to element
  document.querySelector(".lat").textContent = latitude;
  document.querySelector(".long").textContent = longitude;
  console.log(latitude);
  console.log(longitude);
};

showDatas();
