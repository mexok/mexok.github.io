export interface AllArticleMetadata {
    articles: ArticleMetadata[]
}

export function getArticle(articles: ArticleMetadata[], name: string): ArticleMetadata | undefined {
    for (const i in articles) {
        if (articles[i].content === name) {
            return articles[i]
        }
    }
    return undefined
}

export interface ArticleMetadata {
    title: string
    author: string
    date: string
    content: string
}

export class AllArticleMetadataDummy implements AllArticleMetadata {
    articles = []
}

export class ArticleMetadataDummy implements ArticleMetadata {
    title: string = ""
    author: string = ""
    date: string = ""
    content: string = ""
}
