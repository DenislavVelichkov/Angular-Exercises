export class Article {
    title: string;
    description: string;
    author: string;
    imgUrl: string;

    constructor(
        title: string,
        description: string,
        author: string,
        imgUrl: string) {

        this.title = title;
        this.description = description;
        this.author = author;
        this.imgUrl = imgUrl;
    }


}