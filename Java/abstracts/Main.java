package abstracts;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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

    public static int[] myMethod(int[] numbers) {
        return Arrays.stream(numbers)
                .map(n -> n + 1)
                .collect(Collectors.toList());

    }

    public String join(List<String> strs, String delim) {
        return String.join(delim, strs);

    }
}
