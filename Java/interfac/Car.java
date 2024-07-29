package interfac;

public class Car implements Vehicle {
  private double speedMs; // Speed in meters per second

  public Car(double speedMs) {
    this.speedMs = speedMs;
  }

  @Override
  public int getSpeed() {
    // Convert speed from m/s to miles/h (1 m/s = 2.23694 miles/h)
    return (int) (this.speedMs * 2.23694);
  }

  @Override
  public void decreaseSpeed(int s) {

    double decreaseMs = s * 0.44704;
    if (this.speedMs - decreaseMs >= 0) {
      this.speedMs -= decreaseMs;
    } else {
      this.speedMs = 0;
    }
  }

  // Setter for speedMs
  public void setSpeed(double speedMs) {
    this.speedMs = speedMs;
  }
}
