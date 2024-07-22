package Java.javaChallenge1;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    // Challenge 1: Create a byte, short, integer and double. Use a scanner to get

    byte numberA = 100;
    short shotNumberA = numberA;

    short numberB = 2000;
    int numberC = 30000;
    double numberD = 400000;

    Scanner newScanner = new Scanner(System.in);

    // Produce an integer by dividing your byte by a number input in the terminal
    byte userInputByte = newScanner.nextByte();
    int divisorForByte = newScanner.nextInt();
    int resultInt = userInputByte / divisorForByte;
    System.out.printf("The result is", resultInt);
    System.out.println(resultInt);

    // Produce a long by multiplying your short by a number input in the terminal

    short userInputShort = newScanner.nextShort();
    long multiplierForShort = newScanner.nextLong();
    System.out.println(userInputShort * multiplierForShort);

    // Produce a double by dividing your integer by a number input in the terminal
    int userInputInt = newScanner.nextInt();
    double divisorForInt = newScanner.nextDouble();
    System.out.println(userInputInt / divisorForInt);

    // Produce a char that is the first character in a string input in the terminal

    String userInputChar = newScanner.next();
    char resultChar = userInputChar.charAt(0); // charAt is index
    System.out.println(resultChar);
  }

}
