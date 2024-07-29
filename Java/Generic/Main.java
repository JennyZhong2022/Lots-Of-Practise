package Generic;

public class Main {
  public static void main(String[] args) {

    // The <FootballPlayer> specify the type parameter for the generic class Team.
    // By specifying <FootballPlayer>, this Team instance can only hold
    // FootballPlayer objects.
    Team<FootballPlayer> footballTeam1 = new Team<>("Football Team 1");
    Team<FootballPlayer> footballTeam2 = new Team<>("Football Team 2");
    Team<BasketballPlayer> basketballTeam1 = new Team<>("Basketball Team 1");

    footballTeam1.addPlayer(new FootballPlayer("Player 1"));
    footballTeam1.addPlayer(new FootballPlayer("Player 2"));
    footballTeam2.addPlayer(new FootballPlayer("Player 3"));

    basketballTeam1.addPlayer(new BasketballPlayer("Player A"));
    basketballTeam1.addPlayer(new BasketballPlayer("Player B"));

    footballTeam1.recordWin();
    footballTeam1.recordDraw();
    footballTeam2.recordLoss();

    basketballTeam1.recordWin();
    basketballTeam1.recordWin();
    basketballTeam1.recordLoss();

    League<Team<FootballPlayer>> footballLeague = new League<>("Football League");
    footballLeague.addTeam(footballTeam1);
    footballLeague.addTeam(footballTeam2);

    League<Team<BasketballPlayer>> basketballLeague = new League<>("Basketball League");
    basketballLeague.addTeam(basketballTeam1);

    System.out.println("Football League Rankings:");
    footballLeague.showLeagueTable();

    System.out.println("Basketball League Rankings:");
    basketballLeague.showLeagueTable();
  }
}
