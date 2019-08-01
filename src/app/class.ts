export class HomeNav {
  constructor(public name: string, public route: string) {}
}

export class ArticalTitle {
  constructor(
    public title: string,
    public time: string,
    public category: string[]
  ) {}
}

export class Artical {
  constructor(
    public title: string,
    public createDate: string,
    public content: string,
    public category: string[],
    public id: number,
    public pre: object,
    public next: object
  ) {}
}

export class Comment {
  constructor(
    public userName: string,
    public time: string,
    public content: string
  ) {}
}
