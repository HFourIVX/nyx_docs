import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-actions-after': () =>
        h(
          'a',
          {
            class: 'nyx-scroll-cue',
            href: '#nyx-features',
            'aria-label': 'Scroll to features',
          },
          [
            h(
              'svg',
              {
                width: '22',
                height: '22',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
              },
              [h('polyline', { points: '6 9 12 15 18 9' })]
            ),
          ]
        ),
      'home-features-before': () =>
        h('div', {
          id: 'nyx-features',
          class: 'nyx-features-anchor',
          'aria-hidden': 'true',
        }),
    })
  },
}
