import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cmadams.dev/',
  integrations: [
    sitemap(),
    react(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    ,
    tailwind()
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-spaceMono',
          h2: 'text-2xl font-bold font-spaceMono',
          h3: 'text-xl font-bold font-spaceMono',
          h4: 'text-lg font-bold font-spaceMono',
          h5: 'font-bold font-spaceMono',
          h6: 'font-bold font-spaceMono',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-amber-500 decoration-amber-500',
          ul: 'list-disc'
        }
      ]
    ]
  }
})
