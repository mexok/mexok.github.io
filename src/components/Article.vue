<template>
    <div class="article">
        <div v-html="state.content" />
        <div>
            Author: <a :href="'/authors/' + article?.author">{{ article?.author }}</a>
            <br>
            Date: {{ article?.date }}
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive, inject } from 'vue'
import type { PropType } from 'vue'
import type { ArticleMetadata } from '@/model/article'
import type { MarkdownParser } from '@/services/MarkdownParser'
import { MarkdownParserImpl } from '@/services/MarkdownParser'
import { Service } from '@/services/ServiceEnum'

const props = defineProps({
    article: Object as PropType<ArticleMetadata>
})

const state = reactive({
    content: '',
})

const parser = inject<MarkdownParser>(Service.MarkdownParser, new MarkdownParserImpl())

axios.get(`/articles/${props.article?.content}/content.md`)
    .then(function (response) {
        state.content = parser.parse(response.data)
    })
</script>
