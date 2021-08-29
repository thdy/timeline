import styles from '../styles/components/HomeHero.module.scss';
import { TwitterIcon } from './TwitterIcon';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/icon.svg" alt="Hello" width={51} height={58} />
      <h1 className={styles.title}>Hi, I'm Shintaro Kaku (@thdy)</h1>
      <p className={styles.description}>
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
