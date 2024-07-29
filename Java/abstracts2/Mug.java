package abstracts2;

public class Mug extends Container {
  private int volume;

  public Mug(int volume) {
    this.volume = volume;

  }

  @Override
  int getVolume() {
    // TODO Auto-generated method stub
    return this.volume;
  }
}
