## Challenge: Adding Features to the Account Class

1. Add another abstract signature to `Account` for getting the payout interval
   for an account in days
2. Add the payout interval to your `getReturn()` calculation
3. Create another account class that extends account with a different payout
   interval and a different interest rate

## Challenge: How many granules?

1. 1 Teaspoon of coffee granules is needed for 150mL of water
2. Create an abstract `Container` with 2 functions
    - An abstract function `getVolume()`
    - A `teaspoonCount()` function that uses `getVolume()` to calculate the teaspoons of coffee granules needed for the volume
3. Create three classes `LatteGlass`, `ShotGlass` and `Mug` that extend
   container, all should implement the `getVolume()` method

## Challenge: Phone

1. Create an abstract class named `Phone`
1. the `Phone` class should have a phone number property
1. the `Phone` class should have a method named `call` that takes a single parameter of another phone object and logs that phones number
1. create a class named `Landline` that inherits from `Phone` and has an `address` property
1. create a class named `Mobile` that inherits from `Phone` and has a method called `text` that takes another `Mobile` as well as a string and logs the number as well as the message
