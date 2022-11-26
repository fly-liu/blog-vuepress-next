import { defineClientConfig } from '@vuepress/client'

import FristLayout from './layouts/FristLayout.vue'
import ListLayout from './layouts/ListLayout.vue'
import AboutLayout from './layouts/AboutLayout.vue'
// import NotFound from './layouts/NotFound.vue'

export default defineClientConfig({
  layouts: {
    FristLayout,
    ListLayout,
    AboutLayout,
    // NotFound,
  },
})