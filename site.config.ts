export default {
  title: "thdy's timeline",
  description: 'personal website by thdy.',
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://thdy.jp'
      : 'http://localhost:3000',
  rssUrlList: [
    'https://zenn.dev/thdy/feed',
    'https://note.com/thdy/rss',
    'https://thdy.hatenablog.jp/rss',
  ],
};
