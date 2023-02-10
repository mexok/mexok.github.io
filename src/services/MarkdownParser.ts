import DOMPurify from 'dompurify'
import { marked } from 'marked'
import hljs from 'highlight.js'

export interface MarkdownParser {
    parse(content: string): string
}

export class MarkdownParserImpl implements MarkdownParser {
    parse(content: string): string {
        let parsed = DOMPurify.sanitize(marked.parse(content))
        const regex = new RegExp("<code( class=\"language-(\\w+)\")?>([^<]+)</code>")
        let matched
        while (matched = parsed.match(regex)) {
            matched.shift()
            matched.shift()
            let language = matched.shift() || ""
            let code = matched.shift() || ""
            if (language === "") {
                code = hljs.highlightAuto(code).value
            } else {
                code = hljs.highlight(language, code).value
            }
            parsed = parsed.replace(regex, '<code class="hljs">' + code + '</code>')
        }
        return parsed
    }
}
