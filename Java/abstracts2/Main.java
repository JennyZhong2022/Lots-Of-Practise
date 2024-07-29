package abstracts2;

public class Main {
  public static void main(String[] args) {
    Container latteGlass = new LatteGlass(300);
    System.out.println("LatteGlass teaspoons of coffee needed: " + latteGlass.teaspoonCount());
    System.out.println("LatteGlass volume: " + latteGlass.getVolume() + " mL");

    Container cup = new ShortGlass(150);
    System.out.println("Cup teaspoons of coffee needed: " + cup.teaspoonCount());
    System.out.println("Cup volume: " + cup.getVolume() + " mL");

    Container mug = new Mug(450);
    System.out.println("Mug teaspoons of coffee needed: " + mug.teaspoonCount());
    System.out.println("Mug volume: " + mug.getVolume() + " mL");

  }

}
