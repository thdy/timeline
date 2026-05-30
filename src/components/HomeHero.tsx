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
          - Corporate Engineer
        </p>
        <p>
          - Remote worker in Hiroshima, Japan
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
      </div>
    </div>
  );
};
