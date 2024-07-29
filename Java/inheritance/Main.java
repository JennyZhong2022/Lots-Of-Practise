package inheritance;

public class Main {
  public static void main(String[] args) {
    Teacher Aidan = new Teacher("Aidan");
    Teacher Calum = new Teacher("Calum");

    Student Jenny = new Student("Athen1", "Jenny");
    Student Maria = new Student("Athen2", "Maria");
    Student David = new Student("Athen3", "David");

    Person[] people = { Aidan, Calum, Jenny, Maria, David };

    for (int i = 0; i < people.length; i++) {
      System.out.println(people[i].sayYourName());
    }

    Aidan.callMeeting(Calum);

    // enhanced for loop for (Type variable : collection) {
    // for(Person person:people){
    // System.out.println(person.sayYourName());
    // }

    Teacher[] teachers = { Aidan, Calum };
    Student[] students = { Jenny, Maria, David };

    for (int i = 0; i < teachers.length; i++) {
      for (int j = 0; j < students.length; j++) {
        teachers[i].callMeeting(students[j]);
      }
    }
    ;

  }
}
