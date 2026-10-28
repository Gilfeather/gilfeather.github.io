import { mkdir, writeFile, readFile } from 'node:fs/promises';

const themeCore = await readFile(new URL('./theme-core.js', import.meta.url), 'utf8');
const copy = {
  ja: {
    title: 'Gilfeather — Software Engineer & Builder',
    description: 'Gilfeatherのポートフォリオ。実務の課題を整理し、シンプルで保守しやすいソフトウェアへ。Rust、Python、TypeScript、AWSを使った開発とオープンソース。',
    nav: ['つくったもの', '大切にすること', 'プロフィール'],
    hero: '考えて、つくる。<br><span>使える</span>ものを。',
    intro: 'UIからAPI、クラウドまで。<br>複雑な課題をほどき、動く仕組みにする<br>フルスタックエンジニア、Gilfeatherです。',
    cta: 'つくったものを見る',
    meta: 'フルスタック開発 / クラウド / AI・開発ツール',
    diagram: ['現場の課題', '構造を整理', '小さく実装', '確かめて改善'],
    diagramLabel: '課題から、動く仕組みへ',
    workTitle: 'コードで、答えをつくる。',
    workIntro: '公開しているプロジェクトと、個人開発の取り組み。<br>それぞれのソースや紹介ページから、詳しくご覧いただけます。',
    projects: [
      {id: '01', name: 'furnace', label: 'OPEN SOURCE / ML INFRASTRUCTURE', headline: '機械学習モデルを、<br>RustのHTTP APIへ。', description: '機械学習モデルをHTTP・gRPC経由で提供するRustのOSS。axumアプリへの組み込みや単独サーバーとして利用でき、Burnなどの推論エンジンを接続する仕組みを開発しています。', tags: ['Rust', 'axum', 'Burn', 'HTTP / gRPC'], href: 'https://github.com/Gilfeather/furnace', link: 'GitHubでソースを見る', visual: 'furnace'},
      {id: '02', name: 'mcp-template', label: 'OPEN SOURCE / AI INTEGRATION', headline: 'AIと業務APIを<br>つなぐ、出発点。', description: 'FastMCPでMCPサーバーを構築するためのPythonテンプレート。認証、エラー処理、キャッシュなど、外部APIとの連携で必要になる処理をまとめています。', tags: ['Python', 'FastMCP', 'REST API'], href: 'https://github.com/Gilfeather/mcp-template', link: 'GitHubでソースを見る', visual: 'mcp'},
      {id: '03', name: 'KamiForge', label: 'PERSONAL PROJECT / APPLICATIONS', headline: '身近な不便を、<br>アプリづくりの起点に。', description: '個人開発アプリを紹介するサイト。AIとの対話を通じて課題を見つける「対話型課題発見ツール」を掲載しています。実用性と使いやすさを大切にした取り組みです。', tags: ['AI', 'アプリ開発', '課題発見'], href: 'https://app.kamiforge.com/#apps', link: 'プロジェクトサイトを見る', visual: 'kami'},
    ],
    more: 'ほかの公開プロジェクト',
    moreDesc: '開発用HTTPサーバーや、AWSの静的サイト基盤など。',
    approachTitle: '動く、その先まで。',
    approachIntro: '実務で使うものだから、<br>問題の捉え方も、保守のしやすさも大切に。',
    principles: [
      ['課題の構造を捉える', 'いきなり機能を増やすのではなく、どこに複雑さや不便が生まれているのかを整理する。解ける大きさにしてから、実装に進みます。'],
      ['シンプルに、明示的に', '意図が読み取れる設計と、扱いやすい仕組みを選ぶ。性能だけでなく、変更しやすさや長期的な保守にも目を向けます。'],
      ['つくりながら、確かめる', '開発ツールやユーティリティを、自分が向き合う課題からつくる。実装、検証、改善を重ねて、使えるものに近づけます。'],
    ],
    aboutTitle: 'Gilfeather',
    about: 'フルスタック開発者として5年以上。組込み・通信を出発点に、Webのフロントエンドとバックエンド、AWS、セキュリティへと経験を広げてきました。TypeScript・Pythonを中心に、画面から運用基盤までをつなぎます。',
    about2: '個人では、実務の課題を起点にしたOSSやアプリを開発。AIを開発や業務の仕組みに取り入れることにも関心を持ち、実装を通じて探っています。',
    stack: '主に使う技術',
    contact: 'コードから、話をはじめよう。',
    contactText: '開発の取り組みや各プロジェクトの詳細はGitHubへ。<br>関連リポジトリのIssueでのフィードバックも歓迎します。',
    contactLink: 'GitHubプロフィール',
    skip: '本文へ移動',
    footer: '考える。つくる。確かめる。',
  },
  en: {
    title: 'Gilfeather — Software Engineer & Builder',
    description: 'The portfolio of Gilfeather, a software engineer building practical, maintainable software with Rust, Python, TypeScript, and AWS.',
    nav: ['Selected work', 'Approach', 'About'],
    hero: 'Think it through.<br>Build something<br><span>worth using.</span>',
    intro: 'From interfaces and APIs to the cloud.<br>I’m Gilfeather, a full-stack engineer turning<br class="desktop-break"> complex problems into working software.',
    cta: 'Explore my work', meta: 'FULL-STACK / CLOUD / AI & DEVELOPER TOOLS',
    diagram: ['Real problem', 'Find the structure', 'Build a small solution', 'Test and improve'], diagramLabel: 'FROM A PROBLEM TO A WORKING SYSTEM',
    workTitle: 'Answers, built in code.',
    workIntro: 'A selection of open-source and personal projects.<br>Explore the repositories and project pages for more detail.',
    projects: [
      {id: '01', name: 'furnace', label: 'OPEN SOURCE / ML INFRASTRUCTURE', headline: 'ML inference,<br>served through Rust.', description: 'An open-source Rust project serving machine learning models over HTTP and gRPC. It can be embedded in an axum application or run as a standalone server, with adapters for inference engines such as Burn.', tags: ['Rust', 'axum', 'Burn', 'HTTP / gRPC'], href: 'https://github.com/Gilfeather/furnace', link: 'Explore the repository', visual: 'furnace'},
      {id: '02', name: 'mcp-template', label: 'OPEN SOURCE / AI INTEGRATION', headline: 'A starting point<br>for connecting AI to APIs.', description: 'A Python template for building MCP servers with FastMCP. It brings together authentication, error handling, caching, and other essentials for integrating external APIs.', tags: ['Python', 'FastMCP', 'REST API'], href: 'https://github.com/Gilfeather/mcp-template', link: 'Explore the repository', visual: 'mcp'},
      {id: '03', name: 'KamiForge', label: 'PERSONAL PROJECT / APPLICATIONS', headline: 'Everyday friction.<br>A reason to build.', description: 'A showcase for personal applications, including an AI dialogue-based problem discovery tool. The work centers on practical value and ease of use.', tags: ['AI', 'Applications', 'Problem discovery'], href: 'https://app.kamiforge.com/#apps', link: 'Visit the project site', visual: 'kami'},
    ],
    more: 'More public projects', moreDesc: 'Including a development HTTP server and static-site infrastructure on AWS.',
    approachTitle: 'Beyond making it work.', approachIntro: 'Software for real use starts with a clear problem<br>and stays useful through thoughtful maintenance.',
    principles: [
      ['Understand the structure', 'Identify where complexity and friction come from. Turn the problem into something tractable before adding more features.'],
      ['Keep it simple and explicit', 'Choose designs whose intent is easy to understand. Consider performance alongside ease of change and long-term maintainability.'],
      ['Build, test, improve', 'Develop tools and utilities from practical problems. Iterate through implementation and verification to make them useful.'],
    ],
    aboutTitle: 'Gilfeather', about: 'A full-stack engineer with over five years of experience. My career began in embedded systems and communications, then expanded into web interfaces, backend development, AWS and security. I work primarily with TypeScript and Python, connecting applications with the infrastructure behind them.',
    about2: 'Outside contract work, I build open-source tools and personal applications driven by practical problems. I’m also exploring how AI can become part of development and operational workflows.',
    stack: 'SELECTED TECHNOLOGIES', contact: 'Start with the code.', contactText: 'Find my projects and development work on GitHub.<br>Feedback through the relevant repository’s issues is welcome.', contactLink: 'GitHub profile', skip: 'Skip to content', footer: 'Think. Build. Verify.',
  },
};

