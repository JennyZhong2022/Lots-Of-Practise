package inheritance;

public class Teacher extends Person {

  public Teacher(String name) {
    super(name);
  }

  // Person person is parameter, person is from class Person
  public String callMeeting(Person person) {
    String result = this.sayYourName() + " and " + person.sayYourName();
    System.out.println(result);
    return result;
  }

}
