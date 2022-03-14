export class ContentType {
  public static Types: ContentType[] = [
    new ContentType("/", "Home"),
    new ContentType("/games", "Games"),
    new ContentType("/webdevelopment", 'Web Development'),
    new ContentType("/team", "Team")
  ];

  readonly url: string;
  readonly displayName: string;

  private constructor(url: string, displayName: string) {
    this.url = url;
    this.displayName = displayName;
  }
}