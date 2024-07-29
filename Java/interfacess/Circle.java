package interfacess;

public class Circle implements Area, Perimeter {
  private double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  public double getArea() {
    return Math.PI * Math.pow(radius, 2);
  }

  public double getPerimeter() {
    return Math.PI * this.radius * 2;
  }

}
