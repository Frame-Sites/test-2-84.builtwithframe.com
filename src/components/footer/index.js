import styles from './styles.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.left}>
      <img src="/images/frame-footer-logo.svg" alt="frame-footer" />
    </div>
    <div className={styles.right}>
      <p>Powered by Frame Technologies</p>
    </div>
  </div>
);

export default Footer;
