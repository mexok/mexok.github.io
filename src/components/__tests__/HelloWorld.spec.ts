import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Article from '@/components/Article.vue'
import { ArticleMetadataDummy } from '@/model'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Article, { props: { article: new ArticleMetadataDummy() } })
    expect(wrapper.text()).toContain('Author')
  })
})
