function fetchImages() {
  return {
    brands: [],
    async init() {
      try {
        const response = await fetch("./public/data/brands.json"); // Adjust the path if necessary
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.brands = data.brands;
        console.log("brands", brands);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
  };
}
