package abstracts;

public abstract class Account {
    public double balance;

    public Account(double balance) {
        this.balance = balance;
    }

    abstract double getInterestRate();

    abstract int getPayoutInterval();

    public double getReturn(int years) {
        double interestRate = this.getInterestRate();
        int payoutInterval = this.getPayoutInterval();

        int totalDays = years * 365;
        int payoutPeriods = totalDays / payoutInterval;

        double interestMultiplier = 1 + (interestRate / (365.0 / payoutInterval));

        double returnValue = (balance * Math.pow(interestMultiplier, payoutPeriods)) - balance;

        return Math.round(returnValue * 100.0) / 100.0;
    }
}
