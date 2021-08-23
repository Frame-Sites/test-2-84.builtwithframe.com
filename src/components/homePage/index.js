import Landing from '../landing';
import SkillsCoursework from '../skillsCoursework';
import About from '../about';
import Article from '../articles';
import Navbar from '../navbar';
import Footer from '../footer';
import Meta from '../meta';

const HomePage = props => {
  const { profile } = props;
  // console.log(props);
  const intro = profile.intro[0].content;
  const imageUrl = profile?.assets.filter(asset => asset.type === 'primary')[0]?.url;
  const resumeAssetsLength = profile?.assets.filter(asset => asset.type === 'resume').length;
  const resumeUrl = profile?.assets.filter(asset => asset.type === 'resume')[resumeAssetsLength - 1]
    ?.url;
  const name = `${profile.first_name} ${profile.last_name}`;
  const { socials, skills, coursework, experience, leadership, education, articles } = profile;
  const renderAbout = !!education.length || !!leadership.length || !!experience.length;
  const rederSkillsCoursework = !!skills.length || !!coursework.length;
  // console.log(intro, imageUrl, socials);
  const navbarProps = {
    resumeUrl,
    articles,
    rederSkillsCoursework,
    renderAbout,
  };
  const landingPageProps = {
    name,
    intro,
    imageUrl,
    socials,
  };
  const skillscourseworkProps = {
    skills,
    coursework,
  };
  const AboutProps = {
    experience,
    leadership,
    education,
  };
  const ArticlesProps = {
    articles,
  };
  const metaProps = {
    imageUrl,
    name,
    intro,
    keywords: `${name}, personal website, portfolio`,
  };

  // const intro = props.intr
  return (
    <>
      <Meta {...metaProps} />
      <Navbar {...navbarProps} />
      <Landing {...landingPageProps} />
      {rederSkillsCoursework && <SkillsCoursework {...skillscourseworkProps} />}
      {renderAbout && <About {...AboutProps} />}
      {!!articles.length && <Article {...ArticlesProps} />}
      <Footer />
    </>
  );
};

export default HomePage;
