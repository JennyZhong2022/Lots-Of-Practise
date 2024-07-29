package interfac;

public class Main {
  public static void main(String[] args) {

    Car myCar = new Car(60);
    System.out.println("Car Initial speed: " + myCar.getSpeed() + " miles/h");

    myCar.decreaseSpeed(5);
    System.out.println("Car Speed after decrease: " + myCar.getSpeed() + " miles/h");

    Bike myBike = new Bike(30.22);
    System.out.println("Bike Initial speed: " + myBike.getSpeed() + " miles/h");

    myBike.decreaseSpeed(5);
    System.out.println("Bike Speed after decrease: " + myBike.getSpeed() + " miles/h");

  }

}
