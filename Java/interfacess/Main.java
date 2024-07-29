package interfacess;

public class Main {
  public static void main(String[] args) {
    Circle circle = new Circle(5);
    System.out.println("Circle Area: " + circle.getArea());
    System.out.println("Circle Perimeter: " + circle.getPerimeter());

    Triangle triangle = new Triangle(3, 4, 3, 4, 5);
    System.out.println("Triangle Area: " + triangle.getArea());
    System.out.println("Triangle Perimeter: " + triangle.getPerimeter());

    Rhombus rhombus = new Rhombus(4, 6, 8);
    System.out.println("Rhombus Area: " + rhombus.getArea());
    System.out.println("Rhombus Perimeter: " + rhombus.getPerimeter());

  }

}
