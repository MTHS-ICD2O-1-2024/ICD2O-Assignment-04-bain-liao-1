// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the cost of the order.
 */
function calculateOrderCost() {

  const TAX_RATE = 0.13

  // Constants for size prices
  const SMALL_PRICE = 2.5
  const MEDIUM_PRICE = 3.0
  const LARGE_PRICE = 5.0

  // Constants for chocolate prices
  const MILK_CHOCOLATE_PRICE = 0
  const WHITE_CHOCOLATE_PRICE = 0.5
  const DARK_CHOCOLATE_PRICE = 0.5
  const RUBY_CHOCOLATE_PRICE = 1

  // Get the values of the checked radio buttons
  const sizeOfDrink = document.querySelector('input[name="size-of-drink"]:checked').value
  const typeOfChocolate = document.querySelector('input[name="type-of-chocolate"]:checked').value
  const numberOfToppings = parseInt(document.querySelector('input[name="number-of-toppings"]:checked').value)

  // Price variables
  let costOfSize = 0
  let costOfChocolate = 0
  let costOfToppings = numberOfToppings * 0.5

  // Processes
  if (sizeOfDrink === "small") {
    costOfSize = SMALL_PRICE
  } else if (sizeOfDrink === "medium") {
    costOfSize = MEDIUM_PRICE
  } else {
    costOfSize = LARGE_PRICE
  }

  if (typeOfChocolate === "milk") {
    costOfChocolate = MILK_CHOCOLATE_PRICE
  } else if (typeOfChocolate === "white") {
    costOfChocolate = WHITE_CHOCOLATE_PRICE
  } else if (typeOfChocolate === "dark") {
    costOfChocolate = DARK_CHOCOLATE_PRICE
  } else {
    costOfChocolate = RUBY_CHOCOLATE_PRICE
  }

  // Calculate the total cost and display
  const subtotalCost = costOfSize + costOfChocolate + costOfToppings
  const amountTaxed = subtotalCost * TAX_RATE
  const totalCost = subtotalCost + amountTaxed
  document.getElementById("result").innerHTML = "A " + sizeOfDrink + " " + typeOfChocolate + " hot chocolate with " + numberOfToppings + " toppings. </br>" + "Total: $" + totalCost.toFixed(2) + "</br>" + "Tax: $" + amountTaxed.toFixed(2) + "</br>" + "Subtotal: $" + subtotalCost.toFixed(2)
}
