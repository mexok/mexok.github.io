<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/blog">Blog</RouterLink>
            <RouterLink to="/authors">Authors</RouterLink>
            <RouterLink to="/philosophy">Philosophy</RouterLink>
            <RouterLink to="/imprint">Imprint</RouterLink>
        </nav>
    </header>

    <main>
        <div class="view">
            <RouterView />
        </div>
    </main>
</template>

<script setup lang="ts">

import { MarkdownParserImpl } from '@/services/MarkdownParser'
import { Service } from '@/services/ServiceEnum'
import { provide } from 'vue'

const parser = new MarkdownParserImpl()
provide(Service.MarkdownParser, parser)

</script>

<style scoped>

.view {
    padding: 2rem;
}

RouterLink {
    position: absolute;
    transform: translateY(-50%);
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 1rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

</style>
