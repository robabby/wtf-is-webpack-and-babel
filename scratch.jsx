import React from "react";

const handleSuccess = data => {
  console.log("handleSuccess: ", data);

  return data;
};

const handleError = data => {
  console.log("handleError: ", data);

  return data;
};

export async function getLocation() {
  const position = navigator.geolocation.getCurrentPosition(
    handleSuccess,
    handleError
  );

  return position;
}

function App() {
  return (
    <div>
      <button onClick={() => getLocation()} type="text"></button>
    </div>
  );
}

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area);
