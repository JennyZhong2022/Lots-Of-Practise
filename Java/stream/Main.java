import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
  public static void main(String[] args) {

    List<Book> books = new ArrayList<>();
    books.add(new Book("Book1", 300, "Author1", 1999));
    books.add(new Book("Book2", 400, "Author2", 2001));
    books.add(new Book("Book3", 500, "Author3", 2005));
    books.add(new Book("Book4", 150, "Author4", 1985));

    // Create a List of books published after year 2000
    List<Book> booksPublishedAfter2000 = books.stream()
        .filter(book -> book.getYearPublished() > 2000)
        .collect(Collectors.toList());

    booksPublishedAfter2000.forEach(Book::printBookDetails);
    booksPublishedAfter2000.forEach(book -> book.printBookDetails());

    // A list of all book titles converted to uppercase

    // List<String> when mapping book titles to uppercase is that after converting
    // the titles to uppercase, the resulting list contains strings, not Book
    List<String> booksTitleCovertToUppercase = books.stream()
        .map(book -> book.getTitle().toUpperCase())
        .collect(Collectors.toList());

    // System.out::println is a shorthand for str -> System.out.println(str), where
    // str is each string (book title) in the list.
    booksTitleCovertToUppercase.forEach(System.out::println);

    // int that will store the value of all pages of the books combined
    int totalPages = books.stream()
        .mapToInt(book -> book.getPages()) // mapToInt(Books::getPages())
        .sum();
    System.out.println("Total page is " + totalPages);
  }
}