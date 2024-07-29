package Java.javaChallengeArray;

public class FourDArray {

  public static void main(String[] args) {
    // Initialize the dimensions of the 4D array
    int a = 2, b = 2;
    int c = 3;
    int d = 4;

    int[][][][] fourDArray = new int[a][b][c][d];

    // incrementing value to the array
    int value = 1;

    for (int i = 0; i < a; i++) { // Loop through the first dimension
      for (int j = 0; j < b; j++) { // second dimension
        for (int k = 0; k < c; k++) { // third dimension
          for (int l = 0; l < d; l++) { // fourth dimension
            // Assign the incrementing value
            fourDArray[i][j][k][l] = value++;
          }
        }
      }
    }

    // Nested loops to print the 4D array
    for (int i = 0; i < a; i++) { // Loop through the first dimension
      System.out.println("["); // Start the outermost array
      for (int j = 0; j < b; j++) {
        System.out.println("  [");
        for (int k = 0; k < c; k++) {
          System.out.print("    [");
          for (int l = 0; l < d; l++) {
            // Print the current value in the array
            System.out.print(fourDArray[i][j][k][l]);

            if (l < d - 1) { // Check if it's not the last element in the fourth dimension
              System.out.print(", "); // Print a comma if not the last element
            }
          }
          System.out.println("]"); // End the third dimension array
        }
        System.out.println("  ],"); // End the second dimension array
      }
      System.out.println("],"); // End the outermost array
    }

  }
}