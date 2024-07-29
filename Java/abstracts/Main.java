package abstracts;

public class Main {
    public static void main(String[] args) {
        // class + interface

        MortgageAccount myAccount = new MortgageAccount(100.0);

        System.out.println(myAccount.getInterestRate());
        System.out.println(myAccount.getReturn(5));
        myAccount.myMortgageMethod();

        Account myAccount2 = new MortgageAccount2(200);
        System.out.println(myAccount2.getInterestRate());
        System.out.println(myAccount2.getPayoutInterval());

    }
}
