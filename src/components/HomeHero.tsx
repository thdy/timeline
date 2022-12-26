import styles from '../styles/components/HomeHero.module.scss';
import { TwitterIcon } from './TwitterIcon';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/icon.svg" alt="Hello" width={51} height={58} />
      <p className={styles.description}>
        <h2 >Hi there 👋</h2>
        <h2 >I'm Shintaro Kaku (a.k.a thdy)</h2>
        Corporate Engineer at{' '}
        <a href="https://st.inc">STORES, Inc.</a> <br></br>Feel free to reach out me via Twitter{' '}
        <TwitterIcon width={18} height={18} />
        <a href="https://twitter.com/thdy_jp">
          @thdy_jp
        </a>{' '}
      </p>
    </div>
  );
};
