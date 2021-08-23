import { Link as Scrolllink } from 'react-scroll';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { createImageUrl, downloadResume } from '../../utils';

const Navbar = ({ articles, renderAbout, rederSkillsCoursework, resumeUrl }) => {
  // const resume = createImageUrl(resumeUrl);
  const [resumeUri, SetResumeUri] = useState('');
  const [navState, setNavState] = useState('close');
  const changeNavState = () => {
    const state = navState === 'close' ? 'open' : 'close';
    setNavState(state);
  };
  const [navItemSeclected, setNavItemSelected] = useState('home');
  const changeNavItemState = data => {
    setNavItemSelected(data);
  };
  useEffect(async () => {
    const resume = await createImageUrl(resumeUrl);
    const url = await downloadResume(resume);
    SetResumeUri(url);
  }, []);
  // console.log(resumeUrl);
  return (
    /*eslint-disable*/
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        {/* <img src="/images/frame-logo.svg" alt="Logo" /> */}
        <div
          className={styles.tempImage}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
      <div className={styles.navMiddle}>
        <ul className={styles.navItems}>
          <Scrolllink
            activeClass="active"
            to="LandingSection"
            smooth
            spy
            offset={-160}
            duration={600}
            className={styles.navLink}
          >
            <li
              className={`${navItemSeclected === 'home' ? 'activeLink' : ''}`}
              onClick={() => changeNavItemState('home')}
            >
              Home
            </li>
          </Scrolllink>
          {renderAbout && (
            <Scrolllink
              activeClass="active"
              to="AboutSection"
              smooth
              spy
              offset={-110}
              duration={600}
              className={styles.navLink}
            >
              <li
                className={`${navItemSeclected === 'about' ? 'activeLink' : ''}`}
                onClick={() => changeNavItemState('about')}
              >
                About
              </li>
            </Scrolllink>
          )}
          {!!articles.length && (
            <Scrolllink
              activeClass="active"
              to="ArticleSection"
              smooth
              spy
              offset={-100}
              duration={600}
              className={styles.navLink}
            >
              <li
                className={`${navItemSeclected === 'articles' ? 'activeLink' : ''}`}
                onClick={() => changeNavItemState('articles')}
              >
                Articles
              </li>
            </Scrolllink>
          )}
          {rederSkillsCoursework && (
            <Scrolllink
              activeClass="active"
              to="SkillsSection"
              smooth
              spy
              offset={-100}
              duration={600}
              className={styles.navLink}
            >
              <li
                className={`${navItemSeclected === 'skills' ? 'activeLink' : ''}`}
                onClick={() => changeNavItemState('skills')}
              >
                Skills
              </li>
            </Scrolllink>
          )}
        </ul>
      </div>
      <div className={styles.navRight}>
        <a target="_blank" href={resumeUri}>
          <button type="button" className={styles.navButtom}>
            Resume
          </button>
        </a>
      </div>
      <div
        className={`${styles.navRightMobile} ${navState}`}
        onClick={() => changeNavState()}
        onKeyDown={() => changeNavState()}
        role="button"
        tabIndex={-1}
      >
        <div className={`bar1 ${navState}`} />
        <div className={`bar2 ${navState}`} />
        <div className={`bar3 ${navState}`} />
      </div>
      <div className={`${styles.navMobile} ${navState === 'close' ? styles.close : styles.open}`}>
        <ul className={styles.navItemsMobile}>
          <Scrolllink
            activeClass="active"
            to="LandingSection"
            smooth
            spy
            offset={-160}
            duration={600}
            className={styles.navLinkMobile}
          >
            <li className={styles.navItemMobile} onClick={() => changeNavState()}>
              Home
            </li>
          </Scrolllink>
          {renderAbout && (
            <Scrolllink
              activeClass="active"
              to="AboutSection"
              smooth
              spy
              offset={-150}
              duration={600}
              className={styles.navLinkMobile}
            >
              <li className={styles.navItemMobile} onClick={() => changeNavState()}>
                About
              </li>
            </Scrolllink>
          )}
          {!!articles.length && (
            <Scrolllink
              activeClass="active"
              to="ArticleSection"
              smooth
              spy
              offset={-100}
              duration={600}
              className={styles.navLinkMobile}
            >
              <li className={styles.navItemMobile} onClick={() => changeNavState()}>
                Articles
              </li>
            </Scrolllink>
          )}
          {rederSkillsCoursework && (
            <Scrolllink
              activeClass="active"
              to="SkillsSection"
              smooth
              spy
              offset={-100}
              duration={600}
              className={styles.navLink}
            >
              <li className={styles.navItemMobile} onClick={() => changeNavState()}>
                Skills
              </li>
            </Scrolllink>
          )}
          {/* <li> */}
          <a target="_blank" href={resumeUri}>
            <button
              // onClick={() => downloadResume(resume)}
              type="button"
              className={styles.navMobileButtom}
            >
              Resume
            </button>
          </a>
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
