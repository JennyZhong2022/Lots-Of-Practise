package Java.javaChallengeArray;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class StudentSelector {

  // This task is to create a CLI application that supports commands for picking
  // random students
  // and refreshing the array.

  // - Create an array of yourself and your colleagues
  // - If the user types in "G" (generate), it should return a random student name
  // and remove
  // that student from the available pickings
  // - If the array of users is empty we should terminate the program

  // Bonus:
  // - If the user types in the "R" command, the available pickings should be
  // refreshed such
  // that it contains all the students
  // - If the "G" command is run and all students are already picked, the array
  // should be
  // refreshed before picking
  // - If the "E" command is run the program should exit

  // Bonus Bonus:
  // - If the "A" command is typed, allow the user to give a student name and add
  // that name to
  // arrays

  public static ArrayList<String> initialStudents = new ArrayList<>();
  public static ArrayList<String> students = new ArrayList<>();

  public static void main(String[] args) {

    initialStudents.add("Alice");
    initialStudents.add("Bob");
    initialStudents.add("John");
    initialStudents.add("David");
    initialStudents.add("Jenny");

    // Initialize the students list with the initial students
    refreshStudents();

    Scanner newScanner = new Scanner(System.in);

    while (true) {
      System.err.println("enter command (G: Generate, R: Refresh, E: Exit,P: Print List, A: Add Student): ");
      // nextLine() This line reads the entire line of input from the user.
      String command = newScanner.nextLine().trim().toUpperCase();

      switch (command) {
        case "G":
          generateStudent();
          break;
        case "R":
          refreshStudents();
          break;
        case "E":
          System.out.println("Exiting Program");
          // Close the scanner and exit the program
          newScanner.close();
          return;
        case "A":
          addStudent(newScanner);
          break;
        case "P":
          printAllStudents();
          break;

        default:
          System.err.println("Invalid command. Please enter G, R, E, or A.");
          break;
      }

    }

  }

  public static void generateStudent() {
    if (students.isEmpty()) {
      System.out.println("All students have been picked, Refreshing the list ");
      refreshStudents();
    }

    // Create a Random object to pick a random student
    Random random = new Random();

    // Get a random index from the students list
    int index = random.nextInt(students.size());

    String student = students.remove(index);

    System.out.println("picked student: " + student);
    if (students.isEmpty()) {
      System.out.println("no more students left to pick, exiting program");
      // Exit the program
      System.exit(0);
      ;
    }
  }

  public static void refreshStudents() {
    // Copy initialStudents list to students list
    students = new ArrayList<>(initialStudents);
    System.out.println("Student list has been refreshed");
  }

  public static void addStudent(Scanner scanner) {
    System.out.println("enter the name of the new student: ");
    String newStudent = scanner.nextLine().trim();
    initialStudents.add(newStudent);
    students.add(newStudent);
    System.out.println("Added student: " + newStudent);
  }

  public static void printAllStudents() {
    if (students.isEmpty()) {
      System.out.println("No students available.");
      return;
    }
    System.out.println("Current list of students:");
    // for (String student : students) is a Java enhanced for loop, also known as a
    // "for-each" loop. It is used to iterate over elements in an array
    for (String student : students) {
      System.out.println(student);
    }
  }
}
