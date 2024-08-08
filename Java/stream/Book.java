public class Book {

  private String title;
  private int pages;
  private String author;
  private int yearPublished;

  public Book(String title, int pages, String author, int yearPublished) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public int getPages() {
    return pages;
  }

  public void setPages(int pages) {
    this.pages = pages;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public int getYearPublished() {
    return yearPublished;
  }

  public void setYearPublished(int yearPublished) {
    this.yearPublished = yearPublished;
  }

  public void printBookDetails() {
    System.out.printf("Book titile: %s, author: %s, pages: %d, year published %d",
        this.title, this.author, this.pages, this.yearPublished);
    System.out.println();
  }

}