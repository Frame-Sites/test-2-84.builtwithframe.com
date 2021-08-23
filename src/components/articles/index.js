import ArticleItem from '../articleItem';
import styles from './styles.module.scss';

const Article = ({ articles }) => (
  <div id="ArticleSection" className={styles.articlePageWrapper}>
    <h2>Articles</h2>
    {articles.length === 1 && (
      <div className={styles.articleContentGrid} style={{ display: 'flex' }}>
        {articles.map(article => (
          <ArticleItem {...article} key={article.id} />
        ))}
      </div>
    )}
    {articles.length > 1 && (
      <div className={styles.articleContentGrid}>
        {articles.map(article => (
          <ArticleItem {...article} key={article.id} />
        ))}
      </div>
    )}
  </div>
);

export default Article;
