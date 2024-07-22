const imgArray = [
  "https://assets.codepen.io/1506195/unsplash-music-0.avif",
  "https://assets.codepen.io/1506195/unsplash-music-1.avif",
  "https://assets.codepen.io/1506195/unsplash-music-2.avif",
  "https://assets.codepen.io/1506195/unsplash-music-3.avif",
  "https://assets.codepen.io/1506195/unsplash-music-4.avif",
  "https://assets.codepen.io/1506195/unsplash-music-5.avif",
  "https://assets.codepen.io/1506195/unsplash-music-6.avif",
  "https://assets.codepen.io/1506195/unsplash-music-7.avif",
];

// Create a container and apply styles via a CSS class
const container = document.createElement("div");

const div = document.createElement("div");
div.className = "gallery";

// Create an array to hold the elements
const elements = imgArray.map((link) => {
  const img = document.createElement("img");
  img.src = link;
  div.appendChild(img);

  return div;
});

// Create a DocumentFragment to batch DOM updates
const fragment = document.createDocumentFragment();
fragment.append(...elements); // Append all elements at once

// Append the fragment to the container and the container to the body
container.appendChild(fragment);
document.body.appendChild(container);
