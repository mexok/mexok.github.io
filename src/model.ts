export interface ArticleMetadata {
    title: string
    author: string
    date: string
}

export class ArticleMetadataDummy implements ArticleMetadata{
    title: string = ""
    author: string = ""
    date: string = ""
}
