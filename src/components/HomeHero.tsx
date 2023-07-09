import styles from '../styles/components/HomeHero.module.scss';
import { TwitterIcon } from './TwitterIcon';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/icon.svg" alt="Hello" width={51} height={51} />
      <div className={styles.description}>
        <h2>Hi there 👋</h2>
        <h2>I'm Shintaro Kaku (a.k.a thdy)</h2>
        <p>
          Corporate Engineer at{' '}
          <a href="https://st.inc">STORES, Inc.</a>
        </p>
        <p>
          Go to <a href="https://thdy.bio.link/">thdy.bio.link</a> for my profile and various links.
        </p>
      </div>
    </div>
  );
};
