<template>
    <div class="article">
        <h2>{{ article?.title }}</h2>
        <div v-html="state.preview" />
        <div>
            Author: <a :href="'/authors/' + article?.author">{{ article?.author }}</a>
            <br>
            Date: {{ article?.date }}
        </div>
        <a :href="'/blog/' + article?.content">Read</a>
    </div>
</template>

<script setup lang="ts">
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import axios from 'axios'
import { reactive } from 'vue'
import type { PropType } from 'vue'
import type { ArticleMetadata } from '@/model/article'

const props = defineProps({
    article: Object as PropType<ArticleMetadata>
})

const state = reactive({
    preview: '',
})
axios.get(`/articles/${props.article?.content}/preview.md`)
    .then(function (response) {
        state.preview = DOMPurify.sanitize(marked.parse(response.data))
    })
</script>
