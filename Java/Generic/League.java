package Generic;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class League<T extends Team<?>> {
  private String name;
  private List<T> teams = new ArrayList<>();

  public League(String name) {
    this.name = name;
  }

  public void addTeam(T team) {
    teams.add(team);
  }

  public void showLeagueTable() {

    // Collections.sort method to sort the teams list.
    // Comparator is provided to define the sorting order.
    Collections.sort(teams, new Comparator<T>() {

      // Implement the compare method
      // compare two teams points
      public int compare(T team1, T team2) {
        return team2.getPoints() - team1.getPoints();
      }
    });

    // enhanced for loop

    for (T team : teams) {
      System.out.println(team.getName() + ": " + team.getPoints() + " points");
    }
  }
}
