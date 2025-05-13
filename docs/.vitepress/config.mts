import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/cindy_doc/", // 需要 / 開頭和結尾
  title: "cindy's doc",
  description: "20250513 update",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Product', link: '/fx2_overview' }
    ],

    sidebar: [
      {
        text: 'Product',
        items: [
          { text: 'fx2_overview', link: '/fx2_overview' },
          { text: 'spark_overview', link: '/spark_overview' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
