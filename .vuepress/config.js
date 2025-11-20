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
      { text: 'База знаний', link: '/index' },
      { text: 'GitHub', link: 'https://github.com/IgorKramar/aikb' }
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
            '/topics/ai-in-daily-life',
            '/topics/ai-ml-neural-networks-difference',
            '/topics/ai-mastery-plan'
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
            '/topics/prompt-templates',
            '/topics/chatgpt-context-management',
            '/topics/chatgpt-step-by-step-instructions'
          ]
        },
        {
          title: 'Практика (Уровень 1-2)',
          collapsable: true,
          children: [
            '/topics/ai-models-comparison',
            '/topics/chatgpt-models-explained',
            '/topics/chatgpt-advanced-features',
            '/topics/chatgpt-business-cases',
            '/topics/ai-video-generation',
            '/topics/ai-image-generation-free',
            '/topics/ai-voice-synthesis',
            '/topics/claude-large-documents',
            '/topics/custom-gpts',
            '/topics/ai-content-creation',
            '/topics/ai-books-creation',
            '/topics/midjourney-practical-guide',
            '/topics/midjourney-complete-guide',
            '/topics/gpt-agents-practical',
            '/topics/ai-artist',
            '/topics/way-of-ai-artist-in-omsk',
            '/topics/use-flux-in-syntxai'
          ]
        },
        {
          title: 'Технические основы (Уровень 1-2)',
          collapsable: true,
          children: [
            '/topics/neural-network-basics',
            '/topics/neural-network-training-process',
            '/topics/neural-network-deep-dive',
            '/topics/what-is-model',
            '/topics/neural-network-training',
            '/topics/hallucinations',
            '/topics/why-ai-lies',
            '/topics/tokens-context',
            '/topics/model-parameters',
            '/topics/rag-basics',
            '/topics/agents-intro',
            '/topics/local-ai-models'
          ]
        },
        {
          title: 'Продвинутые темы (Уровень 3)',
          collapsable: true,
          children: [
            '/topics/ai-full-academic',
            '/topics/embeddings',
            '/topics/vector-databases',
            '/topics/fine-tuning',
            '/topics/lora',
            '/topics/lora-creation-guide',
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
            '/tools/perplexity',
            '/tools/google-ai-studio',
            '/tools/syntx',
            '/tools/flux'
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
