package abstracts;

public class MortgageAccount2 extends Account {

  public MortgageAccount2(double balance) {
    super(balance);
  }

  @Override
  double getInterestRate() {

    return 0.08;

  }

  @Override
  int getPayoutInterval() {

    return 58;
  }

}
