import Head from 'next/head';
import jsonItems from '../../.items.json';
import siteConfig from '../../site.config';
import styles from '../styles/components/HomeHero.module.scss';
import { ContentWrapper } from '../components/ContentWrapper';
import { HomeHero } from '../components/HomeHero';
import { Timeline } from '../components/Timeline';
import { itemsSchema } from '../schema';

const IndexPage = () => {
  const items = itemsSchema.parse(jsonItems);
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <link rel="canonical" href={siteConfig.siteRoot} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta name="description" content={siteConfig.description} />
      </Head>
      <ContentWrapper>
        <HomeHero />
        <div className={styles.description}>
          <h1>Timeline</h1>
        </div>
        <div>
          <Timeline items={items} />
        </div>
      </ContentWrapper>
    </>
  );
};

export default IndexPage;
