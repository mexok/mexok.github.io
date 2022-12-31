<template>
    <div v-if="!$route.params.article">
        <h1>Articles:</h1>
        <br>
        <div v-for="article in state.metadata.articles">
            <ArticlePreview :article="article"/>
            <br>
        </div>
    </div>
    <div v-else-if="currentArticle">
        <Article :article="currentArticle" />
    </div>
</template>

<script setup lang="ts">

import axios from 'axios'
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { AllArticleMetadataDummy, getArticle } from '@/model/article'
import Article from '@/components/Article.vue'
import ArticlePreview from '@/components/ArticlePreview.vue'

const state = reactive({
    metadata: new AllArticleMetadataDummy()
})

axios.get('/articles/metadata.json')
    .then(function (response) {
        state.metadata = response.data
    })

const currentArticle = computed(() => {
    const route = useRoute()
    return getArticle(state.metadata.articles, route.params.article as string)
})
</script>
