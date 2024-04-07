import styles from '../styles/components/HomeHero.module.scss';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/icon.svg" alt="Hello" width={80} height={80} style={{ marginRight: '10px' }} />
      <img src="/icon2.png" alt="Hello" width={80} height={80} />
      <div className={styles.description}>
        <h1>About</h1>
        <h3>Shintaro Kaku / 加来 慎太郎</h3>
        <p>
          - Corporate Engineer at <a href="https://goinc.jp/">GO Inc.</a>
        </p>
        <p>
          - Remote worker in Hiroshima, Japan
        </p>
        <p>
          - <a href="https://okta.connpass.com/">Japan Okta User Group</a> organizer
        </p>
        <br></br>
        <h1>Links</h1>
        <p>
          <a href="https://twitter.com/thdy_jp">Twitter: @thdy_jp</a>
        </p>
        <p>
          <a href="https://bsky.app/profile/thdy.jp">Bluesky</a>
        </p>
        <p>
          <a href="https://github.com/thdy">GitHub: @thdy</a>
        </p>
        <p>
          <a href="https://zenn.dev/thdy">zenn.dev</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/thdy/">LinkedIn</a>
        </p>
        <p>
          <a href="https://youtrust.jp/users/thdy">YOUTRUST</a>
        </p>
        <p>
          <a href="https://lapras.com/public/thdy">LAPRAS</a>
        </p>
        <p>
          <a href="https://www.wantedly.com/id/thdy">Wantedly</a>
        </p>
        <p>
          <a href="https://www.buymeacoffee.com/thdy">Buy Me a Coffee</a>
        </p>
        <p>
          <a href="https://www.amazon.jp/hz/wishlist/ls/14DHJZS00NLUS?ref_=wl_share">Amazon wishlist</a>
        </p>
      </div>
    </div>
  );
};
