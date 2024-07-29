function fetchProducts() {
  return {
    products: [],
    async init() {
      try {
        const response = await fetch("./public/data/products.json"); // Adjust the path if necessary
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.products = data.products;
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
  };
}
