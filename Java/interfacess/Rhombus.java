package interfacess;

public class Rhombus implements Area, Perimeter {
  private double side;
  private double diagonal1;
  private double diagonal2;

  public Rhombus(double side, double diagonal1, double diagonal2) {
    this.side = side;
    this.diagonal1 = diagonal1;
    this.diagonal2 = diagonal2;
  }

  public double getArea() {
    return (diagonal1 * diagonal2) / 2;
  }

  public double getPerimeter() {
    return 4 * side;
  }
}
