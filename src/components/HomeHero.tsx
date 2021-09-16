import styles from '../styles/components/HomeHero.module.scss';
import { TwitterIcon } from './TwitterIcon';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/icon.svg" alt="Hello" width={51} height={58} />
      <p className={styles.description}>
        <h2 >Hi there 👋</h2>
        <h2 >I'm Shintaro Kaku (a.k.a thdy)</h2>
        Corporate Engineer. Currently working on{' '}
        <a href="https://hey.jp">hey, Inc.</a> <br></br>Follow{' '}
        <a href="https://twitter.com/thdy_jp">
          @thdy_jp
          <TwitterIcon width={18} height={18} />
        </a>{' '}
        for daily updates.
      </p>
    </div>
  );
};
