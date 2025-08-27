const cities = [
  { name: "Stockholm",        x: 61,  y: 22 },
  { name: "Vienne",           x: 57,  y: 35 },
  { name: "Bruxelles",        x: 52,  y: 29 },
  { name: "Lille",            x: 51.5,y: 28.5 },
  { name: "Aix-la-chapelle",  x: 52.5,y: 30 },
  { name: "Quebec",           x: 25,  y: 25 },
  { name: "Ottawa",           x: 24,  y: 28 },
  { name: "Malaga",           x: 50,  y: 45 },
  { name: "Gibraltar",        x: 49.8,y: 45.2 },
  { name: "Marbella",         x: 49.9,y: 45.5 },
  { name: "Nerja",            x: 50.2,y: 45.4 },
  { name: "Reykjavik",        x: 38,  y: 12 },
  { name: "Svartifoss",       x: 42,  y: 17 },
  { name: "Geysir",           x: 41.5,y: 15 }
];

const container = document.getElementById("points-container");

cities.forEach(city => {
  const point = document.createElement("div");
  point.classList.add("point");
  point.title = city.name;
  point.style.left = `${city.x}%`;
  point.style.top = `${city.y}%`;
  container.appendChild(point);
});
