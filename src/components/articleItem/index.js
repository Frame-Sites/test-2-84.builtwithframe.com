import Image from 'next/image';
import createImageUrl from '../../utils/createImageUrl';
import styles from '../articles/styles.module.scss';

const ArticleItem = props => {
  const { title, caption, imageUrl, url } = props;
  const imageurl = createImageUrl(imageUrl);
  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      style={{ textDecoration: 'none', color: 'black' }}
      className={styles.articleItem}
    >
      <div className={styles.articleContentWrapper} style={{ cursor: 'pointer' }}>
        <Image quality="100" src={imageurl} height="354" width="354" alt="article" />
        <div className={styles.articleContent}>
          <p>
            <strong
              style={{ fontFamily: 'Graphie-Bold', fontSize: '24px', color: 'rgba(0, 0, 0, 0.92)' }}
            >
              {title}
            </strong>
          </p>
          <p
            style={{
              lineHeight: '22px',
              marginTop: '10px',
              fontSize: '16px',
              color: 'rgba(0, 0, 0, 0.52)',
            }}
          >
            {caption}
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong
              style={{ fontFamily: 'Graphie-Semibold', fontSize: '18px', lineHeight: '22px' }}
            >
              Read More
            </strong>
          </p>
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;