const arrow = '<span aria-hidden="true">↗</span>';
const mark = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 3 36 12v16l-16 9L4 28V12Z"/><path d="m4 12 16 9 16-9M20 21v16M12 16.5l16-9M12 16.5v10l8 4.5"/></svg>';
function visual(type) {
  if (type === 'furnace') return '<div class="visual furnace" aria-hidden="true"><div class="visual-top">MODEL → INFERENCE</div><div class="wire-cube"><i></i><i></i><i></i><b>f</b></div><div class="visual-bottom"><span>MODEL</span><span class="visual-line"></span><span>Rust</span><span class="visual-line"></span><span>API</span></div></div>';
  if (type === 'mcp') return '<div class="visual mcp" aria-hidden="true"><div class="visual-top">CONNECT THE PIECES</div><div class="node-map"><span class="node ai">AI</span><span class="connector"></span><span class="node central">MCP</span><span class="connector"></span><span class="node api">API</span></div><div class="visual-bottom">AUTH / TOOLS / CACHE</div></div>';
  return '<div class="visual kami" aria-hidden="true"><div class="visual-top">A QUESTION IS A BEGINNING</div><div class="question-art"><span>?</span><i></i><i></i><i></i></div><div class="visual-bottom">DISCOVER → DEFINE → BUILD</div></div>';
}
function page(lang) {
  const c = copy[lang];
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f5f9ff"><meta name="color-scheme" content="light dark"><script>${themeCore}</script><title>${c.title}</title><meta name="description" content="${c.description}"><meta property="og:title" content="${c.title}"><meta property="og:description" content="${c.description}"><meta property="og:type" content="website"><meta property="og:locale" content="${lang === 'ja' ? 'ja_JP' : 'en_US'}"><link rel="icon" href="./favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="./style.css"><link rel="stylesheet" href="./appearance.css"><script src="./appearance.js" defer></script><link rel="alternate" hreflang="ja" href="./index.html"><link rel="alternate" hreflang="en" href="./en.html"></head>
<body><a class="skip" href="#main">${c.skip}</a>
<header class="header wrap"><a class="brand" href="${lang === 'ja' ? './' : './en.html'}" aria-label="Gilfeather home">${mark}<span>Gilfeather<span class="brand-dot">.</span></span></a><nav aria-label="${lang === 'ja' ? 'メインナビゲーション' : 'Main navigation'}"><a href="#work">${c.nav[0]}</a><a href="#approach">${c.nav[1]}</a><a href="#about">${c.nav[2]}</a></nav><div class="header-tools"><label class="theme-control"><span aria-hidden="true">◐</span><select class="theme-select" data-theme-select aria-label="${lang === 'ja' ? '表示テーマ' : 'Color theme'}"><option value="system">${lang === 'ja' ? '自動' : 'System'}</option><option value="light">${lang === 'ja' ? 'ライト' : 'Light'}</option><option value="dark">${lang === 'ja' ? 'ダーク' : 'Dark'}</option></select></label><div class="languages" aria-label="Language"><a href="./index.html" lang="ja" ${lang === 'ja' ? 'aria-current="page"' : ''}>JP</a><span>/</span><a href="./en.html" lang="en" ${lang === 'en' ? 'aria-current="page"' : ''}>EN</a></div></div></header>
<main id="main"><section class="hero wrap"><div class="hero-copy"><p class="eyebrow"><span class="small-cross">✳</span> SOFTWARE ENGINEER & BUILDER</p><h1>${c.hero}</h1><p class="hero-intro">${c.intro}</p><a class="button" href="#work">${c.cta}<span aria-hidden="true">↓</span></a><p class="hero-meta">${c.meta}</p></div><div class="blueprint"><div class="blueprint-top"><span>FIELD NOTES — 001</span><span>BUILD / ITERATE</span></div><div class="orbit" aria-hidden="true"><div class="orbit-ring ring-one"></div><div class="orbit-ring ring-two"></div><div class="orbit-ring ring-three"></div><div class="orbit-core">${mark}</div><span class="orbit-point point-one"></span><span class="orbit-point point-two"></span><span class="coordinate">THINK / BUILD / EXPLORE</span></div><div class="pipeline">${c.diagram.map((x,i)=>`<div><span>0${i+1}</span><p>${x}</p>${i<3?'<b aria-hidden="true">↘</b>':''}</div>`).join('')}</div><p class="blueprint-caption">${c.diagramLabel}</p></div></section>
<div class="skills-strip"><div class="wrap"><span>THINK IN SYSTEMS.</span><div>Rust <i>✳</i> Python <i>✳</i> TypeScript <i>✳</i> AWS</div><span>BUILD FOR USE.</span></div></div>
<section class="work wrap section" id="work"><div class="section-heading"><p class="eyebrow">01 / SELECTED WORK</p><h2>${c.workTitle}</h2><p>${c.workIntro}</p></div><div class="project-list">${c.projects.map(p=>`<article class="project">${visual(p.visual)}<div class="project-copy"><div class="project-meta"><span>${p.label}</span><span>${p.id}</span></div><h3>${p.name}</h3><p class="project-headline">${p.headline}</p><p class="project-description">${p.description}</p><ul class="tags">${p.tags.map(t=>`<li>${t}</li>`).join('')}</ul><a class="text-link" href="${p.href}">${p.link}${arrow}</a></div></article>`).join('')}</div><div class="more-work"><div><h3>${c.more}</h3><p>${c.moreDesc}</p></div><div><a href="https://github.com/Gilfeather/ezserve">ezserve ${arrow}</a><a href="https://github.com/Gilfeather/aws-static-site-terraform">aws-static-site-terraform ${arrow}</a></div></div></section>
<section class="approach" id="approach"><div class="wrap section"><p class="eyebrow">02 / HOW I BUILD</p><div class="approach-heading"><h2>${c.approachTitle}</h2><p>${c.approachIntro}</p></div><div class="principles">${c.principles.map((p,i)=>`<article><span class="principle-number">0${i+1}</span><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div><div class="approach-bottom"><span>CLARITY → IMPLEMENTATION → ITERATION</span><span aria-hidden="true">✳</span></div></div></section>
<section class="about wrap section" id="about"><div class="about-label"><p class="eyebrow">03 / ABOUT</p><div class="monogram" aria-hidden="true">g<span>.</span></div><p>SOFTWARE ENGINEER<br>& INDEPENDENT BUILDER</p></div><div class="about-copy"><h2>${c.aboutTitle}<span class="brand-dot">.</span></h2><p>${c.about}</p><p>${c.about2}</p><a class="company-link" href="https://kamiforge.com/">${lang === 'ja' ? '開発のご相談は、合同会社バウントへ ↗' : 'For development enquiries, visit Vaunt ↗'}</a><div class="stack"><h3>${c.stack}</h3><p>Rust <span>/</span> Python <span>/</span> TypeScript <span>/</span> AWS</p></div></div></section>
<section class="contact wrap"><div><p class="eyebrow">LET’S CONNECT</p><h2>${c.contact}</h2><p>${c.contactText}</p></div><a class="button" href="https://github.com/Gilfeather">${c.contactLink}${arrow}</a></section></main><footer class="wrap footer"><a class="brand" href="#main">${mark}<span>Gilfeather.</span></a><span>${c.footer}</span><small>© 2026 Gilfeather</small></footer></body></html>`;
}
await mkdir(new URL('./dist/', import.meta.url), {recursive:true});
for (const lang of ['ja','en']) await writeFile(new URL(`./dist/${lang === 'ja' ? 'index' : 'en'}.html`, import.meta.url), page(lang));
console.log('Built Japanese and English portfolio pages.');
