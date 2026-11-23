import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/nyx_docs/',
  title: 'Nyx',
  description:
    'Documentation for Nyx, a feature-rich Discord bot for moderation, economy, mini-games, leveling, media, and utilities.',
  lastUpdated: true,

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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HFourIVX/nyx_docs' },
    ],

    outline: {
      level: [2, 3],
    },

    footer: {
      message: 'Documentation for the Nyx Discord bot.',
      copyright: 'Hosted with VitePress & GitHub Pages',
    },
  },
})
