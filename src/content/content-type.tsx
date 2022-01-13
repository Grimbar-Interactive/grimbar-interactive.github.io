export class ContentType {
  public static Types: ContentType[] = [
    new ContentType("Home", "Home"),
    new ContentType("Games", "Games"),
    new ContentType("WebDev", 'Web Development'),
    new ContentType("Team", "Team")
  ];

  readonly id: string;
  readonly displayName: string;

  private constructor(id: string, displayName: string) {
    this.id = id;
    this.displayName = displayName;
  }
}