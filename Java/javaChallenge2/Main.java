package Java.javaChallenge2;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // - Scan user input and print...
    // - `"n is positive"` if n (the number that was scanned) is positive
    // - `"n is negative"` if n is negative
    Scanner newScanner = new Scanner(System.in);
    // int userInputInt = newScanner.nextInt();

    // if (userInputInt > 0) {
    // System.out.println("%userInput is positive");

    // } else {
    // System.err.println("userInput is negative");
    // }

    // ## Challenge: Find the largest input
    // - Get 3 numbers from the user
    // - Print `"n is the largest"`, n being the largest of the 3 inputs

    // int userInputInt1 = newScanner.nextInt();
    // int userInputInt2 = newScanner.nextInt();
    // int userInputInt3 = newScanner.nextInt();

    // if (userInputInt1 > userInputInt2 && userInputInt1 > userInputInt3) {
    // System.out.println("userInput1 is the largest number");
    // } else if (userInputInt2 > userInputInt1 && userInputInt2 > userInputInt3) {
    // System.out.println("userInput2 is the largest number");
    // } else {
    // System.out.println("userInput3 is the largest number");
    // }

    // ## Challenge: Rounding Floats
    // - Request 2 float inputs from the user
    // - Round both to 3 decimal places
    // - if they are the same number after rounding:
    // - print `"Both numbers are n after rounding"`
    // - else
    // - print `"n1, and n2 are different numbers"`, n1 and n2 being the 2 rounded
    // value

    float userInputFloat1 = newScanner.nextFloat();
    float userInputFloat2 = newScanner.nextFloat();

    float roundedFloat1 = Math.round(userInputFloat1 * 1000) / 1000.0f;
    float roundedFloat2 = Math.round(userInputFloat2 * 1000) / 1000.0f;
    // In Java, 0f (or 0.0f) is a literal representing a floating-point number of
    // type float. without it , it will default to double

    if (roundedFloat1 == roundedFloat2) {
      System.out.println("both are same number after rounding");
    } else {
      System.out.println(userInputFloat1);
      System.out.println(userInputFloat2);
    }

    // ## Challenge: What's the number of x in y?
    // - Scan user input twice
    // - Allowed inputs:
    // - `"s"` => seconds
    // - `"m"` => minutes
    // - `"h"` => hours
    // - `"D"` => days
    // - `"M"` => months
    // - `"Y"` => years
    // - Input => Output Examples:
    // - 1st: `"M"`, 2nd: `"D"` => `"There are 30 days in a month"`
    // - 1st: `"M"`, 2nd: `"h"` => `"There are 720 hours in a month"`
    // - 1st: `"h"`, 2nd: `"s"` => `"There are 3600 seconds in an hour"`
    // - 1st: `"M"`, 2nd: `"Y"` => `"There are no years in a month"`
    // - 1st: `"s"`, 2nd: `"h"` => `"There are no hours in a second"`

    System.out.println("Enter the first time unit (s, m, h, D, M, Y):");
    String userInputString1 = newScanner.next();

    System.out.println("Enter the second time unit (s, m, h, D, M, Y):");
    String userInputString2 = newScanner.next();

    String result = convertTimeUnits(userInputString1, userInputString2);
    System.out.println(result);

    newScanner.close();
  }

  public static String convertTimeUnits(String input1, String input2) {
    switch (input1) {
      case "s":
        switch (input2) {
          case "s":
            return "There is 1 second in a second";
          case "m":
            return "There are no minutes in a second";
          case "h":
            return "There are no hours in a second";
          case "D":
            return "There are no days in a second";
          case "M":
            return "There are no months in a second";
          case "Y":
            return "There are no years in a second";
        }
        break;
      case "m":
        switch (input2) {
          case "s":
            return "There are 60 seconds in a minute";
          case "m":
            return "There is 1 minute in a minute";
          case "h":
            return "There are no hours in a minute";
          case "D":
            return "There are no days in a minute";
          case "M":
            return "There are no months in a minute";
          case "Y":
            return "There are no years in a minute";
        }
        break;
      case "h":
        switch (input2) {
          case "s":
            return "There are 3600 seconds in an hour";
          case "m":
            return "There are 60 minutes in an hour";
          case "h":
            return "There is 1 hour in an hour";
          case "D":
            return "There are no days in an hour";
          case "M":
            return "There are no months in an hour";
          case "Y":
            return "There are no years in an hour";
        }
        break;
      case "D":
        switch (input2) {
          case "s":
            return "There are 86400 seconds in a day";
          case "m":
            return "There are 1440 minutes in a day";
          case "h":
            return "There are 24 hours in a day";
          case "D":
            return "There is 1 day in a day";
          case "M":
            return "There are no months in a day";
          case "Y":
            return "There are no years in a day";
        }
        break;
      case "M":
        switch (input2) {
          case "s":
            return "There are 2592000 seconds in a month";
          case "m":
            return "There are 43200 minutes in a month";
          case "h":
            return "There are 720 hours in a month";
          case "D":
            return "There are 30 days in a month";
          case "M":
            return "There is 1 month in a month";
          case "Y":
            return "There are no years in a month";
        }
        break;
      case "Y":
        switch (input2) {
          case "s":
            return "There are 31536000 seconds in a year";
          case "m":
            return "There are 525600 minutes in a year";
          case "h":
            return "There are 8760 hours in a year";
          case "D":
            return "There are 365 days in a year";
          case "M":
            return "There are 12 months in a year";
          case "Y":
            return "There is 1 year in a year";
        }
        break;
      default:
        return "Invalid input: " + input1;
    }

    return "Invalid input: " + input2;
  }
}
