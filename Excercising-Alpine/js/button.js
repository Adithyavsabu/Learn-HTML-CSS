function buttonComponent() {
  return {
    buttonText: "Click Me",
    buttonClass: "bg-blue-500 text-white py-2 px-4 rounded",
    handleClick() {
      alert("Button clicked!");
    },
  };
}
