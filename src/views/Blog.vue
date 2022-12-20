<template>
    <div v-if="!$route.params.article">
        <h1>Articles:</h1>
        <br>
        <div v-for="article in state.metadata.articles">
            <ArticlePreview :article="article"/>
            <br>
        </div>
    </div>
    <div v-else>
        <Article :article="getArticle(state.metadata.articles, $route.params.article as string)" />
    </div>
</template>

<script lang=ts setup>

import axios from 'axios'
import { reactive } from 'vue'
import { AllArticleMetadataDummy, getArticle } from '@/model'
import Article from '@/components/Article.vue'
import ArticlePreview from '@/components/ArticlePreview.vue'

const state = reactive({
    content: '',
    metadata: new AllArticleMetadataDummy()
})
axios.get('/articles/metadata.json')
    .then(function (response) {
        state.metadata = response.data
    })
</script>
