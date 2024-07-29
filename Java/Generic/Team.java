package Generic;

import java.util.ArrayList;
import java.util.List;

public class Team<T extends Player> {
  private String name;
  private List<T> players = new ArrayList<>();
  private int wins;
  private int losses;
  private int draws;

  public Team(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void addPlayer(T player) {
    players.add(player);
  }

  public void recordWin() {
    wins++;
  }

  public void recordLoss() {
    losses++;
  }

  public void recordDraw() {
    draws++;
  }

  public int getPoints() {
    return (wins * 3) + draws; // 3 points for a win, 1 point for a draw
  }

  public int getWins() {
    return wins;
  }

  public int getLosses() {
    return losses;
  }

  public int getDraws() {
    return draws;
  }
}