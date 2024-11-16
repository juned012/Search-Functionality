const products = [
  {
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    title: "Smartphone Stand",
    description: "Durable stand compatible with all smartphones.",
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable speaker with excellent sound clarity and bass.",
  },
  {
    title: "Laptop Cooling Pad",
    description: "Ergonomic cooling pad with adjustable fan speeds.",
  },
  {
    title: "USB-C Hub",
    description: "Multi-port USB-C hub for enhanced connectivity.",
  },
  {
    title: "Gaming Mouse",
    description: "High-precision gaming mouse with customizable DPI settings.",
  },
  {
    title: "Mechanical Keyboard",
    description: "RGB-backlit mechanical keyboard for gaming and productivity.",
  },
  {
    title: "Smartwatch",
    description: "Fitness-focused smartwatch with heart rate monitoring.",
  },
  {
    title: "External Hard Drive",
    description: "Portable external hard drive with 1TB storage capacity.",
  },
  {
    title: "Wireless Charger",
    description: "Fast wireless charger compatible with most devices.",
  },
  {
    title: "Action Camera",
    description: "Compact action camera with 4K video recording.",
  },
  {
    title: "Fitness Tracker",
    description: "Advanced fitness tracker with sleep tracking features.",
  },
  {
    title: "LED Desk Lamp",
    description: "Adjustable LED desk lamp with multiple brightness levels.",
  },
  {
    title: "Portable Monitor",
    description: "Lightweight portable monitor for on-the-go productivity.",
  },
  {
    title: "Electric Kettle",
    description: "Quick-boiling electric kettle with auto shut-off feature.",
  },
  {
    title: "Air Purifier",
    description: "Compact air purifier with HEPA filter for clean air.",
  },
  {
    title: "Drone",
    description: "High-performance drone with HD camera and GPS.",
  },
  {
    title: "Smart Thermostat",
    description: "Energy-efficient smart thermostat with mobile app control.",
  },
  {
    title: "Virtual Reality Headset",
    description: "Immersive VR headset compatible with gaming consoles.",
  },
  {
    title: "Portable Power Bank",
    description: "High-capacity power bank for charging multiple devices.",
  },
];

const cardContainer = document.querySelector(".cardContainer");

function showProduct(filteredItems) {
  filteredItems.forEach((item) => {
    cardContainer.innerHTML += `
          <div class="card">
              <h2>${item.title}</h2>
              <p>${item.description}</p>
          </div>`;
  });
}

showProduct(products);

function searchProduct() {
  cardContainer.innerHTML = "";
  const inputField = document.querySelector("#search");
  const searchQuary = inputField.value.toLowerCase();
  const filteredProducts = products.filter((item) => {
    if (item.title.toLowerCase().includes(searchQuary)) {
      return true;
    }
  });

  showProduct(filteredProducts);
}
