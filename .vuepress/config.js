module.exports = {
  title: 'ИИ от нуля до профи',
  description: 'Самая понятная русскоязычная база знаний об искусственном интеллекте, нейросетях и агентах',
  base: '/aikb/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'description', content: 'База знаний об ИИ для всех: от школьников до разработчиков' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'База знаний', link: '/index.html' },
      { text: 'GitHub', link: 'https://github.com/yourusername/aikb' }
    ],
    sidebar: {
      '/': [
        {
          title: 'Основы (Уровень 0)',
          collapsable: true,
          children: [
            '/topics/what-is-ai',
            '/topics/chatgpt-first-steps',
            '/topics/ai-mistakes',
            '/topics/ai-trust',
            '/topics/ai-safety-basics',
            '/topics/ai-in-daily-life'
          ]
        },
        {
          title: 'Промптинг (Уровень 1-2)',
          collapsable: true,
          children: [
            '/topics/prompting-basics',
            '/topics/what-is-prompt',
            '/topics/precise-answers',
            '/topics/prompting-mistakes',
            '/topics/advanced-prompting',
            '/topics/chain-of-thought',
            '/topics/prompt-templates'
          ]
        },
        {
          title: 'Технические основы (Уровень 1-2)',
          collapsable: true,
          children: [
            '/topics/what-is-model',
            '/topics/neural-network-training',
            '/topics/hallucinations',
            '/topics/tokens-context',
            '/topics/model-parameters',
            '/topics/rag-basics',
            '/topics/agents-intro'
          ]
        },
        {
          title: 'Продвинутые темы (Уровень 3)',
          collapsable: true,
          children: [
            '/topics/embeddings',
            '/topics/vector-databases',
            '/topics/fine-tuning',
            '/topics/lora',
            '/topics/attention-mechanism'
          ]
        },
        {
          title: 'Инструменты',
          collapsable: true,
          children: [
            '/tools/chatgpt',
            '/tools/claude',
            '/tools/cursor',
            '/tools/github-copilot',
            '/tools/midjourney',
            '/tools/perplexity'
          ]
        }
      ]
    },
    lastUpdated: 'Последнее обновление',
    smoothScroll: true,
    searchMaxSuggestions: 10
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', {
      selector: 'img.zoom-custom-imgs',
      options: {
        margin: 16
      }
    }]
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ html: true })
      const taskLists = require('markdown-it-task-lists')
      md.use(taskLists, { enabled: true })
    }
  }
}
