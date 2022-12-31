<template>
    <div v-if="!$route.params.author">
        <h1>Authors:</h1>
        <br>
        <div v-for="author in state.metadata.authors">
            <AuthorPreview :author="author"/>
            <br>
        </div>
    </div>
    <div v-else-if="currentAuthor">
        <Author :author="currentAuthor" />
    </div>
</template>

<script setup lang="ts">

import axios from 'axios'
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { AllAuthorMetadataDummy, getAuthor } from '@/model/author'
import Author from '@/components/Author.vue'
import AuthorPreview from '@/components/AuthorPreview.vue'

const state = reactive({
    metadata: new AllAuthorMetadataDummy()
})

axios.get('/authors/metadata.json')
    .then(function (response) {
        state.metadata = response.data
    })

const currentAuthor = computed(() => {
    const route = useRoute()
    return getAuthor(state.metadata.authors, route.params.author as string)
})
</script>
