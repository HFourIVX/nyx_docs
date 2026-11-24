import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/nyx_docs/',
  title: 'Nyx',
  description:
    'Documentation for Nyx, a feature-rich Discord bot for moderation, economy, mini-games, leveling, media, and utilities.',
  lastUpdated: true,

  markdown: {
    config(md) {
      md.core.ruler.push('nyx_brand', (state) => {
        for (const token of state.tokens) {
          if (token.type !== 'inline' || !token.children) continue

          const newChildren: typeof token.children = []
          for (const child of token.children) {
            if (child.type !== 'text' || !/\bNyx\b/.test(child.content)) {
              newChildren.push(child)
              continue
            }

            const parts = child.content.split(/(\bNyx\b)/)
            for (const part of parts) {
              if (!part) continue
              if (part === 'Nyx') {
                const htmlToken = new state.Token('html_inline', '', 0)
                htmlToken.content = '<span class="nyx-brand">Nyx</span>'
                newChildren.push(htmlToken)
              } else {
                const textToken = new state.Token('text', '', 0)
                textToken.content = part
                newChildren.push(textToken)
              }
            }
          }
          token.children = newChildren
        }
      })
    },
  },

  themeConfig: {
    siteTitle: 'Nyx',

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Getting Started', link: '/guide/getting-started' },
      { text: 'Slash Commands', link: '/commands/slash-commands' },
      { text: 'Economy & Games', link: '/economy/overview' },
      { text: 'FAQ & Permissions', link: '/faq/permissions' },
    ],

    sidebar: [
      {
        text: 'Overview & Getting Started',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Server Configuration', link: '/guide/configuration' },
        ],
      },
      {
        text: 'Slash & Bot Commands',
        items: [
          { text: 'Slash Commands Reference', link: '/commands/slash-commands' },
          { text: 'Config & Setup', link: '/commands/config' },
          { text: 'Moderation', link: '/commands/moderation' },
          { text: 'Utility', link: '/commands/utility' },
          { text: 'Media', link: '/commands/media' },
          { text: 'Levels, Relations & Roleplay', link: '/commands/social' },
        ],
      },
      {
        text: 'Mini-Games & Economy',
        items: [
          { text: 'Economy System', link: '/economy/overview' },
          { text: 'Gambling & Mini-Games', link: '/economy/minigames' },
        ],
      },
      {
        text: 'FAQ & Permissions',
        items: [
          { text: 'Required Permissions', link: '/faq/permissions' },
          { text: 'Frequently Asked Questions', link: '/faq/faq' },
        ],
      },
      {
        text: 'Legal',
        items: [
          { text: 'Terms & Conditions', link: '/legal/terms' },
          { text: 'Privacy Policy', link: '/legal/privacy' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HFourIVX/nyx_docs' },
    ],

    outline: {
      level: [2, 3],
    },

    footer: {
      message:
        'Documentation for the <span class="nyx-brand">Nyx</span> Discord bot · <a href="/nyx_docs/legal/terms">Terms & Conditions</a> · <a href="/nyx_docs/legal/privacy">Privacy Policy</a>',
      copyright: 'Hosted with VitePress & GitHub Pages',
    },
  },
})
