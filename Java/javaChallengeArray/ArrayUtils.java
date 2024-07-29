package Java.javaChallengeArray;

import java.util.Arrays;
import java.util.Scanner;

public class ArrayUtils {

  // - Create a class called `ArrayUtils`
  // - Create a static method that takes in an `int[]`
  // - ... and returns a new `int[]` where all numbers have been incremented
  // - Input => Output Examples:
  // - `{ 1, 2, 3 }` => `{ 2, 3, 4 }`
  // - `{ 45, 23 }` => `{ 46, 24 }`
  // - `{ }` => `{ }`
  public static int[] incrementedArray(int[] array) {
    int[] newIntArray = new int[array.length];
    for (int i = 0; i < array.length; i++) {
      newIntArray[i] = array[i] + 1;
    }
    return newIntArray;

  }

  // - Create a static method that takes in `int[]` on your `ArrayUtils` class
  // - ... and returns a new `int[]` where all the items are in the reverse order
  // - Input => Output Examples:
  // - `{ 1, 2, 3 }` => `{ 3, 2, 1 }`
  // - `{ 45, 23 }` => `{ 23, 45 }`
  // - `{ }` => `{ }`
  public static int[] revisedArray(int[] array) {
    int[] newRevisedIntArray = new int[array.length];
    for (int i = 0; i < array.length; i++) {
      newRevisedIntArray[i] = array[array.length - 1 - i];
    }
    return newRevisedIntArray;
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter your size");
    int size = scanner.nextInt();
    int[] newIntArray = new int[size];

    System.out.println("Enter your numbers");

    for (int i = 0; i < size; i++) {
      newIntArray[i] = scanner.nextInt();
    }

    int[] incrementedArray = incrementedArray((newIntArray));

    System.err.println(Arrays.toString(incrementedArray));

    int[] revisedArray = revisedArray(newIntArray);
    System.out.println(Arrays.toString(revisedArray));

  }

}
