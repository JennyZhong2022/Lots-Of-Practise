package abstracts2;

public abstract class Container {

  public Container() {

  }

  abstract int getVolume();

  public int teaspoonCount() {
    int volume = getVolume();
    return (int) Math.ceil((double) volume / 150);

  }

}
