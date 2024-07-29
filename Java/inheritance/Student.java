package inheritance;

public class Student extends Person {
  private String cohort;

  // - When a student says their name, they should also mention which cohort they
  // are in
  public Student(String cohort, String name) {
    super(name);
    this.cohort = cohort;
  }

  public String getCohort() {
    return this.cohort;
  }

  // public String getNameInCohort() {
  // return this.sayYourName() + " is in " + this.getCohort();
  // }

  // or this:
  public String sayYourName() {
    return super.sayYourName() + " is from " + this.getCohort();
  }

}
