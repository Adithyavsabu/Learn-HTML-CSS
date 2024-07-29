function fetchData() {
  return {
    categories: [],
    async init() {
      try {
        const response = await fetch("./public/data/categories.json"); // Adjust the path if necessary
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.categories = data.categories;
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
  };
}
