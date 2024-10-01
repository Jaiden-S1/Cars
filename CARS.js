# Car Inventory Management System

// Class representing a car with name, model, year, and price properties
class Car {
  // Constructor to initialize the car with name, model, year, and price
  constructor(name, model, year, price) {
    // Assign the car name
    this.name = name;
    // Assign the car model
    this.model = model;
    // Assign the car's manufacture year
    this.year = year;
    // Assign the initial car price
    this.price = price;
  }

  // Method to calculate the price after depreciation based on the car's age
  calculatePrice() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Calculate the car's age
    const age = currentYear - this.year;
    // Calculate depreciation ($500 per year)
    const depreciation = age * 500;
    // Ensure price is not below $0
    this.price = Math.max(0, this.price - depreciation);
    return this.price;
  }
}

// Class to manage a list of cars in the inventory
class CarManager {
  // Constructor to initialize an empty array to store cars
  constructor() {
    // Initialize an empty array to store car objects
    this.cars = [];
  }

  // Method to add a new car to the inventory
  addCar(name, model, year, price) {
    // Create a new car object
    const newCar = new Car(name, model, year, price);
    // Add the car to the cars array
    this.cars.push(newCar);
    // Display the updated list of cars
    this.displayCars();
  }

  // Method to display the list of cars in the inventory
  displayCars() {
    // Get the HTML element to display the cars
    const carListElement = document.getElementById('carList');
    // Reset the content and add a header
    carListElement.innerHTML = '<h2>Car Inventory</h2>';
    // Loop through each car in the cars array and append it to the car list
    this.cars.forEach(car => {
      carListElement.innerHTML += `<p>${car.name} - ${car.model} - ${car.year} - $${car.calculatePrice()}</p>`;
    });
  }

  // Method to calculate and show the total price of all cars in the inventory after depreciation
  showTotalPrice() {
    // Calculate the total price by summing the prices of all cars after depreciation
    const totalPrice = this.cars.reduce((total, car) => total + car.calculatePrice(), 0);
    // Show the total price in an alert
    alert(`Total Price of all Cars: $${totalPrice}`);
  }
}

// Create an instance of the CarManager to manage the car inventory
const carManager = new CarManager();

// Function to add a car from the input fields in the HTML form
function addCar() {
  // Get the car name from the input field
  const name = document.getElementById('carName').value;
  // Get the car model from the input field
  const model = document.getElementById('carModel').value;
  // Get the manufacture year and convert it to an integer
  const year = parseInt(document.getElementById('carYear').value);
  // Get the price and convert it to a floating-point number
  const price = parseFloat(document.getElementById('carPrice').value);
  // Add the new car to the inventory
  carManager.addCar(name, model, year, price);
}

// Function to show the total price of all cars when the button is clicked
function showTotalPrice() {
  // Call the showTotalPrice method in the CarManager
  carManager.showTotalPrice();
}