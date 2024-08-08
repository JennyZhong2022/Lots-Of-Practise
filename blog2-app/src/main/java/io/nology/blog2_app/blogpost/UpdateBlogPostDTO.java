package io.nology.blog2_app.blogpost;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Pattern;

public class UpdateBlogPostDTO {

  @Pattern(regexp = ".*\\S.*", message = "Title cannot be empty")
  @Length(min = 5)
  private String title;
  @Pattern(regexp = ".*\\S.*", message = "Content cannot be empty")
  private String content;

  @Pattern(regexp = ".*\\S.*", message = "Category cannot be empty")
  private String category;

  public String getTitle() {
    return title;
  }

  public String getContent() {
    return content;
  }

  public String getCategory() {
    return category;
  }

  @Override
  public String toString() {
    return "UpdateBlogPostDTO [title=" + title + ", content=" + content + ", category=" + category + "]";
  }

}
