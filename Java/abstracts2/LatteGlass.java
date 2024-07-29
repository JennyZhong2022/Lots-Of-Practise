package abstracts2;

public class LatteGlass extends Container {
  private int volume;

  public LatteGlass(int volume) {
    this.volume = volume;
  }

  @Override
  int getVolume() {
    // TODO Auto-generated method stub
    return this.volume;
  }
}
