export interface AllAuthorMetadata {
    authors: AuthorMetadata[]
}

export function getAuthor(authors: AuthorMetadata[], author: string): AuthorMetadata | undefined {
    for (const i in authors) {
        if (authors[i].author === author) {
            return authors[i]
        }
    }
    return undefined
}

export interface AuthorMetadata {
    author: string
    name: string
}

export class AllAuthorMetadataDummy implements AllAuthorMetadata {
    authors = []
}

export class AuthorMetadataDummy implements AuthorMetadata {
    author: string = ""
    name: string = ""
}
