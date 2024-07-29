package interfac;

public class Bike implements Vehicle {
  private double speedKmH;

  public Bike(double speedKmH) {
    this.speedKmH = speedKmH;
  }

  public int getSpeed() {
    // Convert speed from km/h to miles/h (1 km/h = 0.621371 miles/h)
    return (int) (this.speedKmH * 0.621371);
  }

  public void decreaseSpeed(int s) {
    // Convert decrease amount from miles/h to km/h (1 miles/h = 1.60934 km/h)
    double decreaseKmH = s * 1.60934;
    if (this.speedKmH - decreaseKmH >= 0) {
      this.speedKmH -= decreaseKmH;
    } else {
      this.speedKmH = 0;
    }

  }

  public void setSpeed(double speedKmH) {
    this.speedKmH = speedKmH;
  }
}
