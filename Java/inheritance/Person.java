package inheritance;

// -   Create a parent class called person, they have a property called name that is set in their constructor
// -   person has a method called say your name

public class Person {
  private String name;

  public Person(String name) {
    this.name = name;
  }

  public String sayYourName() {
    return this.name;
  }

}
