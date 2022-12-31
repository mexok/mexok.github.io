<template>
    <h2>{{ author?.name }}</h2>
    <h3>Ref.: {{ author?.author }}</h3>
    <div v-html="state.preview" />
    <a :href="'/authors/' + author?.author">Show</a>
</template>

<script setup lang="ts">
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import axios from 'axios'
import { reactive } from 'vue'
import type { PropType } from 'vue'
import type { AuthorMetadata } from '@/model/author'

const props = defineProps({
    author: Object as PropType<AuthorMetadata>
})

const state = reactive({
    preview: '',
})
axios.get(`/authors/${props.author?.author}/preview.md`)
    .then(function (response) {
        state.preview = DOMPurify.sanitize(marked.parse(response.data))
    })
</script>
