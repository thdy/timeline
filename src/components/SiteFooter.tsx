import { ContentWrapper } from '../components/ContentWrapper';
import styles from '../styles/components/SiteFooter.module.scss';

export const SiteFooter = () => {
  return (
    <ContentWrapper>
      <div className={styles.container}>
        <p>
          © 2023 thdy All rights reserved.
        </p>
      </div>
    </ContentWrapper>
  );
};
