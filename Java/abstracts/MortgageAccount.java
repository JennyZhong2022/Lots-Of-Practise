package abstracts;

public class MortgageAccount extends Account {

    public MortgageAccount(double balance) {
        super(balance);
    }

    @Override
    int getPayoutInterval() {
        // TODO Auto-generated method stub
        return 5;
    }

    @Override
    double getInterestRate() {
        return 0.045;
    }

    public void myMortgageMethod() {

    }
}
