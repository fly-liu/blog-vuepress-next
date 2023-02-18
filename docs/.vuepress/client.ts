import { defineClientConfig, Layouts } from '@vuepress/client'

import Layout from './layouts/Layout.vue'
import FristLayout from './layouts/FristLayout.vue'
import ListLayout from './layouts/ListLayout.vue'
import AboutLayout from './layouts/AboutLayout.vue'
// import NotFound from './layouts/NotFound.vue'

export default defineClientConfig({
  layouts: {
    Layout,
    FristLayout,
    ListLayout,
    AboutLayout,
    // NotFound,
  } as unknown as Layouts,
})