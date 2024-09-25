import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import react from '@astrojs/react'
import mdx from "@astrojs/mdx";
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'
import starlightViewModes from 'starlight-view-modes'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://frostybee.github.io",
  base: "/fx-course",
  integrations: [
    starlight(
      {
        title: "Program Development in a Graphical Environment",
        description: "Material website for the Web Services course",
        social: {
          github: "https://github.com/frostybee/fx-course"
        },
        lastUpdated: true,
        customCss: [
          // Relative path to your custom CSS file
          "./src/styles/custom_styles.css",
        ],
        plugins: [
          starlightImageZoom(),
          starlightViewModes()
        ],
        // plugins: [
        //   starlightLinksValidator({
        //     errorOnFallbackPages: false,
        //   }),
        // ],
        // @doc: https://expressive-code.com/installation/
        expressiveCode: {
          defaultProps: {
            wrap: true
          },
          styleOverrides: {
            borderColor: 'transparent',
            borderRadius: 'var(--border-radius)',
            // frames: {
            //   shadowColor: '#e0f7fa',
            // }
          },
          //@themes: https://expressive-code.com/guides/themes/
          themes: ['dracula', 'catppuccin-latte'],
        },
        components: {
          Header: './src/components/docs/Header.astro',
          // PageSidebar: './src/components/docs/PageSidebar.astro',
          PageTitle: './src/components/docs/PageTitle.astro',
        },
        // Set English as the default language for this site.
        defaultLocale: "en",
        sidebar: [
          {
            label: "Guides",
            items: [
              // Each item here is one entry in the navigation menu.
              {
                label: "Information",
                link: "/guides/"
              }]
          }
      ]
      }),
    mdx(),
    react(),
    sitemap(),
    partytown({
        config: {
          forward: ["dataLayer.push"],
        },
      }),
  ]
});
