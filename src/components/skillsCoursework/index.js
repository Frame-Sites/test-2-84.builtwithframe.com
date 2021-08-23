import styles from './styles.module.scss';

const SkillsCoursework = ({ skills, coursework }) => (
  // console.log(skills, coursework);
  <div id="SkillsSection" className={styles.mainContainer}>
    {!!skills.length && (
      <div className={styles.containerLeft}>
        <h2>Skills</h2>
        <ul>
          {skills.map(item => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
      </div>
    )}
    {!!coursework.length && (
      <div className={styles.containerRight}>
        <h2>Coursework</h2>
        <ul>
          {coursework.map(item => (
            <li key={item.id}>{item.course_name}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
export default SkillsCoursework;
