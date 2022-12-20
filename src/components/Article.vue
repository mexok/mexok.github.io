<template>
    <div class="article">
        <h2>{{ article?.title }}</h2>
        <div v-html="state.content" />
        <div>
            Author: {{ article?.author }}
            <br>
            Date: {{ article?.date }}
        </div>
    </div>
</template>

<script setup lang="ts">
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import axios from 'axios'
import { reactive } from 'vue'
import type { PropType } from 'vue'
import type { ArticleMetadata } from '@/model'

const props = defineProps({
    article: Object as PropType<ArticleMetadata>
})

const state = reactive({
    content: '',
})
axios.get(`/articles/${props.article?.content}/content.md`)
    .then(function (response) {
        state.content = DOMPurify.sanitize(marked.parse(response.data))
    })
</script>
