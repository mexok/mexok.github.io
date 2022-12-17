<template>
  <div class="article">
    <h2>{{ state.metadata.title }}</h2>
    <div v-html="state.content" />
    <div>
        Author: {{ state.metadata.author }}
        <br>
        Date: {{ state.metadata.date }}
    </div>
  </div>
</template>

<script setup lang="ts">
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import axios from 'axios'
import { reactive } from 'vue'
import { ArticleMetadataDummy } from '../model'

const state = reactive({
    content: '',
    metadata: new ArticleMetadataDummy()
})
axios.get('/articles/0001_first_article/content.md')
    .then(function (response) {
        state.content = DOMPurify.sanitize(marked.parse(response.data))
    })
axios.get('/articles/0001_first_article/metadata.json')
    .then(function (response) {
        state.metadata = response.data
    })
</script>
